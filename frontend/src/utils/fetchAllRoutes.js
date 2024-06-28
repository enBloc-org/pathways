/**
 * 
 * @async function must be awaited
 * @returns {Promise<Array>} Returns an array of Route Objects
 * @throws {Error} Throws an error object if the fetch is unsuccessful
 * @example
 * try {
 *  const routesArray = fetchAllRoutes() // array of routes will be stored in variable
 *  const parsedRoutes = JSON.parse(routesArray) // the result must be parsed
 * } catch (error){
 *  console.error(error)
 * }
 * 
 */
export default async function fetchAllRoutes() {
  try {
    const data = await fetch("http://localhost:8080/getAllRoutes")
    const parsedData = await data.json()

    return parsedData
  } catch (error) {
    console.error(`Error fetching data: ${error}`)
    throw error
  }
}