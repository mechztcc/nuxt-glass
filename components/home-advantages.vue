<template>
  <div
    class="flex flex-col text-start justify-between items-start p-5 h-full bg-zinc-50"
  >
    <slot></slot>
    <h1 class="text-2xl">{{ title }}</h1>
    <span class="text-zinc-700 text-lg">
      {{ subtitle }}
    </span>
    <div class="flex items-center justify-end w-full mt-2">
      <div class="flex w-fit items-center hover:bg-zinc-900 hover:text-white text-zinc-700 px-2 py-1">
        <font-awesome-icon :icon="['fas', 'square-arrow-up-right']" />
        <span class="mx-2 cursor-pointer">saber mais</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
});
</script>

<style lang="css" scoped>
img {
  min-width: 200px;
  min-height: 200px;
  max-width: 200px;
  max-height: 200px;
}
</style>
