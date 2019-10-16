import e from "express"

module.exports = function(router: e.Router): void {
	router.options("/renew", function(req, res) {
		res.header("Allow", "OPTIONS, POST")
		res.status(204)
		res.end()
	})
}
