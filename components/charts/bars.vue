<template>
  <div class="bg-zinc-50 p-5 rounded h-full">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { Bar } from "vue-chartjs";

const props = defineProps({
  title: { type: String, required: true },
  labels: { type: Array, required: true },
  data: { type: Array, required: true, default: [] },
});

const chartData = ref({
  labels: props.labels,
  datasets: [
    {
      label: props.title,
      backgroundColor: "#3f3f46",
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
