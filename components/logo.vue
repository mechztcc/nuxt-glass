<template>
  <div :class="['flex', color]">
    <font-awesome-icon :icon="['fas', 'diamond']" />
    <font-awesome-icon :icon="['fas', 'diamond']" :size="'2x'" class="" />
    <font-awesome-icon :icon="['fas', 'diamond']" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  color: { type: String, required: false },
});
</script>

<style lang="scss" scoped></style>
