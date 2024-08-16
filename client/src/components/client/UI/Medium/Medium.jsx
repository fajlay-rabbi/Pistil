import { useState } from "react";
import ServiceItem from "../../../shared/ServiceItem/ServiceItem";
import useBookingInfo from "../../../../hooks/useBookingInfo";

const Medium = () => {
  const { onSaveMedium, medium } = useBookingInfo();
  const [activeMedium, setActiveMedium] = useState(medium || "");

  const service = ["Call", "In-Person"];

  const handleClick = (name) => {
    onSaveMedium(name);
  };

  return (
    <div className="Service-container">
      <h3 className="service-title">Medium</h3>
      <div className="service-items">
        {service.map((item, index) => (
          <ServiceItem
            key={index}
            name={item}
            activeService={activeMedium}
            setActiveService={setActiveMedium}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Medium;
