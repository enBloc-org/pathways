import React from "react";

export default function Dropdown({ routes, selectedRoute, setSelectedRoute, showId, disabled }) {
  function handleChange(event) {
    setSelectedRoute(event.target.value);
  }

  if (!routes || routes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <select id="dropdown" value={selectedRoute} onChange={handleChange} disabled={disabled}>
        <option value="">--Please choose an option--</option>
        {routes.map((route, index) => (
          <option key={index} value={route.routeId}>
            {route.name} {showId && `(${route.routeId})`}
          </option>
        ))}
      </select>
    </div>
  );
}
