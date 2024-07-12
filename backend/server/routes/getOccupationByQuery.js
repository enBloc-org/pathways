import "dotenv/config"

export default async function getOccupationByQuery(query) {
  if (typeof query !== "string" || !query)
    throw new Error("No query found")

  const url = `${process.env.BASE_URL}/SearchOccupations?searchTerm=${query}&expand=occupation.maphierarchy%2C%20occupation.summary%2C%20occupation.overview%2C%20occupation.products&pageSize=10&pageNumber=1`

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": process.env.API_KEY,
    },
  }

  try {
    const response = await fetch(url, options)
    if (!response.ok) throw new Error("Error fetching data")

    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}
