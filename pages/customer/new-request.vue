<template>
  <div class="grid grid-cols-1 md:grid-cols-3">
    <div class="col-span-1 px-5 h-screen bg-zinc-200">
      <RequestStep />
    </div>
    <div class="col-span-2">
      <div class="flex justify-end mt-20 mx-10 md:mx-20">
      <font-awesome-icon :icon="['fas', 'square']" />
      <font-awesome-icon :icon="['far', 'square']" class="mx-2" />
      <font-awesome-icon :icon="['far', 'square']" />
    </div>
      <RequestFormGlassType />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
