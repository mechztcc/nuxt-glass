<template>
  <div class="flex flex-col justify-start h-screen">
    <font-awesome-icon :icon="['fas', 'location-dot']" :size="'2x'" class="mb-2" />
    <h1 class="text-3xl text-center">Retirada do Produto!</h1>
    <span class="text-lg text-zinc-700 text-center">
      Nos conte como você deseja receber seu Produto
    </span>

    <div class="grid grid-cols-3 mt-10 gap-5">
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Retirar no local'" />
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Receber em casa'" />
      </div>
    </div>

    <span class="text-zinc-500 mt-10">Endereço padrão</span>
    <div class="flex items-center">
      <font-awesome-icon :icon="['fas', 'location-dot']" />
      <span class="ml-2">Av. Inhamã n9, Cruz de rebouças - PE</span>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
