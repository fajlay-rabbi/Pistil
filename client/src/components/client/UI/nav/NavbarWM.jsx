import "./navbarwm.scss";
import logo from "../../../../assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "antd";

const NavbarWM = () => {
  return (
    <nav className="container">
      <div className="navbar-content">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="nav-menu-wrapper">
          <div className="nav-menu">
            <ul className="nav-menu-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Our Doctors</Link>
              </li>
              <li>
                <Link to="/">Appointment</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
            </ul>
          </div>
        </div>

        <Link to="/login">
          <Button type="primary">Sign in</Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarWM;
