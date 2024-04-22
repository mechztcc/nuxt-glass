<template>
  <NuxtLayout :name="'admin'">
    <span class="text-xl font-bold dark:text-zinc-50 ">Aguardando seu lance</span>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
      <DashboardCardAvailableOffer :order="item" v-for="(item, index) in data" :key="index" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
  const { data } = useFetchAuth('orders/list-by-region', { immediate: true, method: 'get' });
</script>

<style lang="scss" scoped></style>
