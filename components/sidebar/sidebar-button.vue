<template>
  <NuxtLink :to="to">
    <button
      class="rounded hover:bg-zinc-800 text-zinc-50 hover:text-teal-400 p-3 px-5 mt-2 flex w-full items-center justify-start"
      @click="pressed()"
    >
      <slot class=""></slot>
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

  const emit = defineEmits(['pressed']);
  const pressed = () => {
    emit('pressed', true);
  };
</script>

<style lang="scss" scoped></style>
