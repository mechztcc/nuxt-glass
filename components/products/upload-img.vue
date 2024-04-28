<template>
  <div class="grid grid-cols-1 md:grid-cols-3">
    <div class="col-span-1 md:col-start-2 mt-5 dark:text-zinc-50">
      <div class="flex flex-col items-center justify-center py-10 border-2 border-dashed rounded-md mb-5 hover:border-teal-400">
        <font-awesome-icon :icon="['fas', 'image']" :size="'3x'" class="mb-3" />
        <span>Arraste e solte as imagens aqui para adicionar ao produto.</span>
        <span>Formatos aceito: <b>JPG</b> <b>PNG</b></span>
        <span>Tamanho máximo por arquivo: <b>5 MB</b></span>
        <span>Limitte de imagens por produto: <b>4</b></span>
      </div>

      <div class="grid grid-cols-3 gap-5 my-5">
        <div class="flex flex-col items-end" v-for="(item, index) in 3" :key="index">
          <font-awesome-icon :icon="['fas', 'trash']" class="mb-3 text-red-400 cursor-pointer" />
          <img :src="src" alt="" class="w-full h-32 rounded-md">
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
  const src =
    'https://images.tcdn.com.br/img/img_prod/1084491/oculos_de_sol_ray_ban_rb4416_53_preto_sobre_ouro_601_31_560591_1_12315a8a34300774c107ce2e8b8b547a.png';
</script>

<style scoped></style>
