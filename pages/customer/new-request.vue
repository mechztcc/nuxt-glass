<template>
  <div class="grid grid-cols-1 md:grid-cols-4">
    <div class="col-span-1 px-5 h-screen bg-zinc-900 sticky top-0">
      <RequestStep />
    </div>
    <div class="col-span-3 mt-20 mx-10 md:mx-20 py-10">
      <div class="flex justify-end mb-20">
        <font-awesome-icon :icon="[store.step >= 1 ? 'fas' : 'far', 'square']" class="cursor-pointer"  @click="store.onSetStep(1)" />
        <font-awesome-icon :icon="[store.step >= 2 ? 'fas' : 'far', 'square']" class="mx-2 cursor-pointer" @click="store.onSetStep(2)"/>
        <font-awesome-icon :icon="[store.step >= 3 ? 'fas' : 'far', 'square']" class="cursor-pointer" @click="store.onSetStep(3)"/>
        <font-awesome-icon :icon="[store.step >= 4 ? 'fas' : 'far', 'square']" class="cursor-pointer mx-2" @click="store.onSetStep(4)"/>
        <font-awesome-icon :icon="[store.step == 5 ? 'fas' : 'far', 'square']" class="cursor-pointer" @click="store.onSetStep(5)"/>
      </div>
      <RequestFormGlassType v-if="store.step == 1" />
      <RequestGlassInformation v-if="store.step == 2" />
      <RequestFormLocationOrder v-if="store.step == 3" />
      <RequestFormPayment v-if="store.step == 4" />
      <RequestFormReceive v-if="store.step == 5" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNewAuctionRequest } from "~/stores/new-auction-request";

const store = useNewAuctionRequest();
</script>

<style lang="scss" scoped></style>
