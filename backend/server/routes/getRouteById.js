import "dotenv/config"

export default async function getRouteById(givenId) {
    if (typeof givenId !== "string" || !givenId)
        throw new Error("Id value not acceptable")

    const url = `${process.env.BASE_URL}/Routes/${givenId}`

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            "X-API-KEY": process.env.API_KEY,
        },
    }

    try {
        const response = await fetch(url, options)
        if (!response.ok)
            throw new Error("Error fetching data")

        const data = await response.json()
        return data
    } catch (error) {
        console.error(`Error fetching data: ${error}`)
        throw error
    }
}
