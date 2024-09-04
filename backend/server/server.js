import express from "express"
import cors from "cors"

import getAllRoutes from "./routes/getAllRoutes.js"
import getRouteById from "./routes/getRouteById.js"
import getOccupationByQuery from "./routes/getOccupationByQuery.js"
import getOccupationDetails from "./routes/getOccupationDetails.js"

const server = express()

const corsOptions = {
  origin: process.env.FRONTEND,
  optionsSuccessStatus: 200,
}

server.use(cors(corsOptions))

server.get("/getAllRoutes", async (req, res) => {
  try {
    const data = await getAllRoutes()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
})

server.get("/getRouteById/:id", async (req, res) => {
  const { id } = req.params
  try {
    const data = await getRouteById(id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
})

server.get("/getOccupationByQuery/:query", async (req, res) => {
  const { query } = req.params
  try {
    const data = await getOccupationByQuery(query)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
})

server.get("/getOccupationDetails/:stdCode", async (req, res) => {
  const { stdCode } = req.params
  try {
    const data = await getOccupationDetails(stdCode)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
})

export default server
