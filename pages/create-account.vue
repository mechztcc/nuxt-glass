<template>
  <NuxtLayout :name="'no-navbar'" class="">
    <div class="grid grid-cols-1 md:grid-cols-4 min-h-screen">
      <div class="col-span-1 md:col-span-4 md:px-10">
        <CreateAccountStep />
      </div>
      <div class="col-span-1 md:col-span-2 md:col-start-2 px-5 ">
        <CreateAccountSelectProfile v-if="store.step == 1" />
        <CreateAccountUser v-if="store.step == 2" />
        <CreateAccountShop v-if="store.step == 3" />
        <CreateAccountSuccessProcess v-if="store.step == 4" />
      </div>
      <div class="col-span-4 w-full bottom absolute">
        <img src="~assets/imgs/wave-1.svg" alt="" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useCreateAccount } from '~/stores/create-account';
const store = useCreateAccount();
</script>

<style lang="css" scoped>

.bottom {
  bottom: -40vh;
}
img {
  object-fit: contain;
}
</style>
