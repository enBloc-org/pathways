import server from "../server/server.js"

server.listen(process.env.PORT, () =>
    console.log("Server is live!")
)
