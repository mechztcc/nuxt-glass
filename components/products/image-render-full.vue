<template>
  <div class="flex flex-col">
    <div class="flex justify-end mb-2">
      <font-awesome-icon :icon="['far', 'circle-xmark']" :size="'2x'" class="text-zinc-500 dark:text-teal-400 cursor-pointer" @click="onClose()" />
    </div>
    <div class="flex overflow-scroll" id="image">
      <img class="rounded-xl shadow-md img hover:cursor-zoom-in" @mousemove="onHover($event)" :src="src" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useMouse } from '@vueuse/core';

  const { x, y, sourceType } = useMouse();

  defineProps({
    src: { type: String, required: true },
  });

  const emits = defineEmits(['close']);

  function onClose() {
    emits('close', true);
  }

  function onHover(event: any) {
    const target = {
      height: event.srcElement.clientHeight,
      width: event.srcElement.clientWidth,
    };

    const container = document.getElementById('image');
  }
</script>

<style scoped>
  ::-webkit-scrollbar {
    display: none;
  }
  .img:hover {
    transform: scale(150%);
  }

  img {
    object-fit: cover;
  }
</style>
