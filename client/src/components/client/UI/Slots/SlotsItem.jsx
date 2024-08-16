import "./slots.scss";
import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";

const SlotsItem = ({ date, schedule, availableTime }) => {
  return (
    <div className="slotItem-wrapper">
      <div>
        <div className="slotDate">
          <CalendarOutlined />
          <p>{date}</p>
        </div>
        <div className="slotTime">
          <ClockCircleOutlined />
          <p>
            {availableTime} <span className="slotTiming">({schedule})</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlotsItem;
