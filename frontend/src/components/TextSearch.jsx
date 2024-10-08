import { useState, useEffect } from "react"
import { useSearchContext } from "../context/searchContext"
import "../style/TextSearch.css"

export default function TextSearch({ searchHandler }) {
  const [searchParameter, setSearchParameter] = useState()
  const {
    searchState: { searchQuery },
  } = useSearchContext()

  const inputHandler = event => {
    setSearchParameter(event.target.value)
  }

  const submitHandler = event => {
    event.preventDefault()
    searchHandler(searchParameter)
  }

  useEffect(() => {
    if (searchQuery === searchParameter) return
    setSearchParameter(searchQuery)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])

  return (
    <>
      <form
        onSubmit={event => submitHandler(event)}
        className="search-container"
      >
        <input
          name="search-query"
          value={searchParameter}
          onChange={inputHandler}
          placeholder="Search job title"
        />
        <button className="text-search__button" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="search-icon"
            viewBox="0 0 256 256"
          >
            <path
              fill="#9b4c10"
              d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"
            />
          </svg>
        </button>
        <p className="information">ℹ</p>
      </form>
    </>
  )
}
