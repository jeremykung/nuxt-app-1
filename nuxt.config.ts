// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	pages: true,
	modules: ["@nuxtjs/tailwindcss"],
	app: {
		head: {
			title: "Nuxt App 1",
			meta: [
				{
					name: "description",
					content: "Nuxt 3 app for educational purposes",
				},
			],
			link: [
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/icon?family=Material+Icons",
				},
			],
		},
	},
	runtimeConfig: {
		currencyKey: process.env.CURRENCY_API_KEY,
	},
})
