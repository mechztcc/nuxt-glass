<template>
  <div
    class="flex flex-col bg-zinc-50 p-10 hover:mt-0 mt-5 hover:shadow-lg rounded trans"
  >
    <div class="flex">
      <slot></slot>
    </div>
    <span class="text-3xl font-semibold mt-2 text-start"> {{ title }} </span>
    <span class="text-teal-400 text-6xl font-bold text-start">R$ 0,00</span>
    <span class="text-end text-lg">/ desconto de 0%</span>

    <hr class="my-5" />
    <div class="flex items-center mb-3">
      <font-awesome-icon :icon="['fas', 'check']" class="text-teal-400 mr-5" />
      <span class="text-xl">Duração ILimitada</span>
    </div>
    <div class="flex items-center mb-3">
      <font-awesome-icon :icon="['fas', 'xmark']" class="mr-5 text-red-400" />
      <span class="text-xl">Catalogo ILimitado</span>
    </div>
    <div class="flex items-center mb-3">
      <font-awesome-icon :icon="['fas', 'xmark']" class="mr-5 text-red-400" />
      <span class="text-xl">Notificação de novos pedidos</span>
    </div>
    <div class="flex items-center mb-3">
      <font-awesome-icon :icon="['fas', 'xmark']" class="mr-5 text-red-400" />
      <span class="text-xl">Dashboard de Vendas</span>
    </div>

    <div class="flex w-full my-3">
      <DefaultButton :label="'ASSINAR'" class="w-full" :fill="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: false },
});
</script>

<style lang="css" scoped>
img {
  width: 200px;
}
</style>
