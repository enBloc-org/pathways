import express from "express"
import cors from "cors"

const server = express()

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
}

server.get("getAllRoutes", async (req, res) => {
  try {
    const data = await getAllRoutes()
    res.status(200).json(data)
  } catch (error) {
    console.error(`Error accessing route: ${error}`)
    throw error
  }
})

server.listen(8080, () => console.log(`The Server is Live!`))
