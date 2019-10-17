[@the-shops/auth](../globals.md) › ["middleware/logging"](_middleware_logging_.md)

# External module: "middleware/logging"

## Index

### Variables

* [activityLogger](_middleware_logging_.md#const-activitylogger)
* [debugLogger](_middleware_logging_.md#const-debuglogger)
* [errorLogger](_middleware_logging_.md#const-errorlogger)
* [logger](_middleware_logging_.md#const-logger)

## Variables

### `Const` activityLogger

• **activityLogger**: *Handler* =  expressWinston.logger({
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

*Defined in [middleware/logging.ts:11](https://github.com/brians-open-source-stuff/the-shops/blob/436f272/auth/src/middleware/logging.ts#L11)*

___

### `Const` debugLogger

• **debugLogger**: *Handler* =  expressWinston.logger({
	transports: [new Winston.transports.Console()],
	meta: false,
	expressFormat: true
})

*Defined in [middleware/logging.ts:5](https://github.com/brians-open-source-stuff/the-shops/blob/436f272/auth/src/middleware/logging.ts#L5)*

___

### `Const` errorLogger

• **errorLogger**: *ErrorRequestHandler* =  expressWinston.errorLogger({
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

*Defined in [middleware/logging.ts:25](https://github.com/brians-open-source-stuff/the-shops/blob/436f272/auth/src/middleware/logging.ts#L25)*

___

### `Const` logger

• **logger**: *Logger* =  Winston.createLogger({
	transports: [new Winston.transports.Console()]
})

*Defined in [middleware/logging.ts:39](https://github.com/brians-open-source-stuff/the-shops/blob/436f272/auth/src/middleware/logging.ts#L39)*
