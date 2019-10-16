import e from "express"

module.exports = function(router: e.Router): void {
	router.get("/", function(req, res): void {
		res.json({
			message: "Hello, World!"
		})
	})
}
