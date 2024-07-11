import './App.css';
import Dropdown from './components/Dropdown';
import fetchAllRoutes from './utils/fetchAllRoutes';
import { useEffect, useState } from 'react';
import ClusterCard from './components/ClusterCard';

function App() {
  const [allRoutes, setAllRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState('');
  const [routeDetails, setRouteDetails] = useState(null);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const fetchedRoutes = await fetchAllRoutes();
        setAllRoutes(fetchedRoutes);
      } catch (error) {
        console.error('Failed to fetch routes:', error);
      }
    };

    fetchRoutes();
  }, []);

  useEffect(() => {
    const fetchRouteDetails = async () => {
      if (selectedRoute) {
        try {
          const route = allRoutes.find((route) => route.routeId === parseInt(selectedRoute, 10));
          setRouteDetails(route);
        } catch (error) {
          console.error('Failed to fetch route details:', error);
        }
      }
    };

    fetchRouteDetails();
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
          <div className="clusters">
            {routeDetails.clusters && routeDetails.clusters.length > 0 ? (
              routeDetails.clusters.map((cluster) => (
                <ClusterCard
                  key={cluster.id}
                  name={cluster.name}
                  description={cluster.description}
                  technicalLevelName={cluster.technicalLevelName || 'N/A'}
                />
              ))
            ) : (
              <p></p>
            )}
          </div>
        </div>
      ) : (
        <div>Select a route to see details.</div>
      )}
    </div>
  );
}

export default App;
