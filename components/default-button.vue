<template>
  <NuxtLink :to="to" @click="pressed()">
    <button
      type="button"
      :class="['p-2 hover:bg-zinc-900 hover:text-green-400 rounded trans', fill ? 'bg-zinc-900 w-full text-white': '']"
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

const emit = defineEmits(["pressed"]);

const pressed = () => {
  emit("pressed", true);
};
</script>

<style lang="scss" scoped></style>
