import {
  MailOutlined,
  KeyOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  ArrowRightOutlined,
  FacebookFilled,
  GoogleOutlined,
} from "@ant-design/icons";
import NavbarWM from "../../components/client/UI/nav/NavbarWM";
import Logo from "../../assets/logo.png";
import {
  Input,
  Checkbox,
  Button,
  Segmented,
  InputNumber,
  Select,
  Flex,
} from "antd";
import "./signin.scss";
import Bn from "../../assets/bangladesh.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPhone, setShowPhone] = useState(false);

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

  const changeHandler = (event) => {
    if (event === "Phone") {
      setShowPhone(true);
    } else {
      setShowPhone(false);
    }
  };

  const loginHandler = () => {};

  return (
    <>
      <NavbarWM />
      <div className="login-wrapper">
        <div className="login-sub-wrapper">
          <div className="login-content">
            <div className="logo mb-40">
              <img src={Logo} alt="Logo" />
            </div>

            <div>
              <h2 className="mb-20">Sign In Pistil</h2>
              <p className="login-sub mb-30">
                Book, manage, and attend sessions with yout doctor, all in one
                place.
              </p>
            </div>

            <div className="login-form">
              <div className="login-options mb-15">
                <Segmented
                  size="large"
                  block
                  options={["Email", "Phone"]}
                  onChange={(value) => {
                    changeHandler(value);
                  }}
                />
              </div>
              <div className="login-inputs">
                <form>
                  <>
                    {showPhone ? (
                      <InputNumber
                        addonBefore={selectBefore}
                        size="large"
                        className="input mb-15"
                        controls={false}
                        type="number"
                      />
                    ) : (
                      <Input
                        className="input mb-15"
                        placeholder="Email"
                        type="email"
                        size="large"
                        prefix={<MailOutlined className="icon" />}
                      />
                    )}
                    <Input.Password
                      size="large"
                      className="input mb-10"
                      prefix={<KeyOutlined className="icon" />}
                      placeholder="Password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                    <div className="form-below mb-40">
                      <div className="remember-me">
                        <Checkbox>Remember me</Checkbox>
                      </div>
                      <div className="forget-pass">
                        <p>Forgot Password ?</p>
                      </div>
                    </div>{" "}
                  </>

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
                If you are a new user, create an account{" "}
                <Link to={"/register"}>
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

export default SignIn;
