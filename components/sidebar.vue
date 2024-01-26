<template>
  <div
    @mouseenter="isHide = false"
    @mouseleave="isHide = true"
    class="flex justify-center items-between min-h-screen bg-zinc-50 w-fit p-3 shadow-xl"
  >
    <div class="flex flex-col mt-20">
      <span class="text-sm text-zinc-500" v-if="!isHide">Minha Loja</span>
      <SidebarButton :label="'Dashboard'" :isHide="isHide">
        <font-awesome-icon :icon="['fas', 'chart-simple']" />
      </SidebarButton>
      <SidebarButton :label="'Produtos'" :isHide="isHide">
        <font-awesome-icon :icon="['fas', 'tags']" />
      </SidebarButton>
      <SidebarButton :label="'Minha carteira'" :isHide="isHide">
        <font-awesome-icon :icon="['fas', 'sack-dollar']" />
      </SidebarButton>
      <SidebarButton :label="'Minhas conversas'" :isHide="isHide">
        <font-awesome-icon :icon="['fas', 'comment']" />
      </SidebarButton>
      <SidebarButton :label="'Calendário'" :isHide="isHide">
        <font-awesome-icon :icon="['far', 'calendar']" />
      </SidebarButton>
      <SidebarButton :label="'Integrações'" :isHide="isHide">
        <font-awesome-icon :icon="['fas', 'layer-group']" />
      </SidebarButton>

      <span class="text-sm text-zinc-500 mt-10" v-if="!isHide">Minha Conta</span>
      <SidebarButton :label="'Configurações'" :isHide="isHide">
        <font-awesome-icon :icon="['fas', 'sliders']" />
      </SidebarButton>
      <SidebarButton :label="'Sair'" :isHide="isHide">
        <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
      </SidebarButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const isHide = ref<boolean>(false);

function onHandleBar() {
  isHide.value = !isHide.value;
}
</script>

<style lang="scss" scoped></style>
