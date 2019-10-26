import e from "express"
import { findUserByUsername, verifyUser, createToken } from "../services/users"
import redis from "../config/redis"
import uuid from "uuid/v4"
import { logger } from "../middleware/logging"

export const postToken = async function(
	req: e.Request,
	res: e.Response,
	next: e.NextFunction
): Promise<void> {
	try {
		const user = await findUserByUsername(req.body.username)
		if (user && (await verifyUser(user, req.body.password))) {
			const token = await createToken(user)
			const payload = { token, renew: uuid() }
			redis.set(payload.token, payload.renew)
			res.json(payload)
		} else {
			res.status(401)
			res.end()
		}
	} catch (error) {
		next(error)
	}
}
