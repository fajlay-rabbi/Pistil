/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const BookingInfoContext = createContext({
  service: "",
  medium: "",
  date: "",
  schedule: "",
  availableTime: "",
});

export const BookingInfoProvider = ({ children }) => {
  const [service, setService] = useState("");
  const [medium, setMedium] = useState("");
  const [date, setDate] = useState("");
  const [schedule, setSchedule] = useState("");
  const [availableTime, setAvailableTime] = useState("");

  const onSaveService = (service) => {
    setService(service);
  };

  const onSaveMedium = (medium) => {
    setMedium(medium);
  };

  const onSaveDate = (date) => {
    setDate(date);
  };

  const onSaveSchedule = (schedule) => {
    setSchedule(schedule);
  };

  const onSaveAvailableTime = (availableTime) => {
    setAvailableTime(availableTime);
  };

  const value = {
    service,
    medium,
    date,
    schedule,
    availableTime,
    onSaveService,
    onSaveMedium,
    onSaveDate,
    onSaveSchedule,
    onSaveAvailableTime,
  };

  return (
    <BookingInfoContext.Provider value={value}>
      {children}
    </BookingInfoContext.Provider>
  );
};

export default BookingInfoContext;
