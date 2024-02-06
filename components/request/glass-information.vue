<template>
  <div class="flex flex-col">
    <font-awesome-icon :icon="['fas', 'bullhorn']" :size="'2x'" class="mb-2"/>
    <h1 class="text-3xl text-center ">Novo Pedido!</h1>
    <span class="text-lg text-zinc-700 text-center">
      Nos conte mais sobre sua escolha de óculos
    </span>
    <div class="grid grid-cols-3 gap-5 mt-20">
      <div class="col-span-3">
        <span class="text-zinc-700 text-lg">
          Qual tipo de armação você deseja?
        </span>
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
        <span class="text-zinc-700 text-lg">Qual Genero da armação?</span>
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

    <div class="grid grid-cols-3 mt-20 gap-5">
      <div class="col-span-1 col-start-3">
        <DefaultButton :label="'Avançar'" :fill="true" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNewAuctionRequest } from "~/stores/new-auction-request";

const store = useNewAuctionRequest();
</script>

<style lang="scss" scoped></style>
