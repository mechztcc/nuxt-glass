<template>
  <div class="flex flex-col text-center">
    <h1 class="text-green-400 text-3xl mb-3">
      Parabéns! Seu Acesso foi criado com sucesso
    </h1>
    <DefaultButton
      :label="'Acompanhar Pedido'"
      :to="'/admin/home'"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
