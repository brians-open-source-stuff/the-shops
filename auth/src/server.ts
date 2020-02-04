#!/usr/bin/env node
import app from "./index"
import { createServer as http } from "http"
import { createServer as https } from "https"
import { logger } from "./middleware/logging"

const server =
	process.env.NODE_ENV == "production"
		? (https(app) as any)
		: (http(app) as any)

server.listen(process.env.PORT || 3001)

function listenHandler(): void {
	logger.info(`Application is listening on port ${server.address().port}`)
}

server.on("listening", listenHandler)
