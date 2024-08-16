import { Tabs } from "antd";
import "./profile.scss";
import ProfileComponent from "../../components/doctor/ProfileComponent";

const Profile = () => {
  const items = [
    {
      key: "1",
      label: "Profile",
      children: <ProfileComponent />,
    },
    {
      key: "2",
      label: "Contact details",
      // children: <div>Passing Content</div>,
    },
    {
      key: "3",
      label: "Preferences",
      // children: <div>Passing Content</div>,
    },
  ];
  return (
    <div className="doctor-profile-wrapper">
      <div>
        <Tabs defaultActiveKey="1" className="doc-tab" centered items={items} />
      </div>
    </div>
  );
};

export default Profile;
