import { useState } from "react"
import "../style/TextSearch.css"

export default function TextSearch(searchHandler) {
    const [searchParameter, setSearchParameter] =
        useState(undefined)

    const inputHandler = event => {
        setSearchParameter(event.target.value)
    }

    const submitHandler = () => {
        searchHandler(searchParameter)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    value={searchParameter}
                    onChange={inputHandler}
                    placeholder="Enter your search parameter"
                />
                <button type="button">search</button>
            </form>
        </div>
    )
}
