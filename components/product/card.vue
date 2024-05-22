<template>
  <div class="grid grid-cols-2 mb-5 gap-2">
    <div class="col-span-1">
      <img :src="product.images[0]?.url" alt="" class="h-full" />
    </div>
    <div class="col-span-1">
      <div class="flex flex-col justify-between">
        <span class="text-2xl font-semibold">{{ product.name }}</span>
        <span class="text-xl font-semibold text-teal-400 mt-2">R$ {{ product.productValues?.totalPrice ?? '00.0' }}</span>
        <div class="flex mt-2 mb-3">
          <div class="flex flex-col items-center">
            <span class="font-semibold">Cor</span>
            <font-awesome-icon :icon="['fas', 'square']" :class="color" />
          </div>
          <div class="flex flex-col items-center mx-3">
            <span class="font-semibold">Estoque</span>
            <span>{{ product.productValues?.amount ?? '0' }}</span>
          </div>
          <div class="flex flex-col items-center mx-3">
            <span class="font-semibold">Genero</span>
            <span>{{ gender }}</span>
          </div>
        </div>
        <div class="col-span-1 text-start">
          <div class="flex">
            <div class="flex flex-col justify-start items-start ">
              <span class="font-semibold">Formato</span>
              <span>Não informado</span>
            </div>
            <div class="flex flex-col items-center mx-3">
              <span class="font-semibold">Tipo</span>
              <span>{{ product.glassType }}</span>
            </div>
          </div>
        </div>
        <DefaultButton :label="'Editar'" :fill="true" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { type IProduct } from '../../interfaces/product.interface';

  const props = defineProps({
    product: { type: Object as PropType<IProduct>, required: true },
  });

  const color = computed(() => {
    return `text-${props.product.color ?? 'zinc-600'}`;
  });

  const gender = computed(() => {
    return props.product.gender[0]?.toUpperCase();
  });

</script>

<style lang="css" scoped>
  img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
  }
</style>
