import e from "express"
import uuid from "uuid/v4"

export const setRequestId = function(
	req: e.Request,
	res: e.Response,
	next: e.NextFunction
): void {
	req.app.locals.requestId = uuid()
	next()
}

export const ERR404 = function(
	req: e.Request,
	res: e.Response,
	next: e.NextFunction
): void {
	res.status(404)
	res.json({
		status: 404,
		message: "Not Found"
	})
}

export const ERR500 = function(
	req: e.Request,
	res: e.Response,
	next: e.NextFunction
): void {
	res.status(500)
	res.json({
		status: 500,
		message: "Internal Server Error",
		errorId: req.app.locals.requestId
	})
}
