import "./navbar.scss";
import Logo from "../../../../assets/logo.png";
import Avatar from "../../../../assets/avatar.png";
import DownArrow from "../../../../assets/arrowdown.png";
import HamburgerIcon from "../../../../assets/icons/hamburgur.svg";

const Navbar = ({ handleHamburgerClick }) => {
  const handleHamburger = () => {
    handleHamburgerClick();
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo">
          <img
            src={HamburgerIcon}
            className="humburgerIcon"
            onClick={handleHamburger}
          />
          <img src={Logo} alt="Logo" />
        </div>

        <div className="user">
          <img src={Avatar} alt="User Avatar" />
          <p>Leslie Alexander</p>
          <img src={DownArrow} alt="Down Arrow" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
