export default function Dropdown({
    routes,
    selectedRoute,
    setSelectedRoute,
}) {
    function handleChange(event) {
        setSelectedRoute(event.target.value)
    }
    if (!routes || routes.length === 0) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <select
                id="dropdown"
                value={selectedRoute}
                onChange={handleChange}
            >
                <option value="" disabled={true}>
                    Please choose an option
                </option>
                {routes.map(route => (
                    <option
                        key={route.routeId}
                        value={route.routeId}
                    >
                        {route.name}
                    </option>
                ))}
            </select>
        </div>
    )
}
