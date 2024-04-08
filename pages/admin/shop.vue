<template>
  <NuxtLayout :name="'admin'">
    <div class="grid grid-cols-1">
      <div class="col-span-1">
        <div class="flex flex-col justify-center items-center min-h-screen">
          <font-awesome-icon :icon="['fas', 'store-slash']" :size="'2xl'" />
          <span class="text-xl">Você ainda não possui uma loja registrada</span>
          <DefaultButton class="mt-2" :label="'Quero criar uma loja'" :fill="true" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style scoped></style>
