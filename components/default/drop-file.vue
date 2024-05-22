<template>
  <div class="flex flex-col justify-center items-center border-2 border-dashed hover:border-teal-400 rounded-xl mt-5" style="height: 200px">
    <font-awesome-icon :icon="['fas', 'cloud-arrow-up']" :size="'2xl'" class="text-teal-400" />
    <span class="mt-2 text-xl">Arraste e solte os arquivos aqui para definir o banner superior</span>
    <div class="flex flex-col text-center">
      <span> Formatos aceitos: <b>JPG /</b> <b> WEBP</b></span>
      <span class="text-sm"> Limite de arquivos aceitos: <b>4</b></span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
