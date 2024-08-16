import { useContext } from "react";
import BookingInfoContext from "../context/BookingInfoContext";

const useBookingInfo = () => {
  return useContext(BookingInfoContext);
};

export default useBookingInfo;
