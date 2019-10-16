import User from "../models/user.model"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"

export const findUserByUsername = async function(
	username: string
): Promise<any> {
	try {
		Promise.resolve(
			await User.findOne({
				where: {
					username
				}
			})
		)
	} catch (error) {
		Promise.reject(error)
	}
}

export const verifyUser = async function(
	user: any,
	password: string
): Promise<any> {
	try {
		Promise.resolve(await compare(password, user.password))
	} catch (error) {
		Promise.reject(error)
	}
}

export const createToken = async function(user: any): Promise<any> {
	jwt.sign(
		user,
		process.env.TOKEN_SECRET || "secret keyboard catfish",
		function(err: Error, token: any) {
			if (err) return Promise.reject(err)
			Promise.resolve(token)
		}
	)
}
