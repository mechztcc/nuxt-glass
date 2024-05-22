<template>
  <div class="grid grid-cols-2 md:grid-cols-3">
    <div class="col-span-2 md:col-span-3">
      <div class="flex border-2  rounded-xl px-3 py-3">
        <img src="~assets/imgs/glass1.jpg" alt="" class="rounded-full h-20 w-20" />
        <div class="flex flex-col mx-3">
          <span class="text-xl">Carlos Lima</span>
          <span class="text-md">Otima loja, sempre compro por aqui!</span>
          <div class="flex">
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['far', 'star-half-stroke']" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
