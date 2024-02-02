<template>
  <div
    @mouseenter="isHide = false"
    @mouseleave="isHide = true"
    class="flex justify-center items-between min-h-screen bg-zinc-50 w-fit p-3 shadow-xl"
  >
    <div class="flex flex-col mt-20">
      <span class="text-sm text-zinc-500" v-if="!isHide">Minha Loja</span>
      <template v-if="isAdmin">
        <SidebarButton
          :label="'Dashboard'"
          :isHide="isHide"
          :to="'/admin/home'"
        >
          <font-awesome-icon :icon="['fas', 'chart-simple']" />
        </SidebarButton>
        <SidebarButton
          :label="'Produtos'"
          :isHide="isHide"
          :to="'/admin/products'"
        >
          <font-awesome-icon :icon="['fas', 'tags']" />
        </SidebarButton>
        <SidebarButton :label="'Carteira'" :isHide="isHide" :to="'/admin/wallet'">
          <font-awesome-icon :icon="['fas', 'sack-dollar']" />
        </SidebarButton>
        <SidebarButton :label="'Conversas'" :isHide="isHide">
          <font-awesome-icon :icon="['fas', 'comment']" />
        </SidebarButton>
        <SidebarButton :label="'Calendário'" :isHide="isHide">
          <font-awesome-icon :icon="['far', 'calendar']" />
        </SidebarButton>
        <SidebarButton :label="'Integrações'" :isHide="isHide">
          <font-awesome-icon :icon="['fas', 'layer-group']" />
        </SidebarButton>
      </template>
      <template v-if="!isAdmin">
        <SidebarButton
          :label="'Ofertas'"
          :isHide="isHide"
          :to="'/customer/offers'"
        >
          <font-awesome-icon :icon="['fas', 'chart-simple']" />
        </SidebarButton>
        <SidebarButton
          :label="'Histórico'"
          :isHide="isHide"
          :to="'/admin/products'"
        >
          <font-awesome-icon :icon="['fas', 'tags']" />
        </SidebarButton>
      </template>

      <span class="text-sm text-zinc-500 mt-10" v-if="!isHide">
        Minha Conta
      </span>
      <SidebarButton :label="'Configurações'" :isHide="isHide">
        <font-awesome-icon :icon="['fas', 'sliders']" />
      </SidebarButton>
      <SidebarButton :label="'Sair'" :isHide="isHide" :to="'/login'">
        <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
      </SidebarButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const isHide = ref<boolean>(false);
const isAdmin = ref<boolean>(true);

function onHandleBar() {
  isHide.value = !isHide.value;
}
</script>

<style lang="scss" scoped></style>
