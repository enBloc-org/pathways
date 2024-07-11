import gatsbylogo from '../image/gatsbylogo.jpeg';
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={gatsbylogo} alt="Gatsby Logo" className="logo" />
      </div>
      <input type="text" placeholder="Search a pathway" className="search-bar" />
    </header>
  );
};