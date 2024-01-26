<template>
  <div class="flex flex-col h-full justify-center">
    <h1 class="text-3xl mb-10 font-semibold">NOVO ACESSO</h1>
    <div class="flex justify-center flex-col">
      <div class="flex items-center">
        <font-awesome-icon
          :icon="['fas', '1']"
          class="p-1 px-2 bg-zinc-900 text-white rounded-full w-fit"
        />
        <span class="mx-2 text-xl">Criar acesso</span>
      </div>
      <span class="text-sm text-zinc-700 mt-2">
        Preencha os campos que você usara para acessar o sistema.
      </span>
    </div>

    <div class="flex justify-center flex-col mt-5">
      <div class="flex items-center">
        <font-awesome-icon
          :icon="['fas', '2']"
          class="p-1 px-2 bg-zinc-900 text-white rounded-full w-fit"
        />
        <span class="mx-2 text-xl">Informações da loja</span>
      </div>
      <span class="text-sm text-zinc-700 mt-2">
        Informe os dados que sobre a sua loja, isso vai ajudar aos usuários te
        reconhecerem.
      </span>

      <NuxtLink
        :to="'/login'"
        class="flex items-center justify-end mt-10 cursor-pointer "
      >
        <div class="flex items-center w-fit hover:bg-zinc-900 px-2 py-1 hover:text-white">
          <font-awesome-icon :icon="['fas', 'circle-chevron-left']" />
          <span class="mx-2">VOLTAR</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
