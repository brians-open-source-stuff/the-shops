import User from "../models/user.model"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"

export const findUserByUsername = async function(
	username: string
): Promise<any> {
	try {
		const user = await User.findOne({
			where: {
				username
			}
		})
		return user ? user.toJSON() : null
	} catch (error) {
		Promise.reject(error)
	}
}

export const verifyUser = async function(
	user: any,
	password: string
): Promise<any> {
	try {
		return await compare(password, user.password)
	} catch (error) {
		Promise.reject(error)
	}
}

export const createToken = function(user: any) {
	return new Promise(function(resolve, reject) {
		jwt.sign(
			user,
			process.env.TOKEN_SECRET || "secret keyboard catfish",
			{ expiresIn: "5m" },
			function(err: Error, token: any) {
				if (err) return reject(err)
				resolve(token)
			}
		)
	})
}
