<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center absolute top-0 bg">
    <font-awesome-icon :icon="['fas', 'circle-notch']" :size="'3x'" />
    <h3 class="mt-2">Buscando informações...</h3>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="css" scoped>
.bg {
  background-color: rgba(101, 104, 112, 0.692);
}
</style>
