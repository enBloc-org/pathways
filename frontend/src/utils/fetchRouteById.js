import "dotenv/config";

/**
 *
 * @async this function must be awaited
 * @param {number} id expects the id value of a Route
 * @returns {Promise<Object>} Returns an Object with all information on the target Route
 * @throws {Error} Throws an error object if the fetch is unsuccessful
 * @example
 * try {
 *  const fetchedRoute = await fetchRouteById(2)
 *  const parsedRoute = await JSON.parse(fetchedRoute)
 * } catch (error) {
 *  console.error(error)
 * }
 */
export default async function fetchRouteById(id) {
    try {
<<<<<<< HEAD
        const response = await fetch(`http://localhost:8080/getRouteById/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch route: ${response.statusText}`);
        }
        const data = await response.json();
        
        if (!data.clusters || !Array.isArray(data.clusters)) {
            throw new Error('Invalid response format: missing clusters');
        }
        
        return data;
=======
        const data = await fetch(
            `${process.env.REACT_APP_SERVER}/getRouteById/${id}`
        )
        return data
>>>>>>> cfb558565daefdf5b8140eee1da5924abe4c5bd6
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
        throw error;
    }
}
