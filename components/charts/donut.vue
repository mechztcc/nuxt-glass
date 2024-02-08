<template>
  <div class="bg-zinc-50 rounded text-center pt-3">
    <span class="text-xl">{{ title }}</span>
  </div>
  <div class="bg-zinc-50 p-5 rounded">
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
      backgroundColor: ["#4ade80", "#c084fc", "#f472b6"],
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
