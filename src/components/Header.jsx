import logo from "../assets/logo.png";
import "../style/header.css";
const Header = () => {
  return (
    <header>
      <img className="do-it" width={150} src={logo} alt="Do it" />
    </header>
  );
};

export default Header;
