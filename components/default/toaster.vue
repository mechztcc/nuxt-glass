<template>
  <div class="frame">
    <div :class="['flex flex-col justify-center items-center content rounded shadow-xl p-5 py-3 text-center bg-zinc-50']">
      <div class="flex justify-end w-full mb-2">
        <button class="hover:border p-2 px-3 rounded hover:bg-zinc-100">
          <font-awesome-icon :icon="['fas', 'xmark']" class="text-zinc-500" />
        </button>
      </div>

      <template v-if="isError">
        <div class="p-3 bg-red-200 rounded-full border-8 border-red-100 w-fit mb-3">
          <font-awesome-icon :icon="['fas', 'circle-exclamation']" :size="'5x'" class="text-red-400" />
        </div>
        <h1 class="text-3xl font-semibold text-red-400">Falha na operação!</h1>
        <span class="mb-5 text-xl text-zinc-500">O Email informado já esta em uso por outro usuário</span>
      </template>
      <template v-if="!isError">
        <div class="p-3 bg-green-200 rounded-full border-8 border-green-100 w-fit mb-3">
          <font-awesome-icon :icon="['fas', 'vial-circle-check']" :size="'5x'" class="text-green-400" />
        </div>
        <h1 class="text-3xl font-semibold text-green-400">Sucesso!</h1>
        <span class="mb-1 text-xl text-zinc-500">Parabéns! Seu acesso foi criado</span>
        <div class="flex w-full bg-zinc-200 h-1 mb-2">
          <div class="bg-green-400" :style="{ width: `${width}%` }"></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const isError = ref(true);
const width = ref(0);

setInterval(() => {
  if (width.value < 100) {
    width.value++;
  }
}, 10);
</script>

<style lang="css" scoped>
.frame {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(64, 64, 64, 0.225);
}

.content {
  min-width: 300px;
  width: 420px;
}
</style>
