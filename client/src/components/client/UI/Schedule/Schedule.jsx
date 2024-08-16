import { useState } from "react";
import ServiceItem from "../../../shared/ServiceItem/ServiceItem";
import "./schedule.scss";
import useBookingInfo from "../../../../hooks/useBookingInfo";

const Schedule = () => {
  const { onSaveSchedule, schedule } = useBookingInfo();
  const [activeSchedule, setActiveSchedule] = useState(schedule || "");

  const time = ["15 Min", "30 Min", "1 Hour"];

  const handleClick = (name) => {
    onSaveSchedule(name);
  };

  return (
    <div className="schedule-section">
      <h3>Schedule time</h3>
      <div className="schedule-wrapper">
        {time.map((time, index) => (
          <ServiceItem
            key={index}
            name={time}
            activeService={activeSchedule}
            setActiveService={setActiveSchedule}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
