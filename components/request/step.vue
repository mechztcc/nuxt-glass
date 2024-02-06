<template>
  <div class="flex flex-col h-full justify-center">
    <h1 class="text-3xl mb-10 font-semibold">Novo Pedido</h1>
    <div class="flex justify-center flex-col mt-5">
      <RequestStepItem :step="'1'" :title="'Tipo de Óculos'" :subtitle="'Escolha entre Óculos de sol, de gráu ou lentes de contato'" />
      <RequestStepItem :step="'2'" :title="'Informações do Óculos'" :subtitle="'Infome quais tipos de armações, modelos etc.'" />
      <RequestStepItem :step="'3'" :title="'Escolha a Região'" :subtitle="'Nos diga de onde você pretente receber ofertas'" />
      <NuxtLink
        :to="'/customer/offers'"
        class="flex items-center justify-end mt-10 cursor-pointer"
      >
        <div
          class="flex items-center w-fit hover:bg-zinc-900 px-2 py-1 hover:text-white"
        >
          <font-awesome-icon :icon="['fas', 'square-arrow-up-right']" />
          <span class="mx-2">VOLTAR</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useNewAuctionRequest();
</script>

<style lang="scss" scoped></style>
u
