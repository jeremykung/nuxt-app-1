export default defineEventHandler(async (event) => {
	// query params
	const params = getQuery(event)

	// post data
	const reqData = await readBody(event)

	return {
		message: `hello ${params.name}`,
		params: params,
		reqData: reqData,
	}
})
