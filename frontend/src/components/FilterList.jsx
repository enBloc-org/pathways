import React, {useState, useEffect} from "react"
import Dropdown from "./Dropdown"
import ''


export default function FilterList({allRoutes}){
// try {
//       const routesArray = await fetchAllRoutes() 
//       const parsedRoutes = await JSON.parse(routesArray) 
//      } catch (error){
//       console.error(error) 
//     }



    return (
        <div> 
            {allRoutes.map(route => (
                <div key={route.routeId}>
                    <input type="checkbox" name={route.name} value={route.name} />
                    <label htmlFor={route.Id}> {route.name} </label>
                </div>
            ))}
        </div>
    );

}
    a