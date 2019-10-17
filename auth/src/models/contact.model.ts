import { DataTypes, Model } from "sequelize"
import sequelize from "../config/database"

class Contact extends Model {}
Contact.init(
	{
		name: DataTypes.STRING,
		info: DataTypes.JSON
	},
	{ sequelize, modelName: "contact" }
)

sequelize.sync()

export default Contact
