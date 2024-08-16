/* eslint-disable react/prop-types */
import { Divider } from "antd";
import "./dashboardMenuItem.scss";
import { Link } from "react-router-dom";

const DashboardMenuItem = (props) => {
  const { name, path } = props?.item;
  const Icon = props?.item?.icon;

  const isActive = props?.activeItem === props.item.name;
  let classname = isActive
    ? "dash-menu-wrapper active_dash_menu"
    : "dash-menu-wrapper";

  const clickhandler = () => {
    props.setActiveItem(props.item.name);
  };

  return (
    <>
      {props.item.isDivider ? (
        <Divider />
      ) : (
        <Link to={path} onClick={clickhandler}>
          <div className={classname}>
            <Icon className="menu-icon" />
            {!props.isCollapsed && <p>{name}</p>}
          </div>
        </Link>
      )}
    </>
  );
};

export default DashboardMenuItem;
