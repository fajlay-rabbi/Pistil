import "./sessioncard.scss";
import Doctor from "../../../assets/doctor.png";
import { Badge, Divider } from "antd";
import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";

const SessionCard = () => {
  return (
    <div className="session-card">
      <div className="card-img">
        <div className="doc-id">ID #g6v0xw</div>
        <img src={Doctor} alt="Doctor" />
      </div>
      <div className="card-content">
        <div className="card-title mt-20">
          <p className="txt-green">Szekeres Dalma</p>
          <div className="spec">
            <Badge color={"#E8900D"} />
            Gyneacologist
          </div>
        </div>

        <div className="flex-row-center mt-10">
          <div className="card-date">
            <CalendarOutlined />
            <p>Tue, 24 oct 2023</p>
          </div>
          <div className="card-date">
            <ClockCircleOutlined />
            <p>08:00 - 08:30 AM</p>
          </div>
        </div>

        <Divider />
        <div className="card-bottom">
          <div>
            <p>Service</p>
            <p className="mt-5 mb-10">Family Planning</p>
          </div>
          <div>
            <p>Medium</p>
            <p className="mt-5 mb-10">Audio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
