<template>
  <div class="flex items-center rounded-xl border-2 px-3 py-3 mt-5">
    <font-awesome-icon :icon="['fas', 'image']" :size="'lg'" class="h-5 w-5 py-2 px-2 rounded-full bg-teal-400 text-white" />
    <div class="flex flex-col w-full">
      <div class="flex justify-between items-center">
        <span class="mx-2 text-lg font-bold">Filename.jpg</span>
        <font-awesome-icon :icon="['fas', 'trash']" class="text-red-400 px-2 py-2 rounded-full bg-red-100 cursor-pointer" />
      </div>
      <small class="mx-2 text-sm">3 mb</small>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
