<template>
  <div
    @mouseenter="isHide = false"
    @mouseleave="isHide = true"
    :class="['flex justify-center items-between min-h-screen bg-zinc-900 shadow-xl trans', !isHide ? 'sidebar' : '']"
  >
    <div class="flex flex-col mt-20 w-full px-3">
      <div class="flex justify-center mb-10">
        <Logo :color="'text-zinc-50'" />
      </div>
      <span class="text-sm text-zinc-500" v-if="!isHide">Minha Loja</span>

      <SidebarButton :label="item.name" :isHide="isHide" :to="item.url" v-for="(item, index) in data" :key="index">
        <font-awesome-icon :icon="item.icon" :class="'text-teal-400'" />
      </SidebarButton>

      <span class="text-sm text-zinc-500 mt-10" v-if="!isHide"> Minha Conta </span>
      <SidebarButton :label="'Configurações'" :isHide="isHide">
        <font-awesome-icon :icon="['fas', 'sliders']" />
      </SidebarButton>
      <SidebarButton :label="'Tema'" :isHide="isHide" @pressed="onHandleTheme()">
        <font-awesome-icon :icon="['fas', 'sun']" />
      </SidebarButton>
      <SidebarButton :label="'Sair'" :isHide="isHide" :to="'/login'">
        <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
      </SidebarButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();

  const isHide = ref<boolean>(false);
  const { data, pending } = useFetchAuth('users/list/sidebar', { immediate: true, method: 'get' });

  function onHandleBar() {
    isHide.value = !isHide.value;
  }

  function onHandleTheme() {
    const html = document.querySelector('html');
    if(html?.classList.contains('dark')) {
      html.classList.replace('dark', 'light')
      return;
    }

    html?.classList.add('dark')
  }
</script>

<style lang="css" scoped>
  .sidebar {
    width: 300px;
  }
</style>

'text-teal-400'
