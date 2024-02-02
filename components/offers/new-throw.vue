<template>
  <DefaultButton :label="'Novo pedido'" :fill="true" @click="onHandle()" />
  <div
    class="absolute top-0 left-0 w-screen min-h-screen flex justify-center items-center"
    v-if="isModal"
  >
    <div class="flex justify-between bg-zinc-50 p-5 w-1/2 shadow-lg border-b-2">
      <span class="text-xl"> Novo pedido</span>
      <button type="button" @click="onHandle()">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const isModal = ref(true);
function onHandle() {
  isModal.value = !isModal.value;
}
</script>

<style lang="css" scoped>
  .absolute {
    background-color: rgba(44, 48, 51, 0.39);
  }


</style>
