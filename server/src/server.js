import express from "express"
import { apiRouter } from "./routes/index.js"
import { config } from "./config/config.js"

const app = express()

const server = app.listen(config.PORT, () => { console.log(`Servidor http escuchando en el puerto ${config.PORT}`) })

app.use("/api", apiRouter)

// app.get('/', async (req, res) => {
//     res.render("home", { products: await container.getAll() })