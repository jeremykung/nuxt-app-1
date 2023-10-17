export default defineEventHandler(async (event) => {
	console.log("event:", event.context.params)
	const { code } = event.context.params
	console.log("currencyCode:", code)
	const { currencyKey } = useRuntimeConfig()

	const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${code}`

	try {
		const data = await $fetch(uri)
		console.log("currency data:", data)
		return {
			message: "success",
			currencyData: data,
		}
	} catch (error) {
		console.log("error getting currency:", error)
		return {
			message: "failed",
			error: error,
		}
	}
})
