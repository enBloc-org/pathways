import React, { useState } from "react"

export default function Dropdown({ routes }) {
 
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
