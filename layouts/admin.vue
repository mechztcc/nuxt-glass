<template>
  <div class="flex dark:bg-zinc-800">
    <SidebarContainer />
    <div class="w-full mx-5 md:mx-10 my-10 trans">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
