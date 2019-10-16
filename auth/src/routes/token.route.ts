import e from "express"

module.exports = function(router: e.Router): void {
	router.options("/token", function(req, res): void {
		res.header("Allow", "OPTIONS, GET")
		res.status(204)
		res.end()
	})
}
