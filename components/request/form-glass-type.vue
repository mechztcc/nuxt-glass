<template>
  <div class="flex flex-col justify-start">
    <font-awesome-icon :icon="['fas', 'bullhorn']" :size="'2x'" class="mb-2" />
    <h1 class="text-3xl text-center">Tipo do Pedido!</h1>
    <span class="text-lg text-zinc-700 text-center">
      Escolha entre Óculos de sol, de gráu ou lentes de contato
    </span>

    <div class="grid grid-cols-3 mt-10 gap-5">
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Óculos de sol'" />
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Óculos de gráu'" />
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Lentes de contato'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IDefaultSelectedButtonProps } from "~/interfaces/default-selected-button-props";

const selecteds = ref([]);
const hasItem = computed(() => {
  const labels = ["Óculos de sol", "Óculos de gráu", "Lentes de contato"];
  return (
    selecteds.value.filter((el: IDefaultSelectedButtonProps) =>
      labels.includes(el.label)
    ).length > 0
  );
});
</script>

<style lang="scss" scoped></style>
