import express from "express"
import cors from "cors"

import getAllRoutes from "./routes/getAllRoutes.js"

const server = express()

const corsOptions = {
    origin: "http://localhost:3000",
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

export default server
