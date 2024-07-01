import "dotenv/config"

export default async function getRouteById(givenId) {
    if (typeof givenId !== "string")
        throw new Error("Id value not acceptable")

    const url = `${process.env.BASE_URL}/Routes/${givenId}`

    const options = {
        method: "GET",
        headers: {
            "X-API-KEY": process.env.API_KEY,
            accept: "application/json",
        },
    }

    try{
      const response = await fetch(url, options)
      const data = await response.json()
      return data
    }catch(error){
      console.error(`Error fetching data: ${error}`)
      throw error
    }
}
