<template>
	<h1>About</h1>
	<div>data: {{ data }}</div>
	<div>currencyData: {{ currencyData.currencyData.data }}</div>
</template>

<script setup>
	const { data } = useFetch(`/api/test?name=jeremy`, {
		method: "post",
		body: { age: 30 },
	})
	const { data: currencyData } = await useFetch(`/api/currency`)
</script>
