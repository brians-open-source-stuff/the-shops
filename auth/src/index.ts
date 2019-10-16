import express from "express"
import { logger, errorLogger, debugLogger } from "./middleware/logging"
import server from "./server"
import { readdirSync } from "fs"
import { join } from "path"
const app = express()
const router = express.Router()

router.use(debugLogger)
readdirSync(join(__dirname, "routes")).forEach(function(file) {
	require(join(__dirname, "routes", file))(router)
})
router.use(errorLogger)

app.use(router)

server(app, logger)
