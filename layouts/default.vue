<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 gap-4 flex items-center justify-center">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/products" class="btn">Products</NuxtLink>
    </nav>
  </header>

  <div class="container mx-auto p-4">
    <slot />
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
