<template>
  <button
    :class="{ 'bg-yellow-500 text-white': fill }"
    class="px-3 py-2 hover:text-white hover:bg-yellow-500  text-zinc-700 relative"
  >
    <slot></slot>
    <span class="text-lg"> {{ label }}</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String },
  fill: { type: Boolean, default: false },
});
</script>

<style lang="scss" scoped></style>
