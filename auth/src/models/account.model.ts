import { DataTypes, Model } from "sequelize"
import sequelize from "../config/database"
import Person from "./person.model"
import Credential from "./credential.model"
import Role from "./role.model"

class Account extends Model {}
Account.init(
	{
		name: DataTypes.STRING
	},
	{ sequelize, modelName: "account" }
)
Account.belongsTo(Person)
Account.hasMany(Credential)
Account.hasOne(Role)

sequelize.sync()

export default Account
