<template>
  <NuxtLayout :name="'admin'">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div class="col-span-1 md:col-span-1">
        <WalletCardSummary :label="'Total Vendido'" :value="'R$ 2,900.00'" />
      </div>
      <div class="col-span-1 md:col-span-1">
        <WalletCardSummary :label="'Vendas Realizadas'" :value="'28'" />
      </div>

      <div class="col-span-1">
        <ChartsDonut
          :labels="binds.labels"
          :data="binds.data"
          :title="binds.title"
        />
      </div>

      <div class="col-span-1">
        <ChartsDonut
          :labels="goat.labels"
          :data="goat.data"
          :title="goat.title"
        />
      </div>

      <div class="col-span-2">
        <ChartsBars
          :labels="lastWeek.labels"
          :title="lastWeek.title"
          :data="lastWeek.data"
        />
      </div>
      <div class="col-span-1 md:col-span-3 md:col-start-1 my-5">
        <h1 class="text-2xl">Transações Recentes</h1>
        <WalletRecentSalles v-for="(item, index) in 5" :key="index" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const lastMonth = {
  title: "Vendas do ultimo mês R$",
  labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
  data: [500, 600, 430, 760],
};

const lastWeek = {
  title: "Vendas da ultima semana R$",
  labels: [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
    "Domingo",
  ],
  data: [500, 600, 430, 0, 700, 200, 0],
};

const goat = {
  title: "Mais Vendidos",
  labels: ["Oculos de sol", "Oculos de grau", "Lentes de contato"],
  data: [500, 600, 430],
};

const binds = {
  title: "Lances Realizados X Vendas Concluídas",
  labels: ["Realizados", "Concluídos"],
  data: [50, 20],
};
</script>

<style lang="scss" scoped></style>
