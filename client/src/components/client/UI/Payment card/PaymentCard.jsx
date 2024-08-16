/* eslint-disable react/prop-types */
import { CheckCircleOutlined } from "@ant-design/icons";
import "./paymentcard.scss";

const PaymentCard = ({ name, img, activeClass, setActiveClass }) => {
  let isActive = activeClass === name;
  let badgeClassname = isActive ? "my-badge" : "d-none";
  let CardClassname = isActive ? "pay-card active-payment" : "pay-card";
  const PaymentCardHandler = () => {
    setActiveClass(name);
  };
  return (
    <>
      <div className={CardClassname} onClick={PaymentCardHandler}>
        <div className={badgeClassname}>
          <CheckCircleOutlined />
        </div>
        <img src={img} />
      </div>
    </>
  );
};

export default PaymentCard;
