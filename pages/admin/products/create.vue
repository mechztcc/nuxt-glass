<template>
  <div class="flex justify-center items-center">
    <DefaultStep :steps="store.steps" @change="store.onHandleStep($event)"></DefaultStep>
  </div>

  <div class="flex justify-center mt-5">
    <div class="flex flex-col justify-center items-center">
      <Logo />
      <h1 class="text-2xl">Criar produto</h1>
    </div>
  </div>

  <ProductsCreateGenerals v-if="store.actualStep == 1" />
  <ProductsPriceStock v-if="store.actualStep == 2" />
  <ProductsUploadImg v-if="store.actualStep == 3" />
</template>

<script setup lang="ts">
  import { useCreateProduct } from '~/stores/create-product';

  const store = useCreateProduct();
</script>

<style scoped></style>
