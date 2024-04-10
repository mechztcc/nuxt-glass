<template>
  <div class="bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-50 rounded text-center pt-3">
    <span class="text-xl font-semibold">{{ title }}</span>
  </div>
  <div class="bg-zinc-50 p-5 dark:bg-zinc-900 dark:text-zinc-50 rounded">
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { Doughnut } from "vue-chartjs";

const props = defineProps({
  title: { type: String, required: true },
  labels: { type: Array, required: true },
  data: { type: Array, required: true },
});

const chartData = ref({
  labels: props.labels,
  datasets: [
    {
      backgroundColor: ["#4ade80", "#3f3f46", "#f472b6"],
      data: props.data as [],
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});
</script>

<style lang="scss" scoped></style>
