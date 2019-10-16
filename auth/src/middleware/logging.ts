import Winston from "winston"
import expressWinston from "express-winston"
import DailyRotateFile from "winston-daily-rotate-file"

export const debugLogger = expressWinston.logger({
	transports: [new Winston.transports.Console()],
	meta: false,
	expressFormat: true
})

export const activityLogger = expressWinston.logger({
	transports: [
		new DailyRotateFile({
			dirname: "logs/activity",
			filename: "%DATE%.log",
			datePattern: "YYYY-MM-DD-HH",
			maxSize: "2m",
			maxFiles: "1d",
			zippedArchive: true
		})
	],
	msg: req => `user: ${req.body.username}`
})

export const errorLogger = expressWinston.errorLogger({
	transports: [
		new DailyRotateFile({
			dirname: "logs/errors",
			filename: "%DATE%.log",
			datePattern: "YYYY-MM-DD-HH",
			maxSize: "2m",
			maxFiles: "1d",
			zippedArchive: true
		})
	],
	msg: req => req.app.locals.requestId
})

export const logger = Winston.createLogger({
	transports: [new Winston.transports.Console()]
})
