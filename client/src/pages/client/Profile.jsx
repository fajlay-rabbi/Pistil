import { useState } from "react";
import "./profile.scss";
import Doctor from "../../assets/av.png";
import { Button, Col, Flex, Input, InputNumber, Row, Select } from "antd";
import {
  ArrowRightOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  KeyOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Bn from "../../assets/bangladesh.png";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

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

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    }
    if (name === "lastName") {
      setLastName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "new-password") {
      setNewPassword(value);
    }
    if (name === "confirm-password") {
      setConPassword(value);
    }
  };

  return (
    <div className="profile-wrapper">
      <h1 className="txt-green">Edit Profile</h1>
      <p className="txt-color mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>

      <div className="avatar-wrapper mt-40">
        <div className="avatar">
          <img src={Doctor} alt="Doctor" />
        </div>
        <div className="profile-name">
          <h3>Randall Bernard</h3>
          <Button className="mt-10 upload-btn">Upload</Button>
        </div>
      </div>

      <form className="mt-30">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12} lg={8}>
            <div className="email-label-group txt-green">
              <label>
                First Name<sup>*</sup>
              </label>
              <Input
                className="input"
                size="large"
                prefix={<UserOutlined className="icon" />}
                type="text"
                name="firstName"
                onChange={changeHandler}
              />
            </div>
          </Col>

          <Col xs={24} md={12} lg={8}>
            <div className="email-label-group txt-green">
              <label>
                Last Name<sup>*</sup>
              </label>
              <Input
                className="input"
                size="large"
                prefix={<UserOutlined className="icon" />}
                value="Bernard"
                type="text"
                name="lastName"
                onChange={changeHandler}
              />
            </div>
          </Col>

          <Col xs={24} md={12} lg={8}>
            <div className="email-label-group txt-green">
              <label>
                Mobile<sup>*</sup>
              </label>
              <InputNumber
                addonBefore={selectBefore}
                size="large"
                className="input phone-input"
                controls={false}
                type="number"
                name="mobileNumber"
                onChange={(e) => {
                  setMobile(e);
                }}
              />
            </div>
          </Col>

          <Col xs={24} md={12} lg={8}>
            <div className="email-label-group txt-green">
              <label>
                Email<sup>*</sup>
              </label>
              <Input
                className="input"
                size="large"
                value={"user@pistil.io"}
                prefix={<MailOutlined className="icon" />}
                placeholder="Email"
                type="email"
                name="email"
                onChange={changeHandler}
              />
            </div>
          </Col>

          <Col xs={24} md={12} lg={8}>
            <div className="email-label-group txt-green">
              <label>
                Gender<sup>*</sup>
              </label>
              <Select
                className="input f-width gender-input"
                defaultValue="Male"
                prefixCls="gender-icon"
                style={{
                  width: 120,
                }}
                size="large"
                options={[
                  {
                    value: "male",
                    label: "Male",
                  },
                  {
                    value: "female",
                    label: "Female",
                  },
                ]}
                onChange={(e) => {
                  setGender(e);
                }}
              />
            </div>
          </Col>
        </Row>
        <br />
      </form>

      <h3 className="txt-green mt-30">Change Password</h3>
      <div className="mt-20">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12} lg={8}>
            <div className="email-label-group txt-green">
              <label>
                Password<sup>*</sup>
              </label>
              <Input.Password
                size="large"
                className="input mb-10"
                value={"password"}
                prefix={<KeyOutlined className="icon" />}
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                name="password"
              />
            </div>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div className="email-label-group txt-green">
              <label>
                New Password<sup>*</sup>
              </label>
              <Input.Password
                size="large"
                className="input mb-10"
                prefix={<KeyOutlined className="icon" />}
                placeholder="Create new password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                onChange={changeHandler}
                name="new-password"
              />
            </div>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div className="email-label-group txt-green">
              <label>
                Confirm New Password<sup>*</sup>
              </label>
              <Input.Password
                size="large"
                className="input mb-10"
                prefix={<KeyOutlined className="icon" />}
                placeholder="Confirm new password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                onChange={changeHandler}
                name="confirm-password"
              />
            </div>
          </Col>
        </Row>
      </div>

      <Button
        className="update-btn mt-40"
        type="primary"
        icon={<ArrowRightOutlined />}
        iconPosition="end"
      >
        Update
      </Button>
    </div>
  );
};

export default Profile;
