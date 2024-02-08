<template>
  <div class="grid-cols-1 bg-zinc-900 text-teal-400">
    <div class="flex flex-col items-center mx-10">
      <div class="flex justify-center">
        <font-awesome-icon :icon="['fas', 'gift']" :size="'3x'"/>
      </div>
      <h1 class="text-6xl font-semibold mt-5">O que oferecemos?</h1>
      <span class="text-2xl mt-3">
        Conheça como funciona nosso plano de negócio
      </span>
    </div>
    <InformativeContainer />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="css" scoped></style>
