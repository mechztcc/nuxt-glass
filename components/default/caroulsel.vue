<template>
  <div class="relative">
    <img src="~assets/imgs/banner2.jpg" alt="" class="w-full" v-if="selected == 1" />
    <img src="~assets/imgs/banner.jpg" alt="" class="w-full" v-if="selected == 2" />
    <font-awesome-icon
      :icon="['fas', 'circle-chevron-left']"
      :size="'2xl'"
      class="absolute left-1 top-1/2 text-zinc-50 cursor-pointer"
      @click="onHandle()"
    />
    <font-awesome-icon
      :icon="['fas', 'circle-chevron-right']"
      :size="'2xl'"
      class="absolute right-1 top-1/2 text-zinc-50 cursor-pointer"
      @click="onHandle()"
    />

    <div class="flex justify-center items-center w-full absolute bottom-1">
      <font-awesome-icon
        :icon="['fas', 'circle']"
        class="text-zinc-50 cursor-pointer mr-1"
        :size="[index + 1 == selected ? 'xl' : '']"
        v-for="(_, index) in 2"
        :key="index"
        @click="onHandle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  const selected = ref(1);

  function onHandle() {
    selected.value == 1 ? (selected.value = 2) : (selected.value = 1);
    console.log(selected.value);
  }
</script>

<style scoped>
  img {
    max-height: 500px;
    object-fit: cover;
  }
</style>
