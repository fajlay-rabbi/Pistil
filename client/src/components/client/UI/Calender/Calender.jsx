import "./calender.scss";

import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { Calendar, Col, Radio, Row, Select, theme } from "antd";
import dayLocaleData from "dayjs/plugin/localeData";
import useBookingInfo from "../../../../hooks/useBookingInfo";
import { useEffect, useState } from "react";
dayjs.extend(dayLocaleData);

const MyCalendar = () => {
  const { onSaveDate, date } = useBookingInfo();
  const { token } = theme.useToken();

  const parseDate = (dateString) => {
    const datePart = dateString.split(" ")[0];
    return dayjs(datePart);
  };

  const initialDate = date ? parseDate(date) : dayjs();
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const wrapperStyle = {
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const onSelect = (date) => {
    const selectedDate = date.format("YYYY-MM-DD");
    const weekdayName = date.format("dddd");
    let formattedDate = `${selectedDate} ${weekdayName}`;
    onSaveDate(formattedDate);
    setSelectedDate(date)
  };

  useEffect(() => {
    const initialDate = selectedDate.format("YYYY-MM-DD");
    const weekdayName = selectedDate.format("dddd");
    let formattedDate = `${initialDate} ${weekdayName}`;
    onSaveDate(formattedDate);
  }, [selectedDate, onSaveDate]);

  return (
    <div style={wrapperStyle}>
      <Calendar
        value={selectedDate}
        fullscreen={false}
        onSelect={onSelect}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];
          let current = value.clone();
          const localeData = value.localeData();
          const months = [];
          for (let i = 0; i < 12; i++) {
            current = current.month(i);
            months.push(localeData.monthsShort(current));
          }
          for (let i = start; i < end; i++) {
            monthOptions.push(
              <Select.Option key={i} value={i} className="month-item">
                {months[i]}
              </Select.Option>
            );
          }
          const year = value.year();
          const month = value.month();
          const options = [];
          for (let i = year - 10; i < year + 10; i += 1) {
            options.push(
              <Select.Option key={i} value={i} className="year-item">
                {i}
              </Select.Option>
            );
          }
          return (
            <div
              style={{
                padding: 8,
              }}
            >
              <Row gutter={8}>
                <Col>
                  <Radio.Group
                    size="small"
                    onChange={(e) => onTypeChange(e.target.value)}
                    value={type}
                  >
                    <Radio.Button value="month">Month</Radio.Button>
                    <Radio.Button value="year">Year</Radio.Button>
                  </Radio.Group>
                </Col>
                <Col>
                  <Select
                    size="small"
                    popupMatchSelectWidth={false}
                    className="my-year-select"
                    value={year}
                    onChange={(newYear) => {
                      const now = value.clone().year(newYear);
                      onChange(now);
                    }}
                  >
                    {options}
                  </Select>
                </Col>
                <Col>
                  <Select
                    size="small"
                    popupMatchSelectWidth={false}
                    value={month}
                    onChange={(newMonth) => {
                      const now = value.clone().month(newMonth);
                      onChange(now);
                    }}
                  >
                    {monthOptions}
                  </Select>
                </Col>
              </Row>
            </div>
          );
        }}
        onPanelChange={onPanelChange}
      />
    </div>
  );
};

export default MyCalendar;
