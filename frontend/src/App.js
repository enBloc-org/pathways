import './App.css';
import Dropdown from './components/Dropdown';
import fetchAllRoutes from './utils/fetchAllRoutes';
import OccupationCard from './components/ccupationcard';
import { useEffect, useState } from 'react';
import Header from './components/Header';

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

  const renderOccupationCards = () => {
    if (
      routeDetails &&
      routeDetails.clusterGroups &&
      routeDetails.clusterGroups[0] &&
      routeDetails.clusterGroups[0].clusters &&
      routeDetails.clusterGroups[0].clusters[0].occupations
    ) {
      return routeDetails.clusterGroups[0].clusters[0].occupations.map((occupation) => (
        <OccupationCard
          key={occupation.id}
          name={occupation.name}
          level={occupation.level}
          overview={occupation.overview}
          technicalLevelName={occupation.technicalLevelName}
        />
      ));
    } else {
      return <div>No deetails yet.</div>;
    }
  };

  return (
    <div className="App">
      <Header />
      <h1>Route Details</h1>
      <Dropdown
        routes={allRoutes}
        selectedRoute={selectedRoute}
        setSelectedRoute={setSelectedRoute}
        showId={false}
      />
      {routeDetails ? (
        <>
          <clustercard
            name={routeDetails.name}
            description={`ID: ${routeDetails.routeId}`}
            technicalLevelName={`Technical Level: ${routeDetails.technicalLevelName || 'N/A'}`}
          />
          {renderOccupationCards()}
        </>
      ) : (
        <div>Select a route to see details.</div>
      )}
    </div>
  );
}

export default App;



