/**
 * 
 * @abstract this util calls the api for the full details of any given occupation to be displayed in `/occupation-details`
 * @param {string} givenCode expects the stdCode of an occupation present in the api data
 * @returns the stringified object of the targeted occupation
 * @throws if our server cannot find the given code of if the code is not a valid string
 */
export default async function fetchOccupationDetails(givenCode) {
  try {
    const data = await fetch(
      `${process.env.REACT_APP_SERVER}/getOccupationDetails/${givenCode}`
    )
    const parsedData = await data.json()

    return parsedData
  } catch (error) {
    console.error(error)
    throw error
  }
}
