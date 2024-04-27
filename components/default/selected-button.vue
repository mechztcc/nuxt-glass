<template>
  <div
    class="p-5 cursor-pointer bg-zinc-50 trans dark:bg-zinc-800 dark:text-zinc-50 border-2"
    :class="isSelected ? 'border-2 border-zinc-900 dark:border-teal-400 dark:bg-zinc-900 text-zinc-900 rounded-xl' : ''"
    @click="onSelect()"
  >
    <font-awesome-icon :icon="['fas', 'xmark']" class="text-zinc-900 dark:text-zinc-50" v-if="disabled" />
    <font-awesome-icon :icon="isSelected ? ['fas', 'square-check'] : ['far', 'square']" :size="'lg'" class="text-zinc-900 dark:text-zinc-50" v-if="!disabled"  />
    <h1>{{ label }}</h1>
  </div>

</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String, required: true },
  id: { type: Number, required: false, default: 0 },
  disabled: { type: Boolean, required: false, default: false },
  checked: { type: Boolean, required: false, default: false }
});

const emit = defineEmits(['selected']);
const selected = () => {
  emit('selected', {
    id: props.id,
    label: props.label,
    selected: isSelected.value,
  });
};

const isSelected = ref(props.checked);
function onSelect() {
  isSelected.value = !isSelected.value;
  selected();
}

watch(() => props.checked, () => {
  isSelected.value = props.checked;  
})
</script>

<style lang="scss" scoped></style>
