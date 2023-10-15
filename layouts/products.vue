<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container flex justify-center mx-auto p-4">
        <NuxtLink to="/products" class="font-bold">More Merch</NuxtLink>
      </nav>
    </header>
  </div>

  <div class="container mx-auto p-4">
    <slot />
  </div>

  <footer class="container mx-auto p-4 flex justify-center border-t-2">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/products">Products</NuxtLink>
  </footer>
</template>
