import "dotenv/config"

export default async function getOccupationDetails(stdCode) {
  if (typeof stdCode !== "string" || !stdCode)
    throw new Error("No valid code found")

  const url = `${process.env.BASE_URL}/Occupations/${stdCode}?expand=occupation.summary%2C%20occupation.overview%2C%20occupation.products`

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
    console.error(error)
    throw error
  }
}
