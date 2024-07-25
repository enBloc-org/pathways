import React from "react";
import TextSearch from "./TextSearch";
import gatsbyLogo from "../images/GATSBY.jpeg";
import "../style/Header.css";
import FilterList from "./FilterList";

export default function Header({ searchHandler, allRoutes }) {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={gatsbyLogo} alt="Gatsby Logo" className="logo" />
      </div>
      <TextSearch searchHandler={searchHandler} />
      <div className="button-container">
        <a href="/info-page" className="header-button">
          About
        </a>
        <a className="header-button" type="button">
          Search
        </a>
      </div>
    </header>
  );
}
