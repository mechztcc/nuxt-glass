<template>
  <div class="rounded bg-zinc-50 p-5 hover:shadow-md cursor-pointer">
    <div class="flex items-center w-fit p-1 text-white bg-green-400 mb-2 rounded">
      <font-awesome-icon :icon="['fas', 'gem']" class="" />
      <span class="mx-2">Diamante</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
      <div class="col-span-1 md:col-span-1 lg:col-span-4">
        <span class="text-xl">Óticas guaraná</span>
        <div class="flex">
          <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          <font-awesome-icon :icon="['far', 'star']" />
          <font-awesome-icon :icon="['far', 'star']" />
          <span class="mx-2">(584 vendas)</span>
        </div>

        <div class="flex items-center mt-2">
          <font-awesome-icon :icon="['fas', 'location-dot']" />
          <span class="mx-1">Av. Inhamã n9 53625-816</span>
        </div>
        <div class="flex items-center text-green-400">
          <font-awesome-icon :icon="['fab', 'pix']" />
          <span class="mx-1">R$ 599,00</span>
        </div>

        <div class="flex items-center mt-2">
          <font-awesome-icon :icon="['far', 'credit-card']" />
          <span class="text-zinc-700 mx-1">10x de R$ 59,00</span>
        </div>

        <div class="flex items-center">
          <font-awesome-icon :icon="['far', 'calendar']" />
          <span class="text-zinc-700 mx-1">Termina em 10 dias</span>
        </div>
      </div>
      <div class="col-span-1 md:col-span-2 lg:col-span-5 mt-3">
        <div class="flex justify-between">
          <DefaultButton :label="'Recusar oferta'">
            <font-awesome-icon :icon="['fas', 'xmark']" class="mx-2" />
          </DefaultButton>
          <DefaultButton :label="'Falar com vendedor'">
            <font-awesome-icon :icon="['far', 'comment']" class="mx-2" />
          </DefaultButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
img {
  min-height: 60px;
  max-height: 60px;
}
</style>
