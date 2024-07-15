export default async function fetchTechnicalProgression(query) {
    try {
        const data = await fetch(
            `${process.env.REACT_APP_SERVER}/getTechnicalProgression/${query}`
        )
        return data
    } catch (error) {
        console.error(`Error fetching data: ${error}`)
    }
}