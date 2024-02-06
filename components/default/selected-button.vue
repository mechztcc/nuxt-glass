<template>
  <div
    class="border p-5 cursor-pointer hover:shadow-md "
    :class="isSelected ? 'bg-zinc-900 text-white shadow-md  border-none' : ''"
    @click="onSelect()"
  >
    <font-awesome-icon
      :icon="['far', isSelected ? 'square-check' : 'square']"
    />
    <h1>{{ label }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: { type: String, required: true },
});

const isSelected = ref(false);

function onSelect() {
  this.isSelected = !this.isSelected;
}
</script>

<style lang="scss" scoped></style>
