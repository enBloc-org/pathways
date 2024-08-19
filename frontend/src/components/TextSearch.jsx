import { useState } from "react"
import "../style/TextSearch.css"

export default function TextSearch({ searchHandler }) {
  const [searchParameter, setSearchParameter] = useState(undefined)

  const inputHandler = event => {
    setSearchParameter(event.target.value)
  }

  const submitHandler = event => {
    event.preventDefault()
    searchHandler(searchParameter)
  }

  return (
    <div>
      <form onSubmit={event => submitHandler(event)}>
        <input
          name="search-query"
          value={searchParameter}
          onChange={inputHandler}
          placeholder="Search job title"
        />
        <button className="text-search__button">⏎</button>
      </form>
    </div>
  )
}
