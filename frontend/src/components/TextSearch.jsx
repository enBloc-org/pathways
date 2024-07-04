import { useState } from "react"

export default function TextSearch(searchHandler) {
    return (
        <>
            <form>
                <input
                    value=""
                    onChange={searchHandler}
                    placeholder="Enter your search parameter"
                ></input>
                <button type="button">search</button>
            </form>
        </>
    )
}
