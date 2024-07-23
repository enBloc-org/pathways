import TextSearch from "./TextSearch";
import gatsbyLogo from "../images/GATSBY.jpeg";
import "../style/Header.css";

export default function Header({ searchHandler }) {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={gatsbyLogo} alt="Gatsby Logo" className="logo" />
      </div>
      <TextSearch searchHandler={searchHandler} />
      <div className="button-container">
        <a href="http://localhost:6006/?path=/infopage--default-info-page" className="header-button">
          About
        </a>
        <a className="header-button" type="button">
          Search
        </a>
      </div>
    </header>
  );
}
