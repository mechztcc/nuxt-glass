<template>
  <div class="flex justify-center items-center mb-20">
    <template v-for="(item, _) in items" :key="index">
      <div
        class="flex flex-col items-center cursor-pointer"
        @click="store.onSetStep(item.step)"
      >
        <div
          :class="[
            'flex items-center justify-center w-10 h-10 rounded-full trans',
            store.step > item.step ? 'bg-green-400' : 'bg-zinc-300',
          ]"
        >
          <span v-if="store.step <= item.step">{{ item.step }}</span>
          <font-awesome-icon
            class="text-white"
            :icon="['fas', 'check']"
            v-if="store.step > item.step"
          />
        </div>
        <div class="text-center mt-2">{{ item.label }}</div>
      </div>
      <div :class="['h-2 w-16 mb-7 trans', item.step >= store.step ? 'bg-gray-300' : 'bg-green-400']" v-if="item.step !== 5"></div>
    </template>
  </div>
</template>

<script setup lang="ts">
const store = useNewAuctionRequest();

const items = [
  {
    step: 1,
    label: "Tipo do Pedido",
  },
  {
    step: 2,
    label: "Detalhes do Pedido",
  },
  {
    step: 3,
    label: "Região de Busca",
  },
  {
    step: 4,
    label: "Forma de Pagamento",
  },
  {
    step: 5,
    label: "Retirada do Produto",
  },
];
</script>

<style lang="scss" scoped></style>
