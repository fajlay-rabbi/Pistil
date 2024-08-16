import NavbarWM from "../../components/client/UI/nav/NavbarWM";
import Logo from "../../assets/logo.png";
import "./signin.scss";
import { Input, Checkbox, Button, InputNumber, Flex, Select } from "antd";

import {
  MailOutlined,
  KeyOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  ArrowRightOutlined,
  FacebookFilled,
  GoogleOutlined,
} from "@ant-design/icons";
import Bn from "../../assets/bangladesh.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const loginHandler = () => {};
  const selectBefore = (
    <Select
      defaultValue="Con"
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
    <>
      <NavbarWM />
      <div className="login-wrapper mb-40">
        <div className="login-sub-wrapper">
          <div className="login-content">
            <div className="logo mb-40">
              <img src={Logo} alt="Logo" />
            </div>

            <div className="mb-30">
              <h1 className="mb-20 txt-bold-green">Get Started</h1>
              <p className="login-sub p-5 txt-color">
                Sign up with Pistil to book a session with our doctors.After
                hours and weekend time slots available.
              </p>
            </div>

            <div className="login-form">
              <div className="login-inputs">
                <form>
                  <div className="signup-container">
                    <Flex gap={12} align="center" className="mb-15">
                      <Input
                        className="input"
                        size="large"
                        prefix={<UserOutlined className="icon" />}
                        placeholder="First Name"
                        type="text"
                      />
                      <Input
                        className="input"
                        size="large"
                        prefix={<UserOutlined className="icon" />}
                        placeholder="Last Name"
                        type="text"
                      />
                    </Flex>
                    <Input
                      className="input mb-15"
                      size="large"
                      prefix={<MailOutlined className="icon" />}
                      placeholder="Email"
                      type="email"
                    />
                    <InputNumber
                      addonBefore={selectBefore}
                      size="large"
                      className="input mb-15"
                      controls={false}
                      type="number"
                    />
                    <Input.Password
                      size="large"
                      className="input mb-15"
                      prefix={<KeyOutlined className="icon" />}
                      placeholder="Set password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                    <div className="remember-me mb-40">
                      <Checkbox className="mb-10">
                        I agree to the{" "}
                        <span className="bold-underline">Terms of Use</span> and{" "}
                        <span> </span>
                        <span className="bold-underline">Privacy Policy</span>
                      </Checkbox>
                      <Checkbox>
                        I would like to receive contents and offers by PISTIL
                      </Checkbox>
                    </div>
                  </div>

                  <div className="form-btn-group">
                    <Button
                      className="form-btn mb-15"
                      type="primary"
                      icon={<ArrowRightOutlined />}
                      iconPosition="end"
                    >
                      Sign in
                    </Button>

                    <p>Or</p>

                    <Button
                      className="form-btn facebook-btn mt-15 mb-15"
                      type="primary"
                      icon={<FacebookFilled />}
                      iconPosition="start"
                    >
                      Login with Facebook
                    </Button>

                    <Button
                      className="form-btn google-btn mb-40"
                      icon={<GoogleOutlined />}
                      iconPosition="start"
                    >
                      Sign up with Google
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            <div className="new-acc-text">
              <p>
                If you are an existing user,sign in{" "}
                <Link to={"/login"}>
                  <span>here.</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
