<template>
  <div class="flex flex-col h-full justify-center">
    <div class="flex justify-center flex-col mt-5">
      <RequestStepItem
        :step="'1'"
        :title="'Tipo de Óculos'"
        :subtitle="'Escolha entre Óculos de sol, de gráu ou lentes de contato'"
      />
      <RequestStepItem
        :step="'2'"
        :title="'Informações do Óculos'"
        :subtitle="'Infome quais tipos de armações, modelos etc.'"
      />
      <RequestStepItem
        :step="'3'"
        :title="'Escolha a Região'"
        :subtitle="'Nos diga de onde você pretente receber ofertas'"
      />
      <RequestStepItem
        :step="'4'"
        :title="'Forma de Pagamento'"
        :subtitle="'Nos conte como você deseja realizar o pagamento'"
      />
      <RequestStepItem
        :step="'5'"
        :title="'Retirada dos Óculos'"
        :subtitle="'Nos conte como você deseja receber seus Óculos'"
      />
      <RequestStepItem
        :step="'5'"
        :title="'Acompanhar Pedido'"
        :subtitle="'Acompanhe seu pedido'"
      />
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
