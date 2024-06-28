import "dotenv/config"

export default async function getAllRoutes() {
    const url = `${process.env.BASE_URL}/Routes`

    const options: {
        method: string
        headers: HeadersInit
    } = {
        method: "GET",
        headers: {
            "X-API-KEY": process.env.API_KEY as string,
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
