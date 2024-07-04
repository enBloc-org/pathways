import { useState, useEffect } from "react"
import Dropdown from "./components/DropDown"
import "./App.css"

function App() {
    const [allRoutes, setAllRoutes] = useState([])
    const [selectedRoute, setSelectedRoute] =
        useState("")
    const [routeDetails, setRouteDetails] =
        useState(null)

    useEffect(() => {
        const fetch = async () => {
            try {
                const fetchedRoutes =
                    await fetchAllRoutes()
                setAllRoutes(fetchedRoutes)
            } catch (error) {
                console.error(
                    "Failed to fetch routes:",
                    error
                )
            }
        }
        fetch()
    }, [])

    useEffect(() => {
        if (selectedRoute) {
            const route = allRoutes.find(
                route =>
                    route.routeId ===
                    parseInt(selectedRoute, 10)
            )
            setRouteDetails(route)
        }
    }, [selectedRoute, allRoutes])

    return (
        <div className="App">
            <h1>Route Details</h1>
            <Dropdown
                routes={allRoutes}
                selectedRoute={selectedRoute}
                setSelectedRoute={setSelectedRoute}
                showId={false}
            />
            {routeDetails && (
                <div>
                    <h2>{routeDetails.name}</h2>
                    <p>ID: {routeDetails.routeId}</p>
                    <p>
                        Sequence:{" "}
                        {routeDetails.sequence}
                    </p>
                    <p>
                        Object: {routeDetails.object}
                    </p>
                </div>
            )}
        </div>
    )
}

export default App
