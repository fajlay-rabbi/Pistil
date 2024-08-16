import SlotsItem from "../../components/client/UI/Slots/SlotsItem";
import "./buyPackage.scss";
import {
  AimOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CreditCardOutlined,
  EnvironmentOutlined,
  FlagOutlined,
  FormOutlined,
  HomeOutlined,
  MailOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Row, Col, Input, Button, Select, Checkbox, Divider } from "antd";

import VisaIcon from "../../assets/visa.png";
import MasterIcon from "../../assets/master.png";
import AmericanIcon from "../../assets/american.png";
import JckIcon from "../../assets/jsk.png";
import PaymentCard from "../../components/client/UI/Payment card/PaymentCard";
import { useState } from "react";
import Flag from "../../assets/MY.png";

const { Option } = Select;

const BuyPackage = () => {
  const [activeClass, setActiveClass] = useState("visa");

  const countries = [
    {
      value: "malaysia",
      label: "Malaysia",
      imgSrc: Flag,
    },
    {
      value: "bangladesh",
      label: "Bangladesh",
      imgSrc: Flag,
    },
    {
      value: "usa",
      label: "USA",
      imgSrc: Flag,
    },
  ];

  return (
    <div className="buy-package-section">
      <div className="my-card">
        <div className="flex justify wrap align-center">
          <div className="m-20">
            <h2 className="txt-green">Selected Slots</h2>
            <p className="txt-color mt-5 mb-10">
              You may make single or multiple bookings
            </p>
            <div className="flex gap-10 high-dark">
              <FormOutlined />
              <p>Edit</p>
            </div>
          </div>
          <div className="flex gap-10 wrap">
            <SlotsItem
              date={"Tue, 24 oct 2023"}
              schedule={"30 min"}
              availableTime={"0.8:00 - 08.30 AM"}
            />
            <SlotsItem
              date={"Wed, 25 oct 2023"}
              schedule={"30 min"}
              availableTime={"0.8:00 - 08.30 AM"}
            />
          </div>
        </div>
      </div>

      <div className="my-flex mt-20">
        <div className="col-1">
          <div className="medical-title">
            <h2 className="txt-green">Billing Details</h2>
            <p className="txt-color">
              Please note that your session receipt(s) will reflect the details
              below, and cannot be changed later
            </p>
          </div>

          <div className="mt-30">
            <label className="my-txt">Full name</label>
            <Input
              className="input mt-10 f-width"
              size="large"
              value={"Firdaus Juanda"}
              prefix={<UserSwitchOutlined className="icon" />}
            />
          </div>

          <div className="mt-30">
            <label className="my-txt">Email</label>
            <Input
              className="input mt-10 f-width"
              size="large"
              value={"firdausjuanda06@gmail.com"}
              prefix={<MailOutlined className="icon" />}
            />
          </div>

          <div className="mt-30">
            <label className="my-txt">Address</label>
            <Input
              className="input mt-10 f-width"
              size="large"
              value={"firdausjuanda06@gmail.com"}
              prefix={<AimOutlined className="icon" />}
            />
          </div>

          <Row gutter={[24, 24]} className="mt-30">
            <Col xs={24} md={12}>
              <label className="my-txt">Country</label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"Malaysia"}
                prefix={<AimOutlined className="icon" />}
              />
            </Col>

            <Col xs={24} md={12}>
              <label className="my-txt">State</label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"Johor"}
                prefix={<FlagOutlined className="icon" />}
              />
            </Col>
          </Row>

          <Row gutter={[24, 24]} className="mt-30">
            <Col xs={24} md={12}>
              <label className="my-txt">City</label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"Johor"}
                prefix={<HomeOutlined className="icon" />}
              />
            </Col>
            <Col xs={24} md={12}>
              <label className="my-txt">Postal code</label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"37169"}
                prefix={<EnvironmentOutlined className="icon" />}
              />
            </Col>
          </Row>

          <div className="medical-title mt-30">
            <h2 className="txt-green">Payment Method</h2>
            <p className="txt-color">
              Please note that your session receipt(s) will reflect the details
              below, and cannot be changed later
            </p>
          </div>

          <Row gutter={[24,24]} className="mt-20 f-width">
            <Col xs={24} md={8}>
              <PaymentCard
                name="visa"
                img={VisaIcon}
                activeClass={activeClass}
                setActiveClass={setActiveClass}
              />
            </Col>
            <Col xs={24} md={8}>
              <PaymentCard
                name="master"
                img={MasterIcon}
                activeClass={activeClass}
                setActiveClass={setActiveClass}
              />
            </Col>
            <Col xs={24} md={8}>
              <PaymentCard
                name="american"
                img={AmericanIcon}
                activeClass={activeClass}
                setActiveClass={setActiveClass}
              />
            </Col>
            <Col xs={24} md={8}>
              <PaymentCard
                name="jcb"
                img={JckIcon}
                activeClass={activeClass}
                setActiveClass={setActiveClass}
              />
            </Col>
          </Row>

          <div className="mt-20">
            <label className="my-txt">Card number</label>
            <Input
              className="input mt-10 f-width"
              size="large"
              value={"1234 4567 789 0123"}
              prefix={<CreditCardOutlined className="icon" />}
            />
          </div>

          <Row gutter={[24, 24]} className="mt-30">
            <Col xs={24} md={12}>
              <label className="my-txt">Expiration</label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"08-13-24"}
                prefix={<CalendarOutlined className="icon" />}
              />
            </Col>

            <Col xs={24} md={12}>
              <label className="my-txt">CVC</label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"1234"}
                prefix={<CreditCardOutlined className="icon" />}
              />
            </Col>
          </Row>

          <div className="mt-20">
            <label className="my-txt">Country</label>

            <Select
              className="f-width mt-10"
              size="large"
              defaultValue="malaysia"
              style={{ width: 200 }}
            >
              {countries.map((country) => (
                <Option key={country.value} value={country.value}>
                  <img
                    src={country.imgSrc}
                    alt={country.label}
                    style={{ width: 20, marginRight: 8 }}
                  />
                  {country.label}
                </Option>
              ))}
            </Select>
          </div>
          <div className="mt-30 mb-10">
            <Button
              className="f-width lg-btn input"
              type="primary"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Make Payment
            </Button>
          </div>
        </div>
        <div className="col-2">
          <h2 className="txt-green">Your doctor "Sundar"</h2>
          <p className="txt-color txt-sm mt-10">
            Pistil's rescheduling policy does not allow the appointment
            (including medium and service) to be changed within 24 hours of the
            scheduled time.
          </p>
          <div className="highlightedCard mt-30">
            <p>My wallet</p>
            <h2 className="mt-10">RM 0.00</h2>
          </div>
          <Checkbox className="txt-color my-check mt-20">
            Use Wallet Balance
          </Checkbox>

          <div className="mt-40">
            <div className="mb-20">
              <div className="flex justify ">
                <p className="txt-color txt-md">Service</p>
                <p className="txt-md">X1</p>
                <p className="txt-md">RM 180.00</p>
              </div>
            </div>

            <div className="mb-20">
              <div className="flex justify ">
                <p className="txt-color txt-md">Service</p>
                <p className="txt-md">X1</p>
                <p className="txt-md">RM 180.00</p>
              </div>
            </div>
            <Divider className="mb-20" />
            <div className="flex justify">
              <p className="txt-bold-green">Total </p>
              <h3 className="txt-bold-green">RM 180.00</h3>
            </div>

            <div className="discount-btn mt-40">Discount Code</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPackage;
