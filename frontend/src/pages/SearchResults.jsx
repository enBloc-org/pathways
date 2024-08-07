import { useParams } from "react-router-dom"

export default function SearchResults() {
    const {value} = useParams()
    return (
    <>
    
    <h1>Search Results</h1>
    <p>{value}</p>

    </>
    )
}