<template>
  <NuxtLayout :name="'admin'">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div class="col-span-1 md:col-span-1">
        <WalletCardSummary :label="'Saldo Disponível'" :value="'R$ 2,900.00'" />
      </div>
      <div class="col-span-1 md:col-span-1">
        <WalletCardSummary :label="'Vendas Realizadas'" :value="'28'" />
      </div>

      <div class="col-span-1 md:col-span-3 md:col-start-1 my-5">
        <h1 class="text-2xl ">Transações Recentes</h1>
        <WalletRecentSalles  v-for="(item, index) in 5" :key="index"/>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup></script>

<style lang="scss" scoped></style>
