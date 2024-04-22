<template>
  <div class="flex flex-col justify-start">
    <font-awesome-icon :icon="['fas', 'receipt']" :size="'2x'" class="mb-2" />
    <h1 class="text-3xl text-center">Forma de pagamento</h1>
    <span class="text-lg text-zinc-700 dark:text-zinc-50 text-center"> Nos conte como você deseja realizar o pagamento </span>

    <div class="grid grid-cols-3 mt-10 gap-5">
      <div class="col-span-1" v-for="(item, index) of store.orderInformations.orderPaymentType">
        <DefaultSelectedButton :label="item.name" :id="item.id" @selected="store.onSetPaymentType($event)" />
      </div>
    </div>

    <div class="grid grid-cols-3 mt-20" v-if="store.hasPaymentType">
      <div class="col-span-1 col-start-3">
        <DefaultButton :label="'Avançar'" :fill="true" @pressed="store.onHandleStep('next')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useNewAuctionRequest();
</script>

<style lang="scss" scoped></style>
