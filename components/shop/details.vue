<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
    <div class="col-span-2 md:col-span-3">
      <DefaultCaroulsel />
    </div>

    <div class="col-span-2 md:col-span-3">
      <DefaultDropFile :title="'Arraste os arquivos ou clique aqui para adicionar um banner'" :limit="2"/>
    </div>

    <div class="col-span-2 md:col-span-3 mt-20 dark:text-zinc-50">
      <div class="flex flex-col">
        <span class="text-3xl font-bold">VENDAS E CIA LTDA</span>
        <div class="flex items-center">
          <font-awesome-icon :icon="['fas', 'location-dot']" />
          <span class="mx-1 text-xl">Recife - PE</span>
        </div>
        <div class="flex items-center">
          <font-awesome-icon :icon="['fas', 'star']" />
          <span class="mx-1 text-xl">4.5</span>
        </div>

        <div class="flex items-center">
          <font-awesome-icon :icon="['fas', 'calendar']" />
          <span class="mx-1">Membro desde setembro de 2019</span>
        </div>
        <span>899 vendas realizadas</span>
      </div>
    </div>

    <div class="col-span-2 md:col-span-3 text-center my-10 dark:text-zinc-50">
      <h1 class="text-5xl font-extrabold">Opinião dos nossos clientes</h1>
    </div>

    <div class="col-span-2 md:col-span-1" v-for="(item, index) in 4" :key="index">
      <ProductReview />
    </div>
  </div>

  <ShopPopularProducts />
  <ShopAllProducts />
</template>

<script setup lang="ts"></script>

<style scoped>
  img {
    max-height: 500px;
    object-fit: cover;
  }
</style>
