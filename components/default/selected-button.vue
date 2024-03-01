<template>
  <div
    class="border p-5 cursor-pointer bg-zinc-50 trans"
    :class="
      isSelected ? 'border-2 border-zinc-900 text-zinc-900 rounded-xl' : ''
    "
    @click="onSelect()"
  >
    <font-awesome-icon
      :icon="isSelected ? ['fas', 'square-check'] : ['far', 'square']"
      :size="'lg'"
      class="text-zinc-900"
    />
    <h1>{{ label }}</h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String, required: true },
  id: { type: Number, required: false, default: 0 }
});

const emit = defineEmits(["selected"]);
const selected = () => {
  emit("selected", {
    id: props.id,
    label: props.label,
    selected: isSelected.value,
  });
};

const isSelected = ref(false);
function onSelect() {
  isSelected.value = !isSelected.value;
  selected();
}
</script>

<style lang="scss" scoped></style>
