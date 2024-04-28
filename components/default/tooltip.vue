<template>
  <span class="tooltip" :data-tooltip="tooltip">
    <font-awesome-icon :icon="['far', 'circle-question']" class="dark:text-zinc-50 mx-2" />
  </span>
</template>

<script setup lang="ts">
  defineProps({
    tooltip: { type: String, required: true },
  });
</script>

<style scoped>
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
</style>
