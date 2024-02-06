<template>
  <div class="grid grid-cols-1 md:grid-cols-3">
    <div class="col-span-1 px-5 h-screen bg-zinc-200">
      <RequestStep />
    </div>
    <div class="col-span-2 mt-20 mx-10 md:mx-20">
      <div class="flex justify-end mb-20">
        <font-awesome-icon :icon="[store.step >= 1 ? 'fas' : 'far', 'square']" class="cursor-pointer"  @click="store.onSetStep(1)" />
        <font-awesome-icon :icon="[store.step >= 2 ? 'fas' : 'far', 'square']" class="mx-2 cursor-pointer" @click="store.onSetStep(2)"/>
        <font-awesome-icon :icon="[store.step == 3 ? 'fas' : 'far', 'square']" class="cursor-pointer" @click="store.onSetStep(3)"/>
      </div>
      <RequestFormGlassType v-if="store.step == 1" />
      <RequestGlassInformation v-if="store.step == 2" />
      <RequestFormReceive v-if="store.step == 3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNewAuctionRequest } from "~/stores/new-auction-request";

const store = useNewAuctionRequest();
</script>

<style lang="scss" scoped></style>
