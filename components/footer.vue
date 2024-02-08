<template>
  <div class="grid grid-cols-3 bg-zinc-400">
    <div class="col-span-3 md:col-span-1 flex flex-col justify-end">
      <div class="px-5 mt-5">
        <Logo />
        <span class="text-zinc-700 text-xl mt-2">
          O maior E-commerce de Óculos do Brasil
        </span>

        <div class="flex text-zinc-700 items-center mt-3">
          <font-awesome-icon :icon="['fas', 'phone']" />
          <span class="mx-2">(81) 9 9999-9999</span>
        </div>

        <div class="flex text-zinc-700 items-center">
          <font-awesome-icon :icon="['far', 'envelope']" />
          <span class="mx-2">email@email.com</span>
        </div>

        <div class="flex text-zinc-700 mt-3">
          <font-awesome-icon :icon="['fab', 'linkedin']" :size="'2x'" />
          <font-awesome-icon
            :icon="['fab', 'square-facebook']"
            class="mx-3"
            :size="'2x'"
          />
          <font-awesome-icon :icon="['fab', 'instagram']" :size="'2x'" />
        </div>
      </div>
      <img class="mt-5" src="~assets/imgs/wave-2.svg" alt="" />
    </div>
    <div class="col-span-3 md:col-span-2 bg-zinc-900">
      <HomePreOrder />
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped></style>
