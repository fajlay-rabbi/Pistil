import "./DashboardComp.scss";
import { Tabs } from "antd";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Upcoming",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Passed",
    children: "Content of Tab Pane 2",
  },
];

const DashboardComp = () => {
  return (
    <div className="dashboard-wrapper">
      <div>
        <h1>Sessions</h1>
        <div>
          <p>You have 3 upcoming Sessions</p>
          <div className="dashboard-tab">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComp;
