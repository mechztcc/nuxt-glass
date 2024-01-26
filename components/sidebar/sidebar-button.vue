<template>
  <button
    class="hover:bg-zinc-900 text-zinc-700 hover:text-white p-3  px-5 mt-2 flex items-center justify-start"
  >
    <slot></slot>
    <span class="mx-2" v-if="!isHide">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: { type: String, required: true },
  isHide: { type: Boolean, required: true, default: false },
});
</script>

<style lang="scss" scoped></style>
