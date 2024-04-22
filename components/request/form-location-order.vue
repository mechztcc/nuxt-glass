<template>
  <div class="flex flex-col justify-start">
    <font-awesome-icon :icon="['fas', 'earth-americas']" :size="'2x'" class="mb-2" />
    <h1 class="text-3xl text-center">Região de Busca</h1>
    <span class="text-lg text-zinc-700 dark:text-zinc-50 text-center"> Escolha à região onde seu pedido ficará disponível </span>

    <div class="grid grid-cols-3 mt-10 gap-5">
      <div class="col-span-3">
        <RequestFormCustomLocation />
      </div>
    </div>

    <div class="grid grid-cols-3 mt-20" v-if="store.hasAvailableAt">
      <div class="col-span-1 col-start-3">
        <DefaultButton :label="'Avançar'" :fill="true" @pressed="store.onHandleStep('next')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const store = useNewAuctionRequest();

  const { data, pending } = useFetchAuth('store/find', { immediate: true, method: 'get' });
</script>

<style lang="scss" scoped></style>
