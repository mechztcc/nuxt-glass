<template>
  <div class="flex flex-col items-center mt-10">
    <h1 class="text-3xl text-center">Bem vindo!</h1>
    <span class="text-lg text-zinc-700 text-center">
      Qual tipo de usuário você é?
    </span>
  </div>
  <div class="flex w-full justify-around mt-10">
    <DefaultSelectedButton
      :label="'Sou vendedor e quero VENDER na plataforma'"
    />
    <DefaultSelectedButton
      :label="'Sou comprador e desejo COMPRAR na plataforma'"
    />
  </div>
  <div class="flex mt-10 justify-center ">
    <DefaultButton :label="'AVANÇAR'"  :fill="true" />
  </div>

</template>

<script setup></script>

<style lang="scss" scoped></style>
