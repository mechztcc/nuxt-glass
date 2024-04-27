<template>
  <div class="flex flex-col items-center mt-10">
    <Logo />
    <h1 class="text-3xl text-center mt-2">Bem vindo!</h1>
    <span class="text-lg text-zinc-700 text-center"> Qual tipo de usuário você é? </span>
  </div>
  <div class="flex w-full justify-around mt-10">
    <DefaultSelectedButton @selected="store.onSetProfile('OWNER')" :label="'Sou vendedor e quero VENDER na plataforma'" :checked="store.payload.profile == 'OWNER'" />
    <DefaultSelectedButton @selected="store.onSetProfile('CUSTOMER')" :label="'Sou comprador e desejo COMPRAR na plataforma'" :checked="store.payload.profile == 'CUSTOMER'" />
  </div>
  <div class="flex mt-10 justify-center" v-if="store.payload.profile">
    <DefaultButton :label="'AVANÇAR'" :fill="true" @pressed="store.onHandleStep('next')" />
  </div>
</template>

<script setup lang="ts">
const store = useCreateAccount();
</script>

<style lang="scss" scoped></style>
