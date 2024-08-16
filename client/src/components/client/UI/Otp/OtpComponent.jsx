import "./otpcomponent.scss";
import Logo from "../../../../assets/logo.png";
import { Button, Input } from "antd";
import { ArrowRightOutlined, MailOutlined } from "@ant-design/icons";
import { useState } from "react";

const OtpComponent = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(true);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onChange = (text) => {
    setOtp(text);
  };
  const sharedProps = {
    onChange,
  };
  return (
    <div className="otp-container">
      <div className="otp-wrapper">
        <div className="logo mb-40">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="otp-txt">
          {!show && <h1 className="mb-20">Send OTP</h1>}
          {show && <h1 className="mb-20">Verify OTP</h1>}
          {!show && <p className="txt-color">Enter your email address</p>}
          {show && <p className="txt-color">Enter your OTP</p>}
        </div>
        {!show && (
          <>
            {" "}
            <Input
              className="input mb-15 mt-30"
              placeholder="Email"
              type="email"
              size="large"
              prefix={<MailOutlined className="icon" />}
              onChange={emailHandler}
            />
            <Button
              className="form-btn mb-20 f-width mb-30"
              type="primary"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              onClick={clickHandler}
              disabled={!email}
            >
              Sign in
            </Button>{" "}
          </>
        )}
        {show && (
          <>
            <div className="mt-30">
              <Input.OTP
                className="otps"
                length={4}
                size="large"
                {...sharedProps}
              />
            </div>
            <Button
              className="form-btn f-width mt-40"
              type="primary"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Verify
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default OtpComponent;
