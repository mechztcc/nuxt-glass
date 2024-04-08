<template>
  <NuxtLayout :name="'admin'">
    <span class="text-xl font-bold">Aguardando seu lance</span>
    <div class="grid grid-cols-1 md:grid-cols-3 mb-10">
      <DashboardCardAvailableOffer v-for="(item, index) in 5" :key="index" />
    </div>
  </NuxtLayout>
</template>

<script setup></script>

<style lang="scss" scoped></style>
