<template>
  <NuxtLayout :name="'admin'">
    <div class="bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-50 p-5">
      <div class="flex justify-between border-b-2 py-3">
        <span class="text-xl font-semibold">Meu Catálogo</span>
        <div class="flex">
          <DefaultButton>
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </DefaultButton>
          <DefaultButton>
            <font-awesome-icon :icon="['fas', 'arrow-down-a-z']" />
          </DefaultButton>
          <DefaultButton>
            <font-awesome-icon :icon="['fas', 'retweet']" />
          </DefaultButton>
          <DefaultButton>
            <font-awesome-icon :icon="['fas', 'grip-lines']" />
          </DefaultButton>
          <DefaultButton>
            <font-awesome-icon :icon="['fas', 'grip-vertical']" />
          </DefaultButton>
          <DefaultButton :to="'/admin/products/create'">
            <font-awesome-icon :icon="['fas', 'plus']" />
          </DefaultButton>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-10" v-if="!pending">
        <div class="col-span-2" v-for="(item, index) in products" :key="index">
          <ProductCard :product="item" />
        </div>
      </div>

      <DefaultPaginator v-if="!pending" :items="data" :per-page="5" @pagination="onPaginated" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
  const { data, pending, error } = useFetchAuth('products', {
    immediate: true,
    method: 'get',
  });

  const products = ref([]);

  function onPaginated({ items }: any) {
    products.value = items
  }
</script>

<style lang="scss" scoped></style>
