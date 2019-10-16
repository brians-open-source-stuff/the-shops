import e from "express"

export default async function(app: e.Application, logger: any): Promise<void> {
	try {
		const server = app.listen(parseInt(process.argv[2]) || 3000) as any
		logger.info(`App is listening on port ${server.address().port}`)
	} catch (error) {
		logger.error(error.stack)
		process.exit(1)
	}
}
