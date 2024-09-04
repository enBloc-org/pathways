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
