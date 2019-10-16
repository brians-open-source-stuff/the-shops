import e from "express"

module.exports = function(router: e.Router): void {
	router.get("/", function(req, res): void {
		res.json({
			status: 200,
			message: "Hello, World!"
		})
	})
}
