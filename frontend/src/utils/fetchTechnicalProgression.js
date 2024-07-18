export default async function fetchTechnicalProgression(productCode) {
    try {
        const data = await fetch(
            `${process.env.REACT_APP_SERVER}/getTechnicalProgression/${productCode}`
        )
        return data
    } catch (error) {
        console.error(`Error fetching data: ${error}`)
    }
}