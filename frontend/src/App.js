import "./App.css";
import Dropdown from "./components/Dropdown";
import fetchAllRoutes from "./utils/fetchAllRoutes";
import fetchRouteById from "./utils/fetchRouteById";
import { useEffect, useState } from "react";
import OccupationCard from "./components/OccupationCard";

function App() {
  const [allRoutes, setAllRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState('');
  const [routeDetails, setRouteDetails] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const fetchedRoutes = await fetchAllRoutes();
    
        setAllRoutes(fetchedRoutes);
      } catch (error) {
        console.error("Failed to fetch routes:", error);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    if (selectedRoute) {
      console.log(selectedRoute)
      const getDetails = async () => {
        try {
          const data = await fetchRouteById(selectedRoute);
      
          setRouteDetails(data);
        } catch (error) {
          console.error("failed to fetch route details:", error);
        }
      }

    getDetails()
    }
  }, [selectedRoute])

  return (
    <div className="App">
      <h1>Route Details</h1>
      <Dropdown 
        routes={allRoutes}
        selectedRoute={selectedRoute}
        setSelectedRoute={setSelectedRoute}
        showId={false}
      />

      {routeDetails && (routeDetails?.clusterGroups?.[0]?.clusters?.[0]?.occupations.map((occupation, index) => (

        <OccupationCard 
          key={index} 
          name={occupation.name}
          level={occupation.level}
          overview={occupation.overview}
          technicalLevelName={occupation.mapHierarchy?.technicalLevelName}
        />
      )))}
    </div>
  );
}

export default App;
