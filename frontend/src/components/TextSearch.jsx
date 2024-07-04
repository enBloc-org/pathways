import { useState } from "react"

export default function TextSearch(searchHandler) {
    const [searchParameter, setSearchParameter] =
        useState(undefined)

    const inputHandler = event => {
        setSearchParameter(event.target.value)
    }

    return (
        <>
            <form>
                <input
                    value={searchParameter}
                    onChange={inputHandler}
                    placeholder="Enter your search parameter"
                ></input>
                <button type="button">search</button>
            </form>
            {searchParameter && (
                <p>You searched: {searchParameter}</p>
            )}
        </>
    )
}
