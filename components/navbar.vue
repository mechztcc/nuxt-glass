<template>
  <div class="flex w-full justify-between px-5 border-b-2 py-5 sticky top-0 bg-zinc-50 z-10">
    <span class="text-4xl">VALKYRIE</span>
    <div class="flex">
      <DefaultButton class="mr-2">
        <font-awesome-icon :icon="['far', 'heart']" :size="'lg'"/>
      </DefaultButton>
      <DefaultButton class="mr-2">
        <font-awesome-icon :icon="['fas', 'bag-shopping']" :size="'lg'" />
      </DefaultButton>
      <DefaultButton class="mr-2">
        <font-awesome-icon :icon="['far', 'user']" :size="'lg'" />
      </DefaultButton>
      <DefaultButton class="mr-2">
        <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" :size="'lg'" />
      </DefaultButton>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
