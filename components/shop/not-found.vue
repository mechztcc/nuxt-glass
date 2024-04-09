<template>
  <div class="grid grid-cols-1" v-if="store.hasShop && !store.showCreateForm">
    <div class="col-span-1">
      <div class="flex flex-col justify-center items-center min-h-screen">
        <font-awesome-icon :icon="['fas', 'store-slash']" :size="'2xl'" />
        <span class="text-xl">Você ainda não possui uma loja registrada</span>
        <DefaultButton class="mt-2" :label="'Quero criar uma loja'" :fill="true" @pressed="store.onHandleForm()" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useCreateShop } from '~/stores/shop-info';

  const store = useCreateShop();
  const { data, pending } = useFetchAuth('store', { immediate: true, method: 'get', cb: () => {
    store.hasShop = data.value.length > 0
  } });
  
</script>

<style scoped></style>
