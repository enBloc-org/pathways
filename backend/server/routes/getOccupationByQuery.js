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

    const tLevels = data.results
      .map(occupation => {
        if (occupation.products !== undefined) {
          return {
            ...occupation,
            products: occupation.products.filter(
              product => product.typeName === "TLevel"
            ),
          }
        }

        return {
          ...occupation,
        }
      })
      .filter(
        occupation =>
          occupation.products !== undefined &&
          occupation.products.length > 0 &&
          occupation.level === 3
      )

    return tLevels
  } catch (error) {
    console.error(error)
    throw error
  }
}
