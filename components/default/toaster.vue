<template>
  <Teleport to="body">
    <div class="frame" v-if="store.status == 'OPENED'" @click="store.onCloseFromView($event)">
      <div :class="['flex flex-col z-10 justify-center items-center content rounded shadow-xl p-5 py-3 text-center bg-zinc-50']">
        <div class="flex justify-end w-full mb-2">
          <button class="hover:border p-2 px-3 rounded hover:bg-zinc-100" @click="store.onHandle()">
            <font-awesome-icon :icon="['fas', 'xmark']" class="text-zinc-500" />
          </button>
        </div>

        <template v-if="store.type == 'ERROR'">
          <div class="p-3 bg-red-200 rounded-full border-8 border-red-100 w-fit mb-3">
            <font-awesome-icon :icon="['fas', 'circle-exclamation']" :size="'5x'" class="text-red-400" />
          </div>
          <h1 class="text-3xl font-semibold text-red-400">Falha ao realizar ação!</h1>
          <span class="mb-5 text-xl text-zinc-500">{{ store.data.msg }}</span>
        </template>
        <template v-if="store.type == 'SUCCESS'">
          <div class="p-3 bg-green-200 rounded-full border-8 border-green-100 w-fit mb-3">
            <font-awesome-icon :icon="['fas', 'vial-circle-check']" :size="'5x'" class="text-green-400" />
          </div>
          <h1 class="text-3xl font-semibold text-green-400">Sucesso!</h1>
          <span class="mb-1 text-xl text-zinc-500">{{ store.data.msg }}</span>
          <div class="flex w-full bg-zinc-200 h-1 mb-2 mt-4">
            <div class="bg-green-400" :style="{ width: store.progressWidth }"></div>
          </div>
        </template>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const store = useToaster();
</script>

<style lang="css" scoped>
.frame {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(64, 64, 64, 0.225);
}

.content {
  min-width: 300px;
  width: 420px;
}
</style>
