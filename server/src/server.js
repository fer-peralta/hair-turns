import express from "express"
import { apiRouter } from "./routes/index.js"
import { config } from "./config/config.js"
import { loggerInfo, loggerError } from "./logs/logger.js"

const app = express()

const date = new Date().toLocaleTimeString()

const server = app.listen(config.PORT, () => { loggerInfo.info(`Server listening on ${config.PORT} and process ${process.pid}, ${date}`) })

app.use("/api", apiRouter)