<template>
  <div>
    <div class="col-span-1 md:col-span-1">
      <span class="font-bold">Fotos do produto</span>
      <div class="flex flex-col">
        <img :src="src" alt="" class="rounded-xl" />
      </div>
    </div>

    <div class="col-span-1 md:col-span-1">
      <div class="flex">
        <img :src="src" alt="" class="w-1/3 rounded-xl" />
        <img :src="src" alt="" class="w-1/3 rounded-xl mx-5" />
        <img :src="src" alt="" class="w-1/3 rounded-xl" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const src =
    'https://images.tcdn.com.br/img/img_prod/1084491/oculos_de_sol_ray_ban_rb4416_53_preto_sobre_ouro_601_31_560591_1_12315a8a34300774c107ce2e8b8b547a.png';
</script>

<style scoped></style>
