<template>
	<div>
		<h1>Currency</h1>
		<input v-model="currencyCode" type="text" placeholder="currency" />
		<p>{{ currencyCode }}</p>
		<button class="btn" @click="handleClick">Go!</button>
		<div v-for="currency in currencyInfo" :key="currency.code">
			<h2>{{ currency.code }}</h2>
			<p>{{ currency.value }}</p>
		</div>
	</div>
</template>

<script setup>
	const currencyCode = ref("")
	const currencyInfo = ref(null)

	async function handleClick() {
		console.log("getting currency info...")
		try {
			const { data } = await useFetch(
				`/api/currency/${currencyCode.value}`
			)
			console.log(response.data.value.currencyData.data)
			currencyInfo.value = response.data.value.currencyData.data
			currencyInfo.value = data
		} catch (error) {
			console.log("error", error)
		}
	}
</script>
