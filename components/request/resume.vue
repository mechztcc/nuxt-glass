<template>
  <div class="flex flex-col justify-center">
    <font-awesome-icon :icon="['fas', 'receipt']" :size="'2x'" class="mb-2" />
    <h1 class="text-3xl text-center">Resumo do Pedido</h1>
    <span class="text-lg text-zinc-700 dark:text-zinc-50 text-center"> Verifique se os dados do seu pedido estão corretos. </span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 mt-20">
    <div class="col-span-1 md:col-span-4">
      <div class="flex flex-col my-5">
        <span class="text-lg">
          <font-awesome-icon :icon="['far', 'circle-check']" />
          Tipo do pedido
        </span>
        <span class="ml-5" v-for="(item, index) in store.payload.glassType" :key="index">
          {{ item.name }}
        </span>
      </div>

      <div class="flex flex-col my-5">
        <span class="text-lg">
          <font-awesome-icon :icon="['far', 'circle']" />
          Qual tipo de armação você deseja?
        </span>
        <span class="ml-5" v-for="(item, index) in store.payload.glassFrame" :key="index">
          {{ item.name }}
        </span>
      </div>

      <div class="flex flex-col my-5">
        <span class="text-lg">
          <font-awesome-icon :icon="['far', 'circle']" />
          Qual Genero da armação?
        </span>
        <span class="ml-5" v-for="(item, index) in store.payload.glassFrame" :key="index">
          {{ item.name }}
        </span>
      </div>

      <div class="flex flex-col my-5">
        <span class="text-lg">
          <font-awesome-icon :icon="['far', 'circle']" />
          Alguma Preferencia de Lentes?
        </span>
        <span class="ml-5" v-for="(item, index) in store.payload.glassGender" :key="index">
          {{ item.name }}
        </span>
      </div>

      <div class="flex flex-col my-5">
        <span class="text-lg">
          <font-awesome-icon :icon="['far', 'circle']" />
          Região de Busca?
        </span>
        <span class="ml-5" v-for="(item, index) in store.payload.availableAt" :key="index"> {{ item.state }} - {{ item.city }} </span>
      </div>

      <div class="flex flex-col my-5">
        <span class="text-lg">
          <font-awesome-icon :icon="['far', 'circle']" />
          Formas de Pagamento
        </span>
        <span class="ml-5" v-for="(item, index) in store.payload.paymentType" :key="index">
          {{ item.name }}
        </span>
      </div>

      <div class="flex flex-col my-5">
        <span class="text-lg">
          <font-awesome-icon :icon="['far', 'circle']" />
          Retirada do Produto
        </span>
        <span class="ml-5"> {{ store.payload.delivery.name }} </span>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-3 mt-20">
    <div class="col-span-1 col-start-3">
      <DefaultButton :label="'Concluir Pedido'" :fill="true" @pressed="onSubmit()" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useNewAuctionRequest } from '~/stores/new-auction-request';

  const store = useNewAuctionRequest();

  const body = {
    userId: 1,
    glassType: store.payload.glassType,
    glassFrame: store.orderInformations.glassFrame,
    glassLensType: store.orderInformations.glassLensType,
    glassGender: store.orderInformations.glassGender,
    payment: store.payload.paymentType,
    delivery: [store.payload.delivery],
    exam: 'EXAME',
    status: 'OPENED',
    expiresAt: new Date().toISOString(),
    region: store.payload.availableAt.map((el) => {
      return `${el.state} - ${el.city}`;
    }),
  };

  const { data, pending, execute } = useFetchAuth('orders', {
    immediate: false,
    method: 'post',
    successMsg: 'Pedido realizado com sucesso!',
    body,
    cb: () => {
      setTimeout(() => {
        store.onHandleStep('next');
      }, 2000)
    },
  });

  async function onSubmit() {
    await execute();
  }
</script>
<style lang="css"></style>
