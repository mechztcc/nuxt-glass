<template>
  <div class="grid grid-cols-1 md:grid-cols-3 mx-5">
    <div class="col-span-1 md:col-start-2 mt-5 dark:text-zinc-50">
      <div
        class="flex flex-col items-center px-5 text-center justify-center py-10 border-2 border-dashed rounded-md mb-5 hover:border-teal-400 hover:text-teal-400"
        ref="dropZoneRef"
      >
        <font-awesome-icon :icon="['fas', 'image']" :size="'3x'" class="mb-3" />
        <span>Arraste e solte as imagens aqui para adicionar ao produto.</span>
        <span>Formatos aceito: <b>JPG</b> <b>PNG</b></span>
        <span>Tamanho máximo por arquivo: <b>5 MB</b></span>
        <span>Limitte de imagens por produto: <b>4</b></span>
      </div>

      <div class="grid grid-cols-3 gap-5 my-5">
        <div class="flex flex-col items-end" v-for="(item, index) in files" :key="index">
          <font-awesome-icon :icon="['fas', 'trash']" class="mb-3 text-red-400 cursor-pointer" />
          <img :src="src" alt="" class="w-full h-32 rounded-md" />
        </div>
      </div>

      <DefaultButton :label="'Avançar'" :fill="true" />
      <div class="flex justify-center mt-5">
        <span class="dark:text-zinc-50 hover:text-teal-400 cursor-pointer">Voltar</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useDropZone } from '@vueuse/core';

  const dropZoneRef = ref<HTMLDivElement>();

  const files = ref<File[]>([]);
  const render = ref<FileReader>();

  function onDrop(drops: File[] | null) {
    drops?.map((file) => {
      files.value.push(file);
    });
  }

  const { isOverDropZone } = useDropZone(dropZoneRef, {
    onDrop,
    dataTypes: ['image/jpeg', 'image/png'],
  });
</script>

<style scoped></style>
