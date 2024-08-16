import "./sessionCard.scss";
import { Badge, Button, Divider, Tabs } from "antd";
import { ArrowRightOutlined, CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import Doctor1 from "../../assets/doctorp.png";

const SessionCard = () => {
  const items = [
    {
      key: "1",
      label: "Message",
      // children: <div>Upcoming Content</div>,
    },
    {
      key: "2",
      label: "Medical Plan",
      // children: <div>Passing Content</div>,
    },
    {
      key: "3",
      label: "Intake Form",
      // children: <div>Passing Content</div>,
    },
  ];
  return (
    <div className="session-card">
      <div className="card-img">
        <div className="doc-id">ID #g6v0xw</div>
        <img src={Doctor1} alt="Doctor" />
      </div>
      <div className="card-content">
        <div className="card-title mt-20">
          <p className="txt-green">Neval Diaz</p>
          <div className="doc-spec">
            <Badge color={"#13b4b3"} />
            Individual | Video
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
        <Tabs defaultActiveKey="1" className="card-tab" items={items} />

        <Button
          className="card-btn f-width txt-bold"
          type="primary"
          icon={<ArrowRightOutlined />}
          iconPosition="end"
        >
          Completed
        </Button>
      </div>
    </div>
  );
};

export default SessionCard;
