import dotenv from "dotenv"
import express from "express"
import { logger, errorLogger, debugLogger } from "./middleware/logging"
import { setRequestId, ERR404, ERR500 } from "./middleware/errorResponses"
import bodyParser from "./config/bodyParser"
import server from "./server"
import { readdirSync } from "fs"
import { join } from "path"
dotenv.config()
const app = express()
const router = express.Router()

app.locals.renewKeys = []

bodyParser(router)

router.use(debugLogger)
router.use(setRequestId)
readdirSync(join(__dirname, "routes")).forEach(function(file) {
	require(join(__dirname, "routes", file))(router)
})
router.use(ERR404)
router.use(errorLogger)
router.use(ERR500)

app.use(router)

server(app, logger)
