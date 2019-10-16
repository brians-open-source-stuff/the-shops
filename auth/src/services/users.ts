import User from "../models/user.model"

export const findUserByUsername = async function(
	username: string
): Promise<void> {
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
