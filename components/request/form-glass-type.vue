<template>
  <div class="flex flex-col justify-start ">
    <font-awesome-icon :icon="['fas', 'bullhorn']" :size="'2x'" class="mb-2" />
    <h1 class="text-3xl text-center">Tipo do Pedido!</h1>
    <span class="text-lg text-zinc-700 dark:text-zinc-50 text-center"> Escolha entre Óculos de sol, de gráu ou lentes de contato </span>

    <div class="grid grid-cols-3 mt-10 gap-5">
      <div class="col-span-1" v-for="item of store.orderInformations.glassType">
        <DefaultSelectedButton :label="item.name" :id="item.id" @selected="store.onSetGlassType($event)" />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-3 mt-20" v-if="store.hasGlassType">
    <div class="col-span-1 col-start-3">
      <DefaultButton :label="'Avançar'" :fill="true" @pressed="store.onHandleStep('next')" />
    </div>
  </div>

</template>

<script setup lang="ts">
const store = useNewAuctionRequest();

</script>

<style lang="scss" scoped></style>
