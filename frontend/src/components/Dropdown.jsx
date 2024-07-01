import React, { useState } from "react";

export default function Dropdown({ routes }) {
  const [selectedRoute, setSelectedRoute] = useState("");
  function handleChange(event) {
    setSelectedRoute(event.target.value);
  }
  if (!routes || routes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <select id="dropdown" value={selectedRoute} onChange={handleChange}>
        <option value="">Please choose an option</option>
        {routes.map((route) => (
          <option key={route.routeId} value={route}>
            {route.name}
          </option>
        ))}
      </select>
    </div>
  );
}