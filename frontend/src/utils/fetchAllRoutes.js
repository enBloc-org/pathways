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