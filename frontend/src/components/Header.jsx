import gatsbyLogo from "../images/GATSBY.jpeg";
import "../style/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={gatsbyLogo} alt="Gatsby Logo" className="logo" />
      </div>
      <input type="text" placeholder="Search a pathway" className="search-bar" />
      <div className="button-container">
        <button className="header-button">About</button>
        <button className="header-button">Help</button>
      </div>
    </header>
  );
}
