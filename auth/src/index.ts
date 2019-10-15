import express from "express"
const app = express()
const router = express.Router()

router.get("/", function(req, res) {
	res.send("Hello, World!")
});

app.use(router);

app.listen(3000);
