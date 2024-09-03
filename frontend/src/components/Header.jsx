import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

import TextSearch from "./TextSearch"
import gatsbyLogo from "../images/GATSBY.jpeg"
import "../style/Header.css"

export default function Header({ searchHandler }) {
  const [currentPage, setCurrentPage] = useState()

  useEffect(() => {
    const page = window.location.href
    const pageRegex = /(about)|(search)/g
    const match = page.match(pageRegex)

    setCurrentPage(match ? match[0] : "/")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href])

  return (
    <nav className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={gatsbyLogo} alt="Gatsby Logo" className="logo" />
        </Link>
      </div>
      <div className="header-content">
        <div>
          <TextSearch searchHandler={searchHandler} />
          <p className="information">ℹ</p>
        </div>
        <div className="nav-links">
          <Link
            className={`header-button ${currentPage === "about" && "bold"}`}
            to="/about"
          >
            About
          </Link>
          <Link
            className={`header-button ${currentPage === "search" && "bold"}`}
            to="/search"
          >
            Search
          </Link>
        </div>
      </div>
    </nav>
  )
}
