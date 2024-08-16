import { useState } from "react";
import ServiceItem from "../../../shared/ServiceItem/ServiceItem";
import "./Service.scss";
import useBookingInfo from "../../../../hooks/useBookingInfo";

const Service = () => {
  const { onSaveService, service } = useBookingInfo();
  const [activeService, setActiveService] = useState(service || "");

  const services = [
    "Contraceptives",
    "Family Planning",
    "Individual",
    "STDs",
    "Pregnancy",
    "Post Partum",
    "Perimenopause",
    "Menopause",
    "Cancer",
  ];

  const handleClick = (name) => {
    onSaveService(name)
  };



  return (
    <div className="Service-container">
      <h3 className="service-title">Service</h3>
      <div className="service-items">
        {services.map((item, index) => (
          <ServiceItem
            key={index}
            name={item}
            activeService={activeService}
            setActiveService={setActiveService}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
