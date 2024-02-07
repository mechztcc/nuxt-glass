<template>
  <div class="grid grid-cols-3 mx-10 md:mx-20 py-20 gap-20">
    <div class="col-span-3">
      <div class="flex justify-center">
        <font-awesome-icon :icon="['fas', 'trophy']" :size="'3x'"/>
      </div>
      <h1 class="text-6xl text-center mt-5">Planos na sua medida</h1>
      <h1 class="text-2xl text-center">
        Escolha um plano que atende suas necessidades, cancele sempre que
        quiser!
      </h1>
    </div>
    <div class="col-span-1" v-for="(item, index) in 3" :key="index">
      <HomePlanCard />
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
img {
  max-width: 300px;
}
</style>
