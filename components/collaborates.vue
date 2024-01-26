<template>
  <div class="grid grid-cols-1 bg-zinc-900 px-5 md:px-20 py-20">
    <h1 class="text-6xl text-center text-zinc-50 mb-10">
      Nossos Colaboradores
    </h1>

    <div class="flex overflow-hidden">
      <img
        v-for="(item, index) in 10"
        :key="index"
        class="w-32 rounded mx-5"
        src="https://i.pinimg.com/1200x/2a/ee/54/2aee544a92c1394f4949bac830ad32fa.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
img {
  filter: grayscale(1);
}
</style>
