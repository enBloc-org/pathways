import { Link } from "react-router-dom"

import TextSearch from "./TextSearch"
import gatsbyLogo from "../images/GATSBY.jpeg"
import "../style/Header.css"

export default function Header({ searchHandler }) {
  return (
    <nav className="header">
      <div className="logo-container">
        <img src={gatsbyLogo} alt="Gatsby Logo" className="logo" />
      </div>
      <div>
        <TextSearch searchHandler={searchHandler} />
        <p className="information" >ℹ</p>
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
  )
}
