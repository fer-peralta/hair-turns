import express from "express"
import { apiRouter } from "./routes/index.js"
import { config } from "./config/config.js"
import { loggerInfo, loggerError } from "./logs/logger.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const server = app.listen(config.PORT, () => { loggerInfo.info(`Server listening on ${config.PORT} and process ${process.pid}, ${new Date().toLocaleTimeString()}`) })

app.use("/api", apiRouter)