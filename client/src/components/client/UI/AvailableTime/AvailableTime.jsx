import { useState } from "react";
import "./availableTime.scss";
import ServiceItem from "../../../shared/ServiceItem/ServiceItem";
import useBookingInfo from "../../../../hooks/useBookingInfo";

const AvailableTime = () => {
  const { onSaveAvailableTime, availableTime } = useBookingInfo();
  const [availaTime, setAvailableTime] = useState(availableTime || "");
  const availTime = [
    "08:00 - 09:00 AM",
    "10:00 - 11:00 AM",
    "09:00 - 10:00 AM",
    "11:00 - 12:00 AM",
    "12:00 - 01:00 PM",
  ];

  const handleClick = (name) => {
    onSaveAvailableTime(name);
  };

  return (
    <div className="available-wrapper">
      <h3>Available time</h3>
      <div className="schedule-wrapper">
        {availTime.map((time, index) => (
          <ServiceItem
            key={index}
            name={time}
            activeService={availaTime}
            setActiveService={setAvailableTime}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailableTime;
