import "dotenv/config"

export default async function fetchRouteById(id) {
    try {
        const data = await fetch(
            `${process.env.SERVER}/getRouteById/${id}`
        )
        return data
    } catch (error) {
        console.error(`Error fetching data: ${error}`)
    }
}
