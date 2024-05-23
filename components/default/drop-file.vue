<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
    <div class="col-span-1 md:col-span-2" ref="dropZoneRef">
      <div
        class="flex flex-col justify-center items-center border-2 border-dashed hover:border-teal-400 dark:bg-zinc-900 dark:text-zinc-50 rounded-xl mt-5 cursor-pointer py-5 px-3"
        @click="onHandleFile()"
      >
        <font-awesome-icon :icon="['fas', 'cloud-arrow-up']" :size="'2xl'" class="text-teal-400" />
        <span class="mt-2 text-xl">Arraste os arquivos ou clique aqui para definir o banner superior</span>
        <div class="flex flex-col text-center">
          <span> Formatos aceitos: <b>JPG /</b> <b> WEBP</b></span>
          <span class="text-sm"> Limite de arquivos aceitos: <b>4</b></span>
        </div>

        <div class="mt-2" v-if="files.length > 0">
          <DefaultButton :label="'Enviar'" :fill="true" />
        </div>
        <input type="file" ref="inputFile" class="hidden" @change="onUploadImage($event.target)" />
      </div>
    </div>
    <div class="col-span-1 md:col-span-1">
      <DefaultFileUploaded :file="item" v-for="(item, index) in files" :key="index" @remove="onRemove(index)" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useDropZone } from '@vueuse/core';
  import { watch, ref } from 'vue';

  const acceptedFormats = ['image/jpeg', 'image/png', 'image/webp'];
  const inputFile = ref<HTMLElement>();
  const dropZoneRef = ref<HTMLDivElement>();
  const files = ref<File[]>([]);

  const emit = defineEmits(['change']);

  watch(files.value, (n) => {
    emit('change', files.value);
  });

  useDropZone(dropZoneRef, {
    onDrop,
    dataTypes: acceptedFormats,
  });

  function onDrop(drops: File[] | null) {
    if (files.value.length + (drops?.length || 0) > 2) {
      return;
    }
    drops?.map((file) => {
      files.value.push(file);
    });
  }

  function onHandleFile() {
    if (files.value.length > 2) {
      return;
    }
    inputFile.value!.click();
  }

  function onUploadImage(data: any) {
    const file = data.files[0] as File;

    if (files.value.length + 1 > 2) {
      return;
    }

    if (!file || !acceptedFormats.includes(file.type)) {
      return;
    }
    onDrop([file]);
  }

  function onRemove(index: number) {
    files.value.splice(index, 1);
  }
</script>

<style scoped></style>
