<template>
  <div :class="['grid grid-cols-1 mx-5 my-20', renderBig ? 'md:grid-cols-5 gap-5' : 'md:grid-cols-3']">
    <div :class="['col-span-1 md:col-start-2 dark:text-zinc-50']">
      <div
        class="flex flex-col items-center px-5 mt-10 text-center justify-center py-10 border-2 border-dashed rounded-xl mb-5 hover:border-teal-400 hover:text-teal-400 cursor-pointer"
        ref="dropZoneRef"
        @click="onHandleFile()"
      >
        <font-awesome-icon :icon="['fas', 'image']" :size="'3x'" class="mb-3" />
        <template v-if="files.length < 4">
          <div class="flex flex-col">
            <span>Clique ou arraste e solte as imagens aqui para adicionar ao produto.</span>
            <span>Formatos aceito: <b>JPG</b> <b>PNG</b> <b>WEBP</b></span>
            <span>Tamanho máximo por arquivo: <b>5 MB</b></span>
            <span>Limitte de imagens por produto: <b>4</b></span>
          </div>
        </template>
        <template v-if="files.length == 4">
          <span>Limite máximo de imágens atingido</span>
        </template>
      </div>

      <input type="file" ref="inputFile" class="hidden" @change="onUploadImage($event.target)" />

      <div :class="['grid gap-5 my-5', renderBig ? 'grid-cols-2' : 'grid-cols-3']">
        <ProductsImageRender
          :imageURL="item.url"
          :index="index"
          :selected="renderBig == item.url"
          v-for="(item, index) in files"
          :key="index"
          @remove="onRemove(index)"
          @select="onShowBig(index)"
        />
      </div>
    </div>
    <div class="col-span-1 md:col-span-2" v-if="renderBig">
      <ProductsImageRenderFull :src="renderBig" @close="renderBig = ''" />
    </div>
  </div>
</template>

<script setup lang="ts">
  interface FileWithRender {
    file: File;
    url: string;
  }
  import { useDropZone } from '@vueuse/core';

  const store = useCreateProduct();

  const dropZoneRef = ref<HTMLDivElement>();
  const files = ref<FileWithRender[]>([]);
  const renderBig = ref('');

  const acceptedFormats = ['image/jpeg', 'image/png', 'image/webp'];
  const inputFile = ref<HTMLElement>();

  const form = new FormData();

  useDropZone(dropZoneRef, {
    onDrop,
    dataTypes: acceptedFormats,
  });

  function onDrop(drops: File[] | null) {
    if (files.value.length + (drops?.length || 0) > 4) {
      return;
    }

    drops?.map((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        files.value.push({ file, url: reader.result as string });
      };
      reader.readAsDataURL(file);
      store.payload.files.push(file);
    });
  }

  function onRemove(index: number) {
    const toRemove = files.value[index];
    const nextImage = files.value[index + 1];

    if(toRemove.url == renderBig.value && nextImage) {
      renderBig.value = nextImage.url
    }

    files.value.splice(index, 1);

    if(files.value.length == 0) {
      renderBig.value = '';
    }
  }

  function onShowBig(index: number) {
    renderBig.value = files.value[index].url;
  }

  function onUploadImage(data: any) {
    const file = data.files[0] as File;

    if (files.value.length + 1 > 4) {
      return;
    }

    if (!file || !acceptedFormats.includes(file.type)) {
      return;
    }

    onDrop([file]);
  }

  function onHandleFile() {
    if (files.value.length >= 4) {
      return;
    }
    inputFile.value!.click();
  }
</script>

<style scoped></style>
