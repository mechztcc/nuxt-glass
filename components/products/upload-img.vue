<template>
  <div :class="['grid grid-cols-1 mx-5 my-20', renderBig ? 'md:grid-cols-5 gap-5' : 'md:grid-cols-3']">
    <div :class="['col-span-1 md:col-start-2 dark:text-zinc-50']">
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

      <div :class="['grid gap-5 my-5', renderBig ? 'grid-cols-2' : 'grid-cols-3']">
        <ProductsImageRender
          :imageURL="item.url"
          :index="index"
          v-for="(item, index) in files"
          :key="index"
          @remove="onRemove(index)"
          @select="onShowBig(index)"
        />
      </div>

      <DefaultButton :label="'Avançar'" :fill="true" />
      <div class="flex justify-center mt-3">
        <span class="dark:text-zinc-50 hover:text-teal-400 cursor-pointer">Voltar</span>
      </div>
    </div>
    <div class="col-span-1 md:col-span-2" v-if="renderBig">
      <div class="flex flex-col">
        <div class="flex justify-end mb-2">
          <font-awesome-icon :icon="['far', 'circle-xmark']" :size="'2x'" class="text-zinc-500 dark:text-teal-400 cursor-pointer" @click="renderBig = ''" />
        </div>
        <img class="rounded-lg shadow-md" :src="renderBig" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface FileWithRender {
    file: File;
    url: string;
  }
  import { useDropZone } from '@vueuse/core';

  const dropZoneRef = ref<HTMLDivElement>();
  const files = ref<FileWithRender[]>([]);
  const renderBig = ref('');

  useDropZone(dropZoneRef, {
    onDrop,
    dataTypes: ['image/jpeg', 'image/png', 'image/webp'],
  });

  function onDrop(drops: File[] | null) {
    drops?.map((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        files.value.push({ file, url: reader.result as string });
      };
      reader.readAsDataURL(file);
    });
  }

  function onRemove(index: number) {
    files.value.splice(index, 1);
  }

  function onShowBig(index: number) {
    renderBig.value = files.value[index].url;
  }
</script>

<style scoped></style>
