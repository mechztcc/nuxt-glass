<template>
    <div class="flex flex-col h-full justify-center">
      <h1 class="text-3xl mb-10 font-semibold">Novo Pedido</h1>
      <div class="flex justify-center flex-col">
        <div class="flex items-center">
          <font-awesome-icon
            :icon="['fas', '1']"
            class="p-1 px-2 bg-zinc-900 text-white rounded w-fit"
            v-if="store.step == 1"
          />
          <font-awesome-icon
            :icon="['fas', 'check']"
            class="p-1 px-1 bg-zinc-900 text-white rounded w-fit"
            v-if="store.step == 2"
          />
          <span class="mx-2 text-xl">Tipo de Óculos</span>
        </div>
        <span class="text-sm text-zinc-700 mt-2">
          Escolha entre Óculos de sol, de gráu ou lentes de contato
        </span>
      </div>
  
      <div class="flex justify-center flex-col mt-5">
        <div class="flex items-center">
          <font-awesome-icon
            :icon="['fas', '2']"
            class="p-1 px-2 bg-zinc-900 text-white rounded w-fit"
          />
          <span class="mx-2 text-xl">Informações do Óculos</span>
        </div>
        <span class="text-sm text-zinc-700 mt-2">
          Infome quais tipos de armações, modelos etc.
        </span>
  
        <div class="flex items-center mt-5">
          <font-awesome-icon
            :icon="['fas', '3']"
            class="p-1 px-2 bg-zinc-900 text-white rounded w-fit"
          />
          <span class="mx-2 text-xl">Escolha a Região</span>
        </div>
        <span class="text-sm text-zinc-700 mt-2">
          Nos diga de onde você pretente receber ofertas
        </span>
  
  
        <NuxtLink
          :to="'/customer/offers'"
          class="flex items-center justify-end mt-10 cursor-pointer"
        >
          <div
            class="flex items-center w-fit hover:bg-zinc-900 px-2 py-1 hover:text-white"
          >
            <font-awesome-icon :icon="['fas', 'square-arrow-up-right']" />
            <span class="mx-2">VOLTAR</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const store = useCreateAccount();
  </script>
  
  <style lang="scss" scoped></style>
u  