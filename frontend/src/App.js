import './App.css';
import Dropdown from './components/Dropdown';
import fetchAllRoutes from './utils/fetchAllRoutes';
import ClusterCard from './components/ClusterCard';
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
      console.log(routeDetails)
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
      {routeDetails && (
        <ClusterCard
          name={routeDetails.name}
          description={`ID: ${routeDetails.routeId}`}
          technicalLevelName={`Technical Level: ${routeDetails.technicalLevelName}`}
        />
      )}
    </div>
  );
}

export default App;
  