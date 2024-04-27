<template>
  <div class="flex justify-center items-center mt-20">
    <template v-for="(item, index) in steps" :key="index">
      <div class="flex flex-col items-center cursor-pointer" @click="pressed(item)">
        <div :class="['flex items-center justify-center w-10 h-10 rounded-full trans', actualStep > item.position ? 'bg-teal-400' : 'bg-zinc-300']">
          <span v-if="actualStep <= item.position">{{ item.position }}</span>
          <font-awesome-icon class="text-white" :icon="['fas', 'check']" v-if="actualStep > item.position" />
        </div>
        <div class="text-center mt-2 dark:text-zinc-50">{{ item.label }}</div>
      </div>
      <div :class="['h-2 w-16 mb-7 trans', item.position >= actualStep ? 'bg-gray-300' : 'bg-teal-400']" v-if="item.position !== steps.length"></div>
    </template>
  </div>
</template>

<script setup lang="ts">
  interface Step {
    position: number;
    label: string;
  }
  defineProps({
    steps: { type: Array as () => Step[], required: true },
  });

  const actualStep = ref(1);

  const emit = defineEmits(['change', 'hover']);

  function pressed(step: Step) {
    actualStep.value = step.position;
    emit('change', actualStep);
  }
</script>

<style scoped></style>
