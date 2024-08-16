import { ArrowRightOutlined, MailOutlined } from "@ant-design/icons";
import "./contact.scss";
import { Button, Col, Flex, Input, InputNumber, Row, Select } from "antd";
import Bn from "../../assets/bangladesh.png";

const Contact = () => {
  const selectBefore = (
    <Select
      defaultValue="eu"
      style={{ width: 95 }}
      options={[
        {
          value: "eu",
          label: (
            <Flex align="center" gap={5}>
              <img src={Bn} alt="Bangladesh" /> +990
            </Flex>
          ),
        },
        {
          value: "bn",
          label: (
            <Flex align="center" gap={5}>
              <img src={Bn} alt="Bangladesh" /> +880
            </Flex>
          ),
        },
      ]}
    ></Select>
  );
  return (
    <div>
      <h2 className="txt-green mt-10">Contact Details</h2>
      <div className="wallet-warining mt-10">
        <p>
          <span>Note:* </span>
          You will receive a verification email to confirm the change in email
          address.
        </p>
      </div>

      <Row gutter={[24, 24]} className="mt-30">
        <Col xs={24} md={12} lg={12}>
          <label className="my-txt">Email Address</label>
          <Input
            className="input mt-5 f-width"
            size="large"
            prefix={<MailOutlined className="icon" />}
            placeholder="Type"
            type="email"
            value={"firdausjuanda@icloud.com"}
          />
        </Col>
        <Col xs={24} md={12} lg={12}>
          <label className="my-txt">Mobile</label>
          <br />
          <InputNumber
            addonBefore={selectBefore}
            size="large"
            className="input phone-input mt-5 f-width"
            value={"0123456987"}
            controls={false}
            type="number"
            name="mobileNumber"
          />
        </Col>
      </Row>
      <Button
        className="update-btn mt-50 btn-left"
        type="primary"
        icon={<ArrowRightOutlined />}
        iconPosition="end"
      >
        Update
      </Button>
    </div>
  );
};

export default Contact;
