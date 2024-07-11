import './App.css';
import Dropdown from './components/Dropdown';
import fetchAllRoutes from './utils/fetchAllRoutes';
import { useEffect, useState } from 'react';

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
        console.error('Failed to fetch routes:', error);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    if (selectedRoute) {
      const route = allRoutes.find((route) => route.routeId === parseInt(selectedRoute, 10));
      setRouteDetails(route);
      console.log("Selected Route Details:", route);
    }
  }, [selectedRoute, allRoutes]);

  return (
    <div className="App">
      <h1>Route Details</h1>
      <Dropdown
        routes={allRoutes}
        selectedRoute={selectedRoute}
        setSelectedRoute={setSelectedRoute}
        showId={false}
      />
      {routeDetails ? (
        <div>
          <p>Name: {routeDetails.name}</p>
          <p>ID: {routeDetails.routeId}</p>
          <p>Technical Level: {routeDetails.technicalLevelName || 'N/A'}</p>
        </div>
      ) : (
        <div>Select a route to see details.</div>
      )}
    </div>
  );
}

export default App;
