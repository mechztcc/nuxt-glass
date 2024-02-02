<template>
  <NuxtLayout :name="'admin'">
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div class="col-span-1 md:col-span-1">
        <WalletCardSummary />
      </div>

      <div class="col-span-1 md:col-span-2 md:col-start-1 my-5">
        <h1 class="text-2xl ">Transações Recentes</h1>

        <WalletRecentSalles />
        <WalletRecentSalles />
        <WalletRecentSalles />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup></script>

<style lang="scss" scoped></style>
