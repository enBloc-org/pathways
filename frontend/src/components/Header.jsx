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
    </nav>
  )
}
