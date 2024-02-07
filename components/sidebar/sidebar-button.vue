<template>
  <NuxtLink :to="to">
    <button
      class="trans rounded hover:bg-zinc-800 text-zinc-50 hover:text-green-400 p-3 px-5 mt-2 flex w-full items-center justify-start"
    >
      <slot></slot>
      <span class="mx-2" v-if="!isHide">{{ label }}</span>
    </button>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  label: { type: String, required: false },
  to: { type: String, required: false },
  isHide: { type: Boolean, required: true, default: false },
});
</script>

<style lang="scss" scoped></style>
