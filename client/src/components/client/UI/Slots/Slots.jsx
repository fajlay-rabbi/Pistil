/* eslint-disable react/prop-types */
import "./slots.scss";
import SlotsItem from "./SlotsItem";

const Slots = ({ date, schedule, availableTime }) => {
  return (
    <div className="slot-wrapper">
      <div className="slot-title">
        <h3>Selected slots</h3>
        <p>You may make single or multiple bookings</p>
      </div>
      <SlotsItem
        date={date}
        schedule={schedule}
        availableTime={availableTime}
      />
    </div>
  );
};

export default Slots;
