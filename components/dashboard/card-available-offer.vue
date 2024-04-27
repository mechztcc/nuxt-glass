<template>
  <div class="rounded p-5 flex flex-col bg-zinc-50 hover:shadow-md dark:bg-zinc-900 dark:text-zinc-50 my-3 mx-3">
    <div class="flex justify-between items-center mb-3">
      <span class="text-xl font-bold">{{ order.user.name }}</span>
      <div class="flex items-start justify-end">
        <Badge :label="'Em andamento'"></Badge>
      </div>
    </div>
    <div class="flex mt-2">
      <span class="mr-2" v-for="(item, index) in order.region" :key="index">{{ item.state }} - {{ item.city }}</span>
    </div>
    <span v-for="(item, index) in order.glassTypes" :key="index">{{ item.name }}</span>
    <div class="flex">
      <span v-for="(item, index) in order.deliveryTypes" :key="index">{{ item.name }}</span>
    </div>
    <template>
      <div class="flex">
        <span>À vista no PIX</span>
      </div>
      <div class="flex">
        <span>Entre R$ 500,00 e R$ 1.000,00</span>
      </div>
      <span class="mt-2">Recebeu 28 lances</span>
      <span class="mt-2"> Busco óculos de sol, com armação resistente! Preferencia na cor PRETA. </span>
    </template>

    <hr class="my-2" />
    <div class="flex justify-between">
      <div class="flex items-center mt-2">
        <font-awesome-icon :icon="['far', 'clock']" />
        <span class="mx-2">Termina em: {{ expiresAt }}</span>
      </div>

      <div class="flex">
        <DefaultButton class="mx-2">
          <font-awesome-icon :icon="['fas', 'flag']" />
        </DefaultButton>
        <DefaultButton>
          <font-awesome-icon :icon="['fas', 'paperclip']" />
        </DefaultButton>
        <OffersBindModal />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useDateFormat } from '@vueuse/core';

  const props = defineProps({
    order: { type: Object, required: true },
  });

  const expiresAt = useDateFormat(props.order.expiresAt, 'DD/MM/YYYY hh:mm');
</script>

<style lang="scss" scoped></style>
