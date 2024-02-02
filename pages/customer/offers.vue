<template>
  <NuxtLayout :name="'admin'">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div class="col-span-1 md:col-span-1 lg:col-span-1 lg:col-start-3 mb-10">
        <OffersNewThrow />
      </div>
      <div
        class="col-span-1 md:col-span-1 lg:col-span-1"
        v-for="(item, index) in 5"
        :key="index"
      >
        <OffersCard />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup></script>

<style lang="scss" scoped></style>
