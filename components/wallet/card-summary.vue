<template>
  <div class="p-5 rounded bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-50">
    <span class="text-zinc-700 dark:text-zinc-50">{{ label }}</span>
    <h1 class="text-3xl mt-1 font-semibold">{{ value }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: { type: String, required: true },
  value: { type: String, required: true },
});
</script>

<style lang="scss" scoped></style>
