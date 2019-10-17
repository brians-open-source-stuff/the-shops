import { DataTypes, Model } from "sequelize"
import sequelize from "../config/database"
import Account from "./account.model"

class Credential extends Model {}
Credential.init(
	{
		type: DataTypes.STRING,
		credential: DataTypes.JSON
	},
	{ sequelize, modelName: "credential" }
)
Credential.belongsTo(Account)

sequelize.sync()

export default Credential
