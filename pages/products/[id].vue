<template>
	<div>
		<Head>
			<Title>Nuxt Merch | {{ product.title }}</Title>
			<Meta name="description" :content="product.description" />
		</Head>
		<ProductDetails :product="product" />
	</div>
</template>

<script setup>
	const { id } = useRoute().params
	const uri = `https://fakestoreapi.com/products/${id}`

	const { data: product } = await useFetch(uri, { key: id })

	if (!product.value) {
		throw createError({
			statusCode: 404,
			statusMessage: "Product Not Found",
			fatal: true,
		})
	}

	console.log("got data:", product)

	definePageMeta({
		layout: "products",
	})
</script>
