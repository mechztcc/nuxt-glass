<template>
  <div class="flex items-center rounded-xl border-2 px-3 py-3 mt-5 dark:bg-zinc-900 dark:text-zinc-50 dark:border-none">
    <font-awesome-icon :icon="['fas', 'image']" :size="'lg'" class="h-5 w-5 py-2 px-2 rounded-full bg-teal-400 text-white" />
    <div class="flex flex-col w-full">
      <div class="flex justify-between items-center">
        <span class="mx-2 text-lg font-bold">{{ file.name }}</span>
        <font-awesome-icon :icon="['fas', 'trash']" class="text-red-400 px-2 py-2 rounded-full bg-red-100 cursor-pointer" @click="onRemove()" />
      </div>
      <small class="mx-2 text-sm">{{ size }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    file: { type: File, required: true },
  });

  const emits = defineEmits(['remove']);

  const size = computed(() => {
    const size = props.file.size;
    if (size < 1024) {
      return size + ' B';
    } else if (size < 1024 * 1024) {
      return (size / 1024).toFixed(2) + ' KB';
    } else if (size < 1024 * 1024 * 1024) {
      return (size / (1024 * 1024)).toFixed(2) + ' MB';
    } else {
      return (size / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
    }
  });

  function onRemove() {
    emits('remove', true);
  }
</script>

<style scoped></style>
