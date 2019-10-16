import e from "express"
import { postToken } from "../controllers/token.controller"

module.exports = function(router: e.Router): void {
	router.options("/token", function(req, res): void {
		res.header("Allow", "OPTIONS, POST")
		res.status(204)
		res.end()
	})

	router.post("/token", postToken)
}
