import React from "react";

export default function FilterList({ options }) {
  return (
    <div>
      <h2>Available Filter Options</h2>
      <ul>
        {options.map((route) => (
          <li key={route.routeId}>{route.name}</li>
        ))}
      </ul>
    </div>
  );
}
