<template>
  <NuxtLayout :name="'admin'">
    <template v-if="!pending">
      <ShopDetails />
      <ShopNotFound v-if="!store.showCreateForm && data.length == 0" />
      <CreateAccountShop v-if="store.showCreateForm" />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
  const store = useCreateShop();

  const { data, pending } = useFetchAuth('store', {
    immediate: true,
    method: 'get',
    cb: () => {},
  });

  console.log(data.value);
  

</script>

<style scoped></style>
