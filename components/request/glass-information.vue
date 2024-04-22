<template>
  <div class="flex flex-col">
    <font-awesome-icon :icon="['fas', 'glasses']" :size="'2x'" class="mb-2" />
    <h1 class="text-3xl text-center">Detalhes do Pedido!</h1>
    <span class="text-lg text-zinc-700 dark:text-zinc-50 text-center"> Nos conte mais sobre sua escolha de óculos </span>

    <div class="grid grid-cols-3 gap-5 mt-20">
      <div class="col-span-3">
        <div class="flex items-center">
          <span class="text-zinc-700 dark:text-zinc-50 text-lg"> Qual tipo de armação você deseja? </span>
          <font-awesome-icon :icon="['fas', 'circle-check']" class="mx-2 text-teal-400" v-if="hasFrame" />
          <font-awesome-icon :icon="['fas', 'circle-xmark']" class="text-red-400 mx-2" v-if="!hasFrame" />
        </div>
      </div>
      <div class="col-span-1" v-for="item of store.orderInformations.glassFrame">
        <DefaultSelectedButton :label="item.name" :id="item.id" @selected="store.onSetGlassFrame($event)" />
      </div>
    </div>

    <div class="grid grid-cols-3 gap-5 mt-20">
      <div class="col-span-3">
        <div class="flex items-center">
          <span class="text-zinc-700 dark:text-zinc-50 text-lg">Qual Genero da armação?</span>
          <font-awesome-icon :icon="['fas', 'circle-check']" class="mx-2 text-teal-400" v-if="hasGender" />
          <font-awesome-icon :icon="['fas', 'circle-xmark']" class="text-red-400 mx-2" v-if="!hasGender" />
        </div>
      </div>
      <div class="col-span-1" v-for="item of store.orderInformations.glassGender">
        <DefaultSelectedButton :label="item.name" :id="item.id" @selected="store.onSetGlassGender($event)" />
      </div>
    </div>

    <div class="grid grid-cols-4 gap-5 mt-20">
      <div class="col-span-4">
        <div class="flex items-center">
          <span class="text-zinc-700 dark:text-zinc-50 text-lg"> Alguma Preferencia de Lentes? </span>
          <font-awesome-icon :icon="['fas', 'circle-check']" class="mx-2 text-teal-400" v-if="hasLensType" />
          <font-awesome-icon :icon="['fas', 'circle-xmark']" class="text-red-400 mx-2" v-if="!hasLensType"/>
        </div>
      </div>
      <div class="col-span-1" v-for="item of store.orderInformations.glassLensType">
        <DefaultSelectedButton :label="item.name" :id="item.id" @selected="store.onSetGlassLens($event)" />
      </div>
    </div>

    <div class="grid grid-cols-3 mt-20" v-if="store.hasOrderDetails">
      <div class="col-span-1 col-start-3">
        <DefaultButton :label="'Avançar'" :fill="true" @pressed="store.onHandleStep('next')" />
      </div>
    </div>

    <RequestDragRecipe />
  </div>
</template>

<script setup lang="ts">
import { useNewAuctionRequest } from '~/stores/new-auction-request';
const store = useNewAuctionRequest();

const hasLensType = computed(() => {
  return store.payload.glassLensType.length > 0
})

const hasGender = computed(() => {
  return store.payload.glassGender.length > 0
})

const hasFrame = computed(() => {
  return store.payload.glassFrame.length > 0
})


</script>

<style lang="scss" scoped></style>
