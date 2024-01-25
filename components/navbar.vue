<template>
  <div class="flex w-full justify-between px-5 border-b-2 py-5">
    <span class="text-4xl">VALKYRIE</span>
    <div class="flex">
      <DefaultButton class="mr-2">
        <font-awesome-icon :icon="['far', 'heart']" />
      </DefaultButton>
      <DefaultButton class="mr-2">
        <font-awesome-icon :icon="['fas', 'bag-shopping']" />
      </DefaultButton>
      <DefaultButton class="mr-2">
        <font-awesome-icon :icon="['far', 'user']" />
      </DefaultButton>
      <DefaultButton class="mr-2">
        <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
      </DefaultButton>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
