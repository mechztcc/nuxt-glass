<template>
  <div class="flex flex-col justify-start h-screen">
    <font-awesome-icon :icon="['fas', 'earth-americas']" :size="'2x'" class="mb-2"/>
    <h1 class="text-3xl text-center">Novo Pedido!</h1>
    <span class="text-lg text-zinc-700 text-center">
      Escolha à região onde seu pedido ficará disponível
    </span>

    <div class="grid grid-cols-3 mt-10 gap-5">
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Em todo Pernambuco'" />
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Apenas minha Recife'" />
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Escolher mais de uma Local'" />
      </div>
    </div>

    <div class="grid grid-cols-3 mt-10 gap-5">
      <div class="col-span-3">
        <RequestFormCustomLocation />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
