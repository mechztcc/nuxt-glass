<template>
  <div
    class="flex flex-col text-start justify-between p-5 h-full bg-zinc-800 text-teal-400 rounded"
  >
    <font-awesome-icon :icon="['fas', 'anchor']" class="p-3 bg-zinc-900 w-fit rounded mb-2"/>
    <h1 class="text-2xl text-start font-semibold">{{ title }}</h1>
    <span class="text-start text-lg">
      {{ subtitle }}
    </span>
    <div class="flex items-center justify-end w-full mt-2">
      <div
        class="flex w-fit items-center hover:bg-zinc-900 hover:text-white px-2 py-1"
      >
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
  min-width: 100px;
  min-height: 100px;
  max-width: 100px;
  max-height: 100px;
}
</style>
