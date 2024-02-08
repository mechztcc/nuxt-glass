<template>
  <div :class="['p-1 px-2 w-fit rounded', style]">
    <slot></slot>
    {{ label }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: { type: String, required: false, default: "Aguardando" },
  style: { type: String, required: false, default: "bg-teal-400 text-white" },
});
</script>

<style lang="scss" scoped></style>
