<template>
  <NuxtLayout :name="'admin'">
    <div class="grid grid-cols-1 md:grid-cols-4 mb-5">
      <div class="col-span-1 md:col-span-2 md:col-start-2">
        <DefaultInput :type="'text'" :field="'email'" :placeholder="'Buscar oferta'">
          <template #prepend>
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="text-zinc-900 rounded-full" />
          </template>
        </DefaultInput>
      </div>
    </div>

    <span class="text-xl font-bold">Aguardando seu lance</span>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
      <DashboardCardAvailableOffer v-for="(item, index) in data" :key="index" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
  const { data } = useFetchAuth('orders/list-by-region', { immediate: true, method: 'get' });
</script>

<style lang="scss" scoped></style>
