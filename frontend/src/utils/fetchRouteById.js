/**
 *
 * @async this function must be awaited
 * @param {number} id expects the id value of a Route
 * @returns {Promise<Object>} Returns an Object with all information on the target Route
 * @throws {Error} Throws an error object if the fetch is unsuccessful
 * @example
 * try{
 *  const fetchedRoute = await fetchRouteById(2)
 *  const parsedRoute = await JSON.parse(fetchedRoute)
 * }catch (error){
 *  console.error(error)
 * }
 */
async function fetchRouteById(routeId) {
    try {
      const response = await fetch(`http://localhost:8080/getRouteById/${routeId}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("fetchRouteById error:", error);
      throw error;
    }
  }
  
  export default fetchRouteById;
  