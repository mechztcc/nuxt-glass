<template>
  <div class="flex flex-col justify-center h-screen px-10 md:px-20">
    <h1 class="text-3xl text-center">Novo Pedido!</h1>
    <span class="text-lg text-zinc-700 text-center">
      Escolha entre Óculos de sol, de gráu ou lentes de contato
    </span>

    <div class="grid grid-cols-3 mt-10">
      <div class="col-span-1">
        <div class="flex items-center justify-evenly border py-3">
          <font-awesome-icon :icon="['far', 'square']" />
          <span class="mx-5 text-lg">Óculos de sol</span>
        </div>
      </div>
      <div class="col-span-1">
        <div
          class="flex items-center justify-evenly border py-3 mx-5 bg-zinc-900 rounded text-white"
        >
          <font-awesome-icon :icon="['fas', 'check-to-slot']" />
          <span class="mx-5 text-lg">Óculos de gráu</span>
        </div>
      </div>
      <div class="col-span-1">
        <div class="flex items-center justify-evenly border py-3">
          <font-awesome-icon :icon="['far', 'square']" />
          <span class="mx-5 text-lg">Lentes de contato</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
