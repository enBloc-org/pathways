import "dotenv/config"

export default async function getOccupationByQuery(
    searchParameter
) {
    const url = `${process.env.BASE_URL}//SearchOccupations?searchTerm=${searchParameter}&expand=occupation.maphierarchy%2C%20occupation.summary%2C%20occupation.overview&pageSize=10&pageNumber=1`

    const options = {
        method: "GET",
        headers: {
            "X-API-KEY": process.env.API_KEY,
            accept: "application/json",
        },
    }

    try {
        const response = await fetch(url, options)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(`Error fetching data: ${error}`)
        throw error
    }
}
