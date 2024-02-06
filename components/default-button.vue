<template>
  <NuxtLink :to="to">
    <button
      type="button"
      :class="{ 'bg-zinc-900 text-white w-full hover:bg-zinc-950 hover:text-green-400': fill }"
      class="px-3 py-2 hover:text-white hover:bg-zinc-900 relative"
    >
      <slot></slot>
      <span class="text-lg"> {{ label }}</span>
    </button>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String },
  fill: { type: Boolean, default: false },
  to: { type: String, default: "", required: false },
});
</script>

<style lang="scss" scoped></style>
