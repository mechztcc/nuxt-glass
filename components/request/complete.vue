<template>
  <div class="flex flex-col text-center">
    <h1 class="text-green-400 text-3xl">
      Parabéns! Seu Pedido foi realizado com sucesso
    </h1>

    <div class="grid grid-cols-5 mt-5">
      <div class="col-span-1 col-start-3">
        <DefaultButton :label="'Acompanhar Pedido'" :fill="true" :to="'/customer/offers'"/>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
