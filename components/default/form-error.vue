<template>
  <div class="bg-red-200 rounded-full px-2 mt-2 text-red-600 justify-center flex items-center">
    <font-awesome-icon :icon="['far', 'circle-xmark']" />
    <ErrorMessage :name="name" class="mx-2" />
  </div>
</template>

<script setup lang="ts">
import { ErrorMessage } from 'vee-validate';

defineProps({
  name: { type: String, required: true },
});
</script>

<style lang="scss" scoped></style>
