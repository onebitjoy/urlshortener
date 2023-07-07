import express, { json } from "express"
import url_router from "./routers/url.js" // urlrouter
import index_router from "./routers/index.js" // urlrouter
import "./db/db.js" // auto connect to db

const app = express()
const port = process.env.port || 3000

app.use(express.json()) // convert into json

app.use("/", index_router)
app.use("/api/", url_router)

app.listen(port, () => console.log("Server running on port " + port))