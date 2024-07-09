/**
 *
 * @async this function must be awaited
 * @returns {Promise<Array>} Returns an array of Route Objects
 * @throws {Error} Throws an error object if the fetch is unsuccessful
 * @example
 * try {
 *  const routesArray = await fetchAllRoutes() // array of routes will be stored in variable
 *  const parsedRoutes = await JSON.parse(routesArray) // the result must be parsed
 * } catch (error){
 *  console.error(error)
 * }
 *
 */
async function fetchAllRoutes() {
    try {
      const response = await fetch('http://localhost:8080/getAllRoutes');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();

      return data;
    } catch (error) {
      console.error("fetchAllRoutes error:", error);
      throw error;
    }
  }
  
  export default fetchAllRoutes;
  