<template>
  <NuxtLayout :name="'no-navbar'">
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div class="col-span-1 px-10 md:px-20 min-h-screen">
        <LoginForm></LoginForm>
      </div>
      <div class="col-span-2">
        <div class="flex h-screen">
          <img src="~assets/imgs/glass2.jpg" alt="" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
  const cookie = useCookie('credentials');
  cookie.value = null;
</script>

<style lang="css" scoped>
  img {
    object-fit: cover;
  }
</style>
