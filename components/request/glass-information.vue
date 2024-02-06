<template>
  <div class="flex flex-col">
    <font-awesome-icon :icon="['fas', 'glasses']" :size="'2x'" class="mb-2" />
    <h1 class="text-3xl text-center">Detalhes do Pedido!</h1>
    <span class="text-lg text-zinc-700 text-center">
      Nos conte mais sobre sua escolha de óculos
    </span>

    <div class="grid grid-cols-3 gap-5 mt-20">
      <div class="col-span-3">
        <div class="flex items-center">
          <span class="text-zinc-700 text-lg"
            >Qual tipo de armação você deseja?</span
          >
          <font-awesome-icon
            :icon="['fas', 'circle-check']"
            class="mx-2 text-green-400"
          />
          <font-awesome-icon
            :icon="['fas', 'circle-xmark']"
            class="text-red-400"
          />
        </div>
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Armação Arredondada'" />
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Armação Quadrada'" />
      </div>
    </div>

    <div class="grid grid-cols-3 gap-5 mt-20">
      <div class="col-span-3">
        <div class="flex items-center">
          <span class="text-zinc-700 text-lg">Qual Genero da armação?</span>
          <font-awesome-icon
            :icon="['fas', 'circle-check']"
            class="mx-2 text-green-400"
          />
          <font-awesome-icon
            :icon="['fas', 'circle-xmark']"
            class="text-red-400"
          />
        </div>
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Masculino'" />
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Feminino'" />
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Unisex'" />
      </div>
    </div>

    <div class="grid grid-cols-4 gap-5 mt-20">
      <div class="col-span-4">
        <div class="flex items-center">
          <span class="text-zinc-700 text-lg"
            >Alguma Preferencia de Lentes?</span
          >
          <font-awesome-icon
            :icon="['fas', 'circle-check']"
            class="mx-2 text-green-400"
          />
          <font-awesome-icon
            :icon="['fas', 'circle-xmark']"
            class="text-red-400"
          />
        </div>
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Anti Reflexo'" />
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Fotocromática'" />
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Anti LedAzul'" />
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Fotocromática + Anti LedAzul'" />
      </div>
    </div>

    <RequestDragRecipe />
  </div>
</template>

<script setup lang="ts">
import { useNewAuctionRequest } from "~/stores/new-auction-request";

const store = useNewAuctionRequest();
</script>

<style lang="scss" scoped></style>
