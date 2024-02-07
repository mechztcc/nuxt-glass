<template>
  <NuxtLayout :name="'no-navbar'">
    <div class="grid grid-cols-1 md:grid-cols-4  py-10">
      <div class="col-span-1 md:col-span-4 px-5 md:px-10">
        <CreateAccountStep />
      </div>
      <div class="col-span-1 md:col-span-2 md:col-start-2 px-5">
        <CreateAccountUser v-if="store.step == 1" />
        <CreateAccountShop v-if="store.step == 2" />
        <CreateAccountSuccessProcess v-if="store.step == 3"/>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useCreateAccount } from "~/stores/create-account";
const store = useCreateAccount();

</script>

<style lang="scss" scoped></style>
