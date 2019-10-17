import { DataTypes, Model } from "sequelize"
import sequelize from "../config/database"
import Account from "./account.model"
import Contact from "./contact.model"

class Person extends Model {}
Person.init(
	{
		firstname: DataTypes.STRING,
		lastname: DataTypes.STRING
	},
	{ sequelize, modelName: "person" }
)
Person.hasMany(Account)
Person.hasMany(Contact)

sequelize.sync()

export default Person
