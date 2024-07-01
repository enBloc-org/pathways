import fetchAllRoutes from './utils/fetchAllRoutes';
import "./App.css";
import Dropdown from "./components/Dropdown";
import { useEffect, useState } from 'react';

function App() {
  const [allRoutes, setAllRoutes] = useState([]);
 
  useEffect(() => {
    const fetchRoutes = async () => {
      const routes = await fetchAllRoutes();
      setAllRoutes(routes);
    };
    fetchRoutes();
  }, []);

  return (
    <Dropdown routes={allRoutes} />
  )
}

export default App;