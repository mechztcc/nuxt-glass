<template>
  <div class="flex justify-end items-end mb-10 mr-10">
    <button class="flex items-center  justify-center border rounded-full shadow-md bg-zinc-800 w-10 h-10" @click="onHandleTheme()">
      <font-awesome-icon :icon="['fas', 'moon']" class="text-zinc-50" v-if="isDark" />
      <font-awesome-icon :icon="['fas', 'sun']" class="text-zinc-50" v-if="!isDark"/>
    </button>
  </div>
</template>

<script setup lang="ts">
  const isDark = ref(false);
  function onHandleTheme() {
    isDark.value = !isDark.value;

    const html = document.querySelector('html');
    if (html?.classList.contains('dark')) {
      html.classList.replace('dark', 'light');
      return;
    }

    html?.classList.add('dark');
  }
</script>

<style scoped></style>
