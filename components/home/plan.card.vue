<template>
  <div class="flex flex-col bg-zinc-50 p-10 hover:mt-0 mt-5 hover:shadow-lg rounded">
    <Logo />
    <div class="flex relative items-center justify-center">
      <img src="~assets/imgs/img2.png" alt="" style="z-index: 1" />
    </div>
    <span class="text-5xl font-semibold mt-2">
      Plano Gratuito
    </span>

    <hr class="my-5" />
    <div class="flex items-center mb-3">
      <font-awesome-icon :icon="['fas', 'check']" class="text-green-400 mr-5" />
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

<script setup></script>

<style lang="scss" scoped></style>
