<template>
  <DefaultButton :label="'Novo pedido'" :fill="true" @click="onHandle()" />
  <div
    class="absolute top-0 left-0 w-screen min-h-screen flex justify-center items-center z-20"
    v-if="isModal"
  >
    <div class="flex flex-col bg-zinc-50 p-5 w-1/2 shadow-lg border-b-2">
      <div class="flex justify-between border-b pb-3">
        <div class="flex items-center">
          <font-awesome-icon :icon="['fas', 'square-plus']" :size="'2x'" />
          <span class="text-2xl ml-2"> Novo pedido </span>
        </div>
        <button
          type="button"
          class="border p-2 px-3 hover:bg-zinc-200"
          @click="onHandle()"
        >
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </button>
      </div>

      <div class="grid grid-cols-4 gap-5 mt-5">
        <div class="col-span-1 border-r pr-5">
          <div class="flex flex-col">
            <span class="font-semibold">OE LONGE</span>
            <div class="flex flex-col my-2">
              <span>Esférico</span>
              <input
                type="number"
                class="border p-2"
                step="0.25"
                placeholder=""
              />
            </div>
            <div class="flex flex-col my-2">
              <span>Cilíndrico</span>
              <input
                type="number"
                class="border p-2"
                step="0.25"
                placeholder=""
              />
            </div>
            <div class="flex flex-col my-2">
              <span>Eixo</span>
              <input
                type="number"
                class="border p-2"
                step="0.25"
                placeholder=""
              />
            </div>
            <div class="flex flex-col my-2">
              <span>DP</span>
              <input
                type="number"
                class="border p-2"
                step="0.25"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div class="col-span-1 border-r pr-5">
          <div class="flex flex-col">
            <span class="font-semibold">OE PERTO</span>
            <div class="flex flex-col my-2">
              <span>Esférico</span>
              <input
                type="number"
                class="border p-2"
                step="0.25"
                placeholder=""
              />
            </div>
            <div class="flex flex-col my-2">
              <span>Cilíndrico</span>
              <input
                type="number"
                class="border p-2"
                step="0.25"
                placeholder=""
              />
            </div>
            <div class="flex flex-col my-2">
              <span>Eixo</span>
              <input
                type="number"
                class="border p-2"
                step="0.25"
                placeholder=""
              />
            </div>
            <div class="flex flex-col my-2">
              <span>DP</span>
              <input
                type="number"
                class="border p-2"
                step="0.25"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div class="col-span-1 border-r pr-5">
          <div class="flex flex-col">
            <span class="font-semibold">OD LONGE</span>
            <div class="flex flex-col my-2">
              <span>Esférico</span>
              <input
                type="number"
                class="border p-2"
                step="0.25"
                placeholder=""
              />
            </div>
            <div class="flex flex-col my-2">
              <span>Cilíndrico</span>
              <input
                type="number"
                class="border p-2"
                step="0.25"
                placeholder=""
              />
            </div>
            <div class="flex flex-col my-2">
              <span>Eixo</span>
              <input
                type="number"
                class="border p-2"
                step="0.25"
                placeholder=""
              />
            </div>
            <div class="flex flex-col my-2">
              <span>DP</span>
              <input
                type="number"
                class="border p-2"
                step="0.25"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="flex flex-col">
            <span class="font-semibold">OD PERTO</span>
            <div class="flex flex-col my-2">
              <span>Esférico</span>
              <input
                type="number"
                class="border p-2"
                step="0.25"
                placeholder=""
              />
            </div>
            <div class="flex flex-col my-2">
              <span>Cilíndrico</span>
              <input
                type="number"
                class="border p-2"
                step="0.25"
                placeholder=""
              />
            </div>
            <div class="flex flex-col my-2">
              <span>Eixo</span>
              <input
                type="number"
                class="border p-2"
                step="0.25"
                placeholder=""
              />
            </div>
            <div class="flex flex-col my-2">
              <span>DP</span>
              <input
                type="number"
                class="border p-2"
                step="0.25"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>

      <hr class="my-4">
      <div class="flex justify-end">
        <DefaultButton :label="'Confirmar'" :fill="true"/>
      </div>
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
