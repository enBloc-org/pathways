/**
 *
 * @async this function must be awaited
 * @param {string} productCode expects the the product code required by the api to retrieve technical progression from the product
 * @returns {Promise<Object>} Returns an Object with the technical progression information
 * @throws {Error} Throws an error object if the fetch is unsuccessful
 * @example
 * try{
 *  const fetchedTechnicalProgression = await fetchTechnicalProgression
 *  const parsedTechnicalProgression = await JSON.parse(fetchedTechnicalProgression)
 * }catch (error){
 *  console.error(error)
 * }
 */
export default async function fetchTechnicalProgression(productCode) {
    try {
        const data = await fetch(
            `${process.env.REACT_APP_SERVER}/getTechnicalProgression/${productCode}`
        )
        return data
    } catch (error) {
        console.error(`Error fetching data: ${error}`)
        throw error
    }
}