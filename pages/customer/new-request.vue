<template>
  <div class="grid grid-cols-3 py-20">
    <div class="col-span-3 mt-20">
      <RequestStep />
    </div>

    <div class="col-span-3 mx-10 md:mx-20 py-10">
      <RequestFormGlassType v-if="store.step == 1" />
      <RequestGlassInformation v-if="store.step == 2" />
      <RequestFormLocationOrder v-if="store.step == 3" />
      <RequestFormPayment v-if="store.step == 4" />
      <RequestFormReceive v-if="store.step == 5" />
      <RequestComplete v-if="store.step == 6" />
    </div>

    <div class="col-span-1 col-start-3 mx-10 md:mx-20 mt-10" v-if="store.step !== 6">
      <DefaultButton :label="'Avançar'" :fill="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNewAuctionRequest } from "~/stores/new-auction-request";

const store = useNewAuctionRequest();
</script>

<style lang="scss" scoped></style>
