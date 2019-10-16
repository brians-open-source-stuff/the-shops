import { DataTypes, Model } from "sequelize"
import sequelize from "../config/database"

class User extends Model {}
User.init(
	{
		username: DataTypes.STRING,
		password: DataTypes.STRING
	},
	{ sequelize, modelName: "user" }
)

export default User
