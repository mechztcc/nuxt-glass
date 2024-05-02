<template>
  <div class="flex">
    <div
      :data-tooltip="item.name"
      :class="[
        'mx-1 my-1 cursor-pointer w-5 h-5  rounded-lg hover:border-2 hover:border-zinc-50 tooltip',
        `bg-${item.color}`,
        selected == item.color ? 'border-4' : '',
      ]"
      v-for="(item, index) in colors"
      :key="index"
      @click="change(item.color)"
    ></div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    checked: { required: false },
  });

  const colors = ref([
    { color: 'teal-400', name: 'Azul celeste' },
    { color: 'red-400', name: 'Vermelho' },
    { color: 'zinc-50', name: 'Branco' },
    { color: 'zinc-400', name: 'Cinza' },
    { color: 'yellow-400', name: 'Amarelo' },
    { color: 'green-400', name: 'Verde' },
    { color: 'pink-400', name: 'Rosa' },
    { color: 'purple-400', name: 'Roxo' },
  ]);

  const selected = ref(props.checked);

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

  .tooltip {
    position: relative;
    cursor: pointer;
  }

  .tooltip::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px 10px;
    background-color: black;
    color: white;
    font-size: 12px;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
    widows: 300px;
  }

  .tooltip:hover::after {
    opacity: 1;
  }

  .bg-pink-400 {
    background-color: #ec4899;
  }
  .bg-purple-400 {
    background-color: #8b5cf6;
  }
</style>
