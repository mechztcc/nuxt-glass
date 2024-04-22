<template>
  <div class="grid grid-cols-3 md:grid-cols-7 lg:col-span-7 rounded hover:shadow-md p-5 bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-50">
    <div class="col-span-1 md:col-span-1">
      <div class="flex flex-col mx-2">
        <div class="flex items-center">
          <span class="text-xl font-bold">Gênero da armação</span>
        </div>
        <div class="flex flex-col mt-3">
          <span v-for="(item, index) in order.glassGenders" :key="index">{{ item.type }}</span>
        </div>
      </div>
    </div>

    <div class="col-span-1 md:col-span-1">
      <div class="flex flex-col mx-2">
        <div class="flex items-center">
          <span class="text-xl font-bold">Disponível em</span>
        </div>
        <div class="flex flex-col mt-3">
          <span v-for="(item, index) in order.region" :key="index">{{ item.state }} {{ item.city }}</span>
        </div>
      </div>
    </div>

    <div class="col-span-1 md:col-span-1">
      <div class="flex flex-col mx-2">
        <div class="flex items-center">
          <span class="text-xl font-bold">Pagamento</span>
        </div>
        <div class="flex flex-col mt-3">
          <span v-for="(item, index) in order.payment" :key="index">{{ item.type }}</span>
        </div>
      </div>
    </div>

    <div class="col-span-1 md:col-span-1">
      <div class="flex flex-col mx-2">
        <div class="flex items-center">
          <span class="text-xl font-bold">Entrega</span>
        </div>
      </div>
      <div class="flex flex-col mt-3">
        <span v-for="(item, index) in order.delivery" :key="index">{{ item.type }}</span>
      </div>
    </div>

    <div class="col-span-1 md:col-span-1">
      <div class="flex flex-col mx-2">
        <div class="flex items-center">
          <span class="text-xl font-bold">Tipo dos Óculos</span>
        </div>
      </div>
      <div class="flex flex-col mt-3">
        <span v-for="(item, index) in order.glassType" :key="index">{{ item.type }}</span>
      </div>
    </div>

    <div class="col-span-1 md:col-span-1">
      <div class="flex flex-col mx-2">
        <div class="flex items-center">
          <span class="text-xl font-bold">Armação</span>
        </div>
      </div>
      <div class="flex flex-col mt-3">
        <span v-for="(item, index) in order.glassFrame" :key="index">{{ item.type }}</span>
      </div>
    </div>

    <div class="col-span-1 md:col-span-1">
      <div class="flex flex-col mx-2">
        <div class="flex items-center">
          <span class="text-xl font-bold">Gênero</span>
        </div>
      </div>
      <div class="flex flex-col mt-3">
        <span v-for="(item, index) in order.glassGenders" :key="index">{{ item.type }}</span>
      </div>
    </div>

    <div class="col-span-3 md:col-span-7 lg:col-span-7">
      <hr class="my-2" />
      <div class="flex justify-between">
        <span>Expira em: {{ expiresAt }}</span>
        <div class="flex">
          <DefaultButton :label="'Ofertas'">
            <font-awesome-icon :icon="['fas', 'envelopes-bulk']" class="mx-2"/>
          </DefaultButton>
          <DefaultButton :label="'Exame'" class="mx-2">
            <font-awesome-icon :icon="['fas', 'paperclip']" class="mx-2" />
          </DefaultButton>
          <DefaultButton :label="'Cancelar'">
            <font-awesome-icon :icon="['fas', 'xmark']" class="mx-2" />
          </DefaultButton>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { useDateFormat } from '@vueuse/core';

  const props = defineProps({
    order: { type: Object, required: true },
  });

  const expiresAt = useDateFormat(props.order.expiresAt, 'DD/MM/YYYY hh:mm')
</script>

<style scoped></style>
