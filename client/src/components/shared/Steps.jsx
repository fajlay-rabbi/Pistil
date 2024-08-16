import { Steps } from "antd";
const Step = ({steps}) => (
  <Steps
    size="small"
    current={steps}
    items={[
      {
        title: "Choose  Service",
      },
      {
        title: "Booking",
      },
      {
        title: "Payment",
      },
    ]}
  />
);
export default Step;
