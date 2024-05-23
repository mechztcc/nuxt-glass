<template>
  <div class="relative">
    <img src="~assets/imgs/banner2.jpg" alt="" class="w-full" />
    <font-awesome-icon :icon="['fas', 'circle-chevron-left']" :size="'2xl'" class="absolute left-1 top-1/2 text-zinc-50 cursor-pointer" />
    <font-awesome-icon :icon="['fas', 'circle-chevron-right']" :size="'2xl'" class="absolute right-1 top-1/2 text-zinc-50 cursor-pointer" />

    <div class="flex justify-center items-center w-full absolute bottom-1">
      <font-awesome-icon :icon="['fas', 'circle']" class="text-zinc-50 cursor-pointer" />
      <font-awesome-icon :icon="['fas', 'circle']" :size="'xl'" class="mx-1 text-zinc-50 cursor-pointer" />
      <font-awesome-icon :icon="['fas', 'circle']" class="text-zinc-50 cursor-pointer" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
