import e from "express"

export default async function(app: e.Application): Promise<void> {
	try {
		const server = app.listen(parseInt(process.argv[2]) || 3000) as any
		console.log("App is listening on port", server.address().port)
	} catch (error) {
		console.error(error.stack)
		process.exit(1)
	}
}
