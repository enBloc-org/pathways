import { useState } from "react"
import "../style/TextSearch.css"

export default function TextSearch({searchHandler}) {
  const [searchParameter, setSearchParameter] =
    useState(undefined)

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
          value={searchParameter}
          onChange={inputHandler}
          placeholder="Search job title"
        />
        <button>⏎</button>
      </form>
    </div>
  )
}
