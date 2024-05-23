<template>
  <div class="flex justify-end py-2 mt-5">
    <DefaultButton @pressed="onChange('prev')" class="dark:text-zinc-50" >
      <font-awesome-icon :icon="['fas', 'angle-left']" />
    </DefaultButton>

    <DefaultButton
      class="text-zinc-500 mx-1"
      :fill="selected == index + 1"
      v-for="(item, index) in totalPages"
      :key="index"
      @pressed="onChange('step', index + 1)"
    >
      {{ item }}
    </DefaultButton>

    <DefaultButton class="text-zinc-500 dark:text-zinc-50" @pressed="onChange('next')">
      <font-awesome-icon :icon="['fas', 'angle-right']" />
    </DefaultButton>
  </div>
</template>

<script setup lang="ts">
  import { toRaw } from 'vue';
  const props = defineProps({
    items: { type: Array, required: true, default: [] },
    perPage: { type: Number, default: 0 },
  });

  const selected = ref(1);
  const offset = ref(0);
  const limit = ref(6);

  const totalPages = ref(0);
  totalPages.value = Math.ceil(props.items.length / props.perPage);

  const emits = defineEmits(['pagination']);

  onMounted(() => {
    onChange('step', 1);
  });

  function onChange(type: 'prev' | 'next' | 'step', page?: number) {
    if (type == 'next' && selected.value < totalPages.value) {
      offset.value += 5;
      selected.value++;
    }

    if (type == 'prev' && selected.value > 1) {
      offset.value -= 5;
      selected.value--;
    }

    if (type == 'step' && page) {
      selected.value = page;
      offset.value = selected.value * 5 - 5;
    }

    const paginated = props.items.slice(offset.value, offset.value + limit.value);
    emits('pagination', { items: toRaw(paginated) });
  }
</script>

<style scoped></style>
