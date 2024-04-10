<template>
  <div class="grid grid-cols-3 py-20 dark:bg-zinc-800 dark:text-zinc-50">
    <div class="col-span-3 mt-20">
      <RequestStep />
    </div>

    <div class="col-span-3 mx-10 md:mx-20 py-10  dark:bg-zinc-800 dark:text-zinc-50" v-if="store.orderInformations">
      <RequestFormGlassType v-if="store.step == 1" />
      <RequestGlassInformation v-if="store.step == 2" />
      <RequestFormLocationOrder v-if="store.step == 3" />
      <RequestFormPayment v-if="store.step == 4" />
      <RequestFormReceive v-if="store.step == 5" />
      <RequestResume v-if="store.step == 6" />
      <RequestComplete v-if="store.step == 7" />
    </div>
  </div>

  <DefaultLoad v-if="pending" />
</template>

<script setup lang="ts">
  import { useNewAuctionRequest } from '~/stores/new-auction-request';
  const store = useNewAuctionRequest();

  const { data, pending } = useFetchAuth('orders/create-order-informations', {
    immediate: true,
    method: 'get',
  });

  store.orderInformations = data.value
</script>

<style lang="scss" scoped></style>
