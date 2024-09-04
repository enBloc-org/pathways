import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

import { useSearchContext } from "../context/searchContext"
import TextSearch from "./TextSearch"
import gatsbyLogo from "../images/GATSBY.jpeg"
import "../style/Header.css"

export default function Header() {
  const { dispatch } = useSearchContext()
  const [currentPage, setCurrentPage] = useState()

  useEffect(() => {
    const page = window.location.href
    const pageRegex = /(about)|(search)/g
    const match = page.match(pageRegex)

    setCurrentPage(match ? match[0] : "/")
  }, [window.location.href])

  const searchHandler = input => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: input })
  }

  return (
    <header className="header grid-container">
      <div className="logo-container">
        <Link to="/">
          <img src={gatsbyLogo} alt="Gatsby Logo" className="logo" />
        </Link>
      </div>
      <nav className="nav-links">
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
      </nav>
      <TextSearch searchHandler={searchHandler} />
    </header>
  )
}
