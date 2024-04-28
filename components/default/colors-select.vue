<template>
  <div class="flex">
    <div
      :class="['mx-1 my-1 cursor-pointer w-5 h-5 rounded-lg hover:border-2 hover:border-zinc-50 bg-', `bg-${item}`, selected == item ? 'border-4': '']"
      v-for="(item, index) in colors"
      :key="index"
      @click="change(item)"
    ></div>
  </div>
</template>

<script setup lang="ts">
  const colors = ref([
    'teal-400',
    'red-400',
    'blue-400',
    'zinc-50',
    'zinc-400',
    'yellow-400',
    'green-400',
    'teal-400',
    'red-400',
    'blue-400',
    'zinc-900',
    'yellow-400',
    'green-400',
  ]);

  const selected = ref('');

  const emits = defineEmits(['pressed']);
  function change(color: string) {
    selected.value = color;
    emits('pressed', color);
  }
</script>

<style scoped>
  .flex {
    max-width: 250px;
    flex-wrap: wrap;
  }
</style>
