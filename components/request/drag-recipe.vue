<template>
  <div class="grid grid-cols-3 gap-5 mt-20">
    <div class="col-span-3">
      <div class="flex items-center">
        <span class="text-zinc-700 text-lg">
          Envie uma foto do seu Exame de vista
        </span>
        <font-awesome-icon
          :icon="['fas', 'circle-check']"
          class="mx-2 text-green-400"
        />
        <font-awesome-icon
          :icon="['fas', 'circle-xmark']"
          class="text-red-400"
        />
      </div>
    </div>

    <div class="col-span-3 bg-zinc-50" style="height: 200px" ref="dropZoneRef">
      <div
        class="flex flex-col justify-center items-center w-full h-full border-dotted border-4 hover:border-black rounded-xl"
      >
        <font-awesome-icon :icon="['fas', 'image']" :size="'3x'" />
        <span class="text-xl font-semibold">
          Arraste o arquivo e solte aqui
        </span>
        {{ isOverDropZone }}
        <span class="text-zinc-500">JPG, JPEG, PNG, PDF</span>
        <span class="text-zinc-500">Tamanho máximo: 5mb</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDropZone } from "@vueuse/core";

const dropZoneRef = ref<HTMLDivElement>();
const onDrop = (files: File[] | null) => {
  console.log(files);
};

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
  dataTypes: ["image/jpeg", "image/png", "image/*"],
});
</script>

<style lang="scss" scoped></style>
