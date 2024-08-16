import { ConfigProvider } from "antd";
import { BookingInfoProvider } from "../context/BookingInfoContext";

const Provider = ({ children }) => {
  return <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#13B4B3",
      },
    }}
  >
    <BookingInfoProvider>{ children}</BookingInfoProvider>
  </ConfigProvider>;
}

export default Provider;
