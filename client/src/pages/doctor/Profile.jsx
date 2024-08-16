import { Tabs } from "antd";
import "./profile.scss";
import ProfileComponent from "../../components/doctor/ProfileComponent";
import ContactComponent from "../../components/doctor/ContactComponent";
import PreferencesComponent from "../../components/doctor/PreferencesComponent";

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
      children: <ContactComponent />,
    },
    {
      key: "3",
      label: "Preferences",
      children: <PreferencesComponent />,
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
