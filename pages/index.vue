<template>
  <NuxtLayout :name="'default'">
    <Header />
    <div class="w-full h-full">
      <img src="~assets/imgs/wave-1.svg" alt="" />
    </div>
    <Informative />
    <div class="w-full h-full">
      <img src="~assets/imgs/wave.svg" alt="" />
    </div>
    <HomePlansContainer />
    <Footer />
  </NuxtLayout>
</template>

<script setup></script>

<style lang="scss" scoped></style>
