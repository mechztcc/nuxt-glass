<template>
  <div
    class="border p-5 cursor-pointer bg-zinc-50"
    :class="isSelected ? 'border-2 border-zinc-900 text-zinc-900 rounded-xl' : ''"
    @click="onSelect()"
  >
    <font-awesome-icon
      :icon="isSelected ? ['fas','square-check'] : ['far', 'square']"
      :size="'lg'"
      class="text-zinc-900"
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
  isSelected.value = !isSelected.value;
}
</script>

<style lang="scss" scoped></style>
