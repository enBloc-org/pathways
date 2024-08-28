import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import TextSearch from "./TextSearch";
import gatsbyLogo from "../images/GATSBY.jpeg";
import "../style/Header.css";

export default function Header({ searchHandler }) {
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    const page = window.location.href;
    const pageRegex = /(about)|(search)/g;
    const match = page.match(pageRegex);

    setCurrentPage(match ? match[0] : "/");
  }, [window.location.href]);

  return (
    <nav className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={gatsbyLogo} alt="Gatsby Logo" className="logo" />
        </Link>
      </div>
      <div className="search-and-info">
        <TextSearch searchHandler={searchHandler} />
        <p className="information">ℹ</p>
      </div>
      <div className="button-container">
        <Link className="header-button" to="/about">
          About
        </Link>
        <Link className="header-button" to="/search">
          Search
        </Link>
      </div>
    </nav>
  );
}
