import { useState } from "react"

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
        <>
            <form onSubmit={submitHandler}>
                <input
                    value={searchParameter}
                    onChange={inputHandler}
                    placeholder="Enter your search parameter"
                />
                <button type="button">search</button>
            </form>
            {searchParameter && (
                <p>You searched: {searchParameter}</p>
            )}
        </>
    )
}
