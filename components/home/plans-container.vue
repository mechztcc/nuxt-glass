<template>
  <div class="grid grid-cols-3 mx-10 md:mx-20 py-20 gap-20">
    <div class="col-span-3">
      <div class="flex justify-center">
        <font-awesome-icon :icon="['fas', 'ruler-combined']" :size="'3x'" />
      </div>
      <h1 class="text-6xl text-center mt-5">Planos na sua medida</h1>
      <h1 class="text-2xl text-center">
        Escolha um plano que atende suas necessidades, cancele sempre que
        quiser!
      </h1>
    </div>
    <div class="col-span-1" v-for="(item, index) in plans" :key="index">
      <HomePlanCard :title="item">
        <img src="~assets/imgs/img1.png" alt="" style="z-index: 1" v-if="index == 0"/>
        <img src="~assets/imgs/img2.png" alt="" style="z-index: 1" v-if="index == 1"/>
        <img src="~assets/imgs/img3.png" alt="" style="z-index: 1" v-if="index == 2"/>
      </HomePlanCard>
    </div>
  </div>
</template>

<script setup lang="ts">

  const plans = ['Plano Gratuito', 'Plano Mensal', 'Plano Anual']
</script>

<style lang="css" scoped>
img {
  max-width: 300px;
}
</style>
