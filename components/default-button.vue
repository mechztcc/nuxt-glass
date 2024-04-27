<template>
  <NuxtLink :to="to" @click="pressed()">
    <button :type="type =='button' ? 'button': 'submit'" :class="['p-2 hover:bg-zinc-900 dark:hover:border-teal-400 border-2 border-zinc-800 hover:text-teal-400 rounded trans', fill ? 'bg-zinc-900 w-full text-white' : '']">
      <slot></slot>
      <span class="text-lg"> {{ label }}</span>
    </button>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String },
  fill: { type: Boolean, default: false },
  to: { type: String, default: '', required: false },
  type: {
    type: String,
  },
});

const emit = defineEmits(['pressed']);

const pressed = () => {
  emit('pressed', true);
};
</script>

<style lang="scss" scoped></style>
