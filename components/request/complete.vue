<template>
  <div class="flex flex-col text-center">
    <h1 class="text-teal-400 text-3xl">Parabéns! Seu Pedido foi realizado com sucesso</h1>

    <div class="grid grid-cols-5 mt-5">
      <div class="col-span-1 col-start-3">
        <DefaultButton :label="'Acompanhar Pedido'" :fill="true"  @pressed="onNavigate"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const store = useNewAuctionRequest();
  const router = useRouter()

  function onNavigate() {
    router.push('/customer/offers');
    store.$reset();
  }
  
</script>

<style lang="scss" scoped></style>
