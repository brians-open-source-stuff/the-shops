import e from "express"
import { urlencoded, json } from "body-parser"

export default function(router: e.Router): void {
	router.use(urlencoded({ extended: false }))
	router.use(json())
}
