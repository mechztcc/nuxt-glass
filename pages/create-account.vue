<template>
  <NuxtLayout :name="'no-navbar'">
    <div class="grid grid-cols-1 md:grid-cols-3 min-h-screen">
      <div class="col-span-1 md:col-span-1 px-5 md:px-10 bg-zinc-200">
        <CreateAccountStep />
      </div>
      <div class="col-span-1 md:col-span-2 px-5">
        <CreateAccountUser />
        <CreateAccountShop />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const step = ref(1);

function onNext() {
  step.value++;
}

function onPrev() {
  step.value--;
}
</script>

<style lang="scss" scoped></style>
