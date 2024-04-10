<template>
  <div class="flex flex-col">
    <div class="rounded p-5 flex items-center bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-50 mt-3">
      <Badge :label="'PIX'">
        <font-awesome-icon :icon="['fab', 'pix']" />
      </Badge>
      <div class="flex flex-col mx-5 dark:text-zinc-50 text-zinc-700">
        <span class="text-lg font-semibold">Realizada em</span>
        <span class="">22/10/2023 10:48</span>
      </div>
      <div class="flex flex-col mx-5 dark:text-zinc-50 text-zinc-700">
        <span class="text-lg font-semibold">Valor</span>
        <span class="">R$ 599,00</span>
      </div>
      <div class="flex flex-col mx-5 dark:text-zinc-50 text-zinc-700">
        <span class="text-lg font-semibold">Tipo</span>
        <span class="">Óculos de sol </span>
      </div>
      <div class="flex flex-col mx-5 dark:text-zinc-50 text-zinc-700">
        <span class="text-lg font-semibold">Cor</span>
        <font-awesome-icon :icon="['fas', 'square']" class="text-green-800" />
      </div>
      <div class="flex flex-col mx-5 dark:text-zinc-50 text-zinc-700">
        <span class="text-lg font-semibold">Exame</span>
        <span class="">Não informado</span>
      </div>

      <div class="flex flex-col mx-5 dark:text-zinc-50 text-zinc-700">
        <span class="text-lg font-semibold">Status</span>
        <Badge :label="'Andamento'" :style="'bg-yellow-400 text-white'"></Badge>
      </div>
      <div class="flex flex-col mx-5 dark:text-zinc-50 text-zinc-700">
        <span class="text-lg font-semibold">Cliente</span>
        <span class="">Alberto Paiva</span>
      </div>
      <div class="flex flex-col mx-5 dark:text-zinc-50 text-zinc-700">
        <span class="text-lg font-semibold">Entrega</span>
        <span class="">Av. Estrada de inhamã n9 53625-816</span>
      </div>
      <div class="flex flex-col mx-5 dark:text-zinc-50 text-zinc-700">
        <span class="text-lg font-semibold">Estimativa de entrega</span>
        <span class="">25/10/2023</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const enter = ref(true);
</script>

<style lang="scss" scoped></style>
