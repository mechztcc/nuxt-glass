<template>
  <div class="flex flex-col justify-start">
    <font-awesome-icon :icon="['fas', 'location-dot']" :size="'2x'" class="mb-2" />
    <h1 class="text-3xl text-center">Retirada do Produto</h1>
    <span class="text-lg text-zinc-700 text-center"> Nos conte como você deseja receber seu Produto </span>

    <div class="grid grid-cols-3 mt-10 gap-5">
      <div class="col-span-1" v-for="(location, index) of store.orderInformations.orderDeliveryType">
        <DefaultSelectedButton  :label="location.name" :id="location.id" @selected="onSelect($event, index)" />
      </div>
    </div>

    <template v-if="store.hasDelivery">
      <span class="text-zinc-500 mt-10">Endereço da Loja</span>
      <span class="text-zinc-500 mt-10">Endereço da Minha casa</span>
      <div class="flex items-center">
        <font-awesome-icon :icon="['fas', 'location-dot']" />
        <span class="ml-2">Av. Inhamã n9, Cruz de rebouças - PE</span>
      </div>
    </template>
  </div>

  <div class="grid grid-cols-3 mt-20" v-if="store.hasDelivery">
    <div class="col-span-1 col-start-3">
      <DefaultButton :label="'Avançar'" :fill="true" @pressed="store.onHandleStep('next')" />
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useNewAuctionRequest();


function onSelect(item: any, index: number) {
  store.onSelectDelivery(item);
  store.onHandleStep('next');
}
</script>

<style lang="scss" scoped></style>
