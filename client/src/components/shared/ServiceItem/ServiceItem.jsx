/* eslint-disable react/prop-types */
import "./serviceItem.scss";

const ServiceItem = ({ name, activeService, setActiveService, onClick }) => {
  const isActive = activeService === name;
  const classname = isActive ? "item active" : "item";

  const serviceHandler = () => {
    if (onClick) {
      onClick(name);
    }
    setActiveService(name);
  };

  return (
    <div className={classname} onClick={serviceHandler}>
      <p>{name}</p>
    </div>
  );
};

export default ServiceItem;
