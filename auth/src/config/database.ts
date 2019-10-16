import { Sequelize } from "sequelize"

export default new Sequelize(
	process.env.DB_NAME || "the_shops",
	process.env.DB_USER || "root",
	process.env.DB_PASSWORD || "",
	{
		dialect: "mysql"
	}
)
