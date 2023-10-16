export default defineEventHandler(async (event) => {
	// post data
	const data = await $fetch(
		`https://api.currencyapi.com/v3/latest?apikey=cur_live_AExv4gYGwtnm61sxX4g5El5yoUMiz1kQ9TUZc0IY&currencies=EUR%2CUSD%2CCAD%2CBTC`
	)

	console.log("currency data fetched:", data)

	return {
		message: `success`,
		currencyData: data,
	}
})
