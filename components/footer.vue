<template>
  <div class="grid grid-cols-3 bg-zinc-400">
    <div class="col-span-3 md:col-span-1 px-20 py-20">
      <h1 class="title text-3xl">VALKYERIE</h1>
      <span class="text-zinc-700 text-xl">O maior E-commerce de Óculos do Brasil</span>

      <div class="flex text-zinc-700 items-center mt-3">
        <font-awesome-icon :icon="['fas', 'phone']" />
        <span class="mx-2">(81) 9 9999-9999</span>
      </div>

      <div class="flex text-zinc-700 items-center">
        <font-awesome-icon :icon="['far', 'envelope']" />
        <span class="mx-2">email@email.com</span>
      </div>

      <div class="flex text-zinc-700 mt-3">
        <font-awesome-icon :icon="['fab', 'linkedin']" :size="'2x'"/>
        <font-awesome-icon :icon="['fab', 'square-facebook']" class="mx-3" :size="'2x'"/>
        <font-awesome-icon :icon="['fab', 'instagram']" :size="'2x'"/>
      </div>
    </div>
    <div class="col-span-3 md:col-span-2 bg-zinc-400"></div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>

</style>
