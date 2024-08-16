import "./userSelection.scss";

const UserSelection = ({ service, medium }) => {
  return (
    <div className="userSelection-wrapper">
      <div className="slot-1">
        <p>Service</p>
        <h4>{service}</h4>
      </div>
      <div className="slot-2">
        <p>Medium</p>
        <h4>{medium}</h4>
      </div>
    </div>
  );
};

export default UserSelection;
