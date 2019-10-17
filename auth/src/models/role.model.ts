import { DataTypes, Model } from "sequelize"
import sequelize from "../config/database"

class Role extends Model {}
Role.init(
	{
		name: DataTypes.STRING
	},
	{ sequelize, modelName: "role" }
)

sequelize.sync()

export default Role
