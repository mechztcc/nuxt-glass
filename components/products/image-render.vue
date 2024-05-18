<template>
  <div :class="['flex flex-col items-end relative cursor-pointer rounded-lg']" @mouseenter="onEnter()" @mouseleave="onLeave()">
    <div class="absolute top-1/2 w-full" v-if="hasIcon">
      <div class="flex justify-center">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" :size="'2x'" class="text-teal-400" />
      </div>
    </div>
    <font-awesome-icon :icon="['fas', 'trash']" class="mb-3 text-red-400 cursor-pointer" @click="remove()" />
    <img :src="imageURL" alt="" :class="['w-full h-32 rounded-xl hover:opacity-55', selected ? ' shadow-lg' : '']" @click="select()" />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    imageURL: { type: String, required: true },
    index: { type: Number, required: true },
    selected: { type: Boolean, required: false },
  });

  const hasIcon = ref(false);

  const emits = defineEmits(['remove', 'select']);

  function remove() {
    emits('remove', props.index);
  }

  function select() {
    emits('select', props.index);
  }

  function onEnter() {
    hasIcon.value = true;
  }

  function onLeave() {
    hasIcon.value = false;
  }
</script>

<style scoped>
  img {
    object-fit: cover;
  }
</style>
