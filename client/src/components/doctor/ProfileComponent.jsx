import { Badge, Col, Input, Row } from "antd";
import "./profileComponent.scss";
import Doctor from "../../assets/av.png";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";

const ProfileComponent = () => {
  const [lang, setLang] = useState(["English", "Spanish", "Bangla"]);
  const langHandler = (data) => {
    setLang((prev) => {
      return prev.filter((item) => item !== data);
    });
  };

  

  return (
    <div>
      <div className="avatar-wrapper mt-40">
        <div className="avatar">
          <img src={Doctor} alt="Doctor" />
        </div>
        <div className="profile-name">
          <h3 className="txt-green">Randall Bernard</h3>
          <div className="spec-badge mt-5">
            <Badge color={"#E8900D"} />
            <p>Gynaecologist</p>
          </div>
        </div>
      </div>

      <div className="mt-30">
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
              />
            </div>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div className="email-label-group txt-green">
              <label>
                Middle Name<sup>*</sup>
              </label>
              <Input
                className="input"
                size="large"
                prefix={<UserOutlined className="icon" />}
                type="text"
                name="middlename"
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
                type="text"
                name="lastname"
              />
            </div>
          </Col>
        </Row>
        <Row gutter={[24, 24]} className="mt-20">
          <Col xs={24} md={12} lg={12}>
            <div className="email-label-group txt-green">
              <label>Languages Spoken</label>
              <Input
                className="input"
                size="large"
                prefix={<UserOutlined className="icon" />}
                type="text"
                name="middlename"
              />
              <div className="lang-card-wrapper">
                {lang.map((data) => {
                  return (
                    <div key={data} className="lang-card">
                      <p>{data}</p>
                      <CloseOutlined
                        className="lang-icon"
                        onClick={() => {
                          langHandler(data);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={12}></Col>
        </Row>
      </div>
    </div>
  );
};

export default ProfileComponent;
