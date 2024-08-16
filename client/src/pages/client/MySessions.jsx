import { Col, Row } from "antd";
import SessionCard from "../../components/client/SessionCard/SessionCard";
import DoctorSessionCard from '../../components/doctor/SessionCard';
import Tab from "../../components/client/Tabs/Tab";
import "./mysession.scss";
import { useOutletContext } from "react-router-dom";

const MySessions = () => {
  const ctx = useOutletContext();
  return (
    <div className="session-section">
      <div className="session-title mt-10">
        <div className="ses-col-1">
          <h1 className="txt-green">Sessions</h1>
          <p className="txt-color mt-5">You have 3 upcoming Sessions</p>
        </div>
        <div className="ses-col-2">
          <Tab />
        </div>
      </div>
      {ctx.userType === "client" && (
        <Row gutter={[24, 24]} className="mt-40">
          <Col xs={24} md={12} lg={8}>
            <SessionCard />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <SessionCard />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <SessionCard />
          </Col>
          <Col xs={24} md={12} lg={8}>
            <SessionCard />
          </Col>
        </Row>
      )}

      <Row gutter={[24, 24]} className="mt-40">
        <Col xs={24} md={12} lg={8}>
          <DoctorSessionCard />
        </Col>
        <Col xs={24} md={12} lg={8}>
          <DoctorSessionCard />
        </Col>
        <Col xs={24} md={12} lg={8}>
          <DoctorSessionCard />
        </Col>
      </Row>
    </div>
  );
};

export default MySessions;
