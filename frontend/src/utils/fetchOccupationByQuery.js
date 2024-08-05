/**
 *
 * @param {string} givenQuery a string with any search parameter
 * @returns {Promise<Array<object>>} returns a fulfilled promise with an array of Occupation objects from the API when successful
 * @returns {error} returns an error object if unfulfilled
 * @example
 * try{
 *  const {data: occupationsArray, error} = await fetchOccupationByQuery(digital)
 *  if(error) throw error
 *  const parsedOccupations = await occupationsArray.json()
 *  return parsedOccupations
 * } catch (error) {
 *  throw error
 * }
 */
export default async function fetchOccupationByQuery(givenQuery) {
  if (typeof givenQuery !== "string" || givenQuery.length === 0)
    throw new Error("No search parameter found")

  const queryArray = givenQuery.split(",")

  const result = []
  queryArray.forEach(async query => {
    try {
      const data = await fetch(
        `${process.env.REACT_APP_SERVER}/getOccupationByQuery/${query}`
      )
      const parsedData = await data.json()
      result.push(...parsedData.results)
    } catch (error) {
      console.error(`Error fetching data: ${error}`)
      throw error
    }
  })

  return result
}
