<template>
  <div class="flex flex-col">
    <div class="rounded p-5 flex items-start bg-zinc-50 mt-3">
      <font-awesome-icon
        :icon="['fab', 'pix']"
        class="p-2 rounded-xl bg-green-200 text-green-400 mr-2"
        :size="'2x'"
      />

      <div class="flex flex-col">
        <div class="flex items-center mt-2">
          <font-awesome-icon :icon="['far', 'calendar']" />
          <span class="text-zinc-700 ml-2">22/10/2023 10:48</span>
        </div>
      </div>
      <span class="text-zinc-700 mt-2 mx-5">R$ 599,00</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const enter = ref(true);
</script>

<style lang="scss" scoped></style>
