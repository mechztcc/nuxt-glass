<template>
  <div
    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 py-20 mx-5 md:mx-20 gap-5"
  >
    <div class="col-span-2 md:col-span-4 lg:col-span-6">
      <h1 class="text-6xl text-center mb-10">Produtos em oferta agora</h1>
      <span class="text-3xl mt-10">Óculos de grau</span>
    </div>

    <div
      class="col-span-1 md:col-span-1 lg:col-span-1 mt-10"
      v-for="(item, index) in 6"
      :key="index"
    >
      <ProductCard />
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped></style>
