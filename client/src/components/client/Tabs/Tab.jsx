import { Tabs } from "antd";
import "./tab.scss";

const Tab = () => {
  const items = [
    {
      key: "1",
      label: "Upcoming",
      // children: <div>Upcoming Content</div>,
    },
    {
      key: "2",
      label: "Passing",
      // children: <div>Passing Content</div>,
    },
  ];

  return <Tabs defaultActiveKey="1" className="dash-tab"  centered items={items} />;
};

export default Tab;
