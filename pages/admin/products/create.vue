<template>
  <NuxtLayout :name="'admin'">
    <div class="flex justify-center items-center my-5">
      <DefaultStep :steps="store.steps" @change="store.onHandleStep($event)"></DefaultStep>
    </div>

    <div class="flex justify-center mt-5">
      <div class="flex flex-col justify-center items-center">
        <Logo />
        <h1 class="text-2xl dark:text-zinc-50">Criar produto</h1>
      </div>
    </div>

    <ProductsCreateGenerals v-show="store.actualStep == 1" />
    <ProductsPriceStock v-show="store.actualStep == 2" />
    <ProductsUploadImg v-show="store.actualStep == 3" />

    <div class="grid grid-cols-3 mt-10">
      <div class="col-start-2 col-span-1">
        <DefaultButton :label="'Concluir'" :fill="true" @pressed="onSubmit()" v-if="store.actualStep == 3"/>
        <DefaultButton :label="'Avançar'" :fill="true" @pressed="store.onNext()" v-if="store.actualStep < 3"/>

        <div class="flex justify-center mt-3" v-if="store.actualStep > 1">
          <span class="dark:text-zinc-50 hover:text-teal-400 cursor-pointer" @click="store.onPrev()">Voltar</span>
        </div>
      </div>
    </div>

    <div class="absolute bottom-10 right-10">
      <DefaultThemeButton />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { useCreateProduct } from '~/stores/create-product';

  const store = useCreateProduct();
  const form = new FormData();

  const { data, pending, execute } = useFetchAuth('products', { immediate: false, method: 'post', body: form });

  async function onSubmit() {
    const { files } = store.payload;

    form.append('data', JSON.stringify(store.payload));
    files.map((file) => form.append('files', file));

    await execute();
  }
</script>

<style scoped></style>
