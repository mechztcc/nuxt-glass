<template>
  <div class="rounded bg-zinc-50 p-5 hover:shadow-md cursor-pointer">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
      <div class="col-span-1 md:col-span-1 lg:col-span-1">
        <img
          src="~assets/imgs/img4.png"
          alt=""
          class="p-2 rounded-full bg-zinc-50 border-4 border-zinc-200"
        />
      </div>
      <div class="col-span-1 md:col-span-1 lg:col-span-4">
        <span class="text-xl">Óticas guaraná</span>
        <div class="flex">
          <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          <font-awesome-icon :icon="['fas', 'star']" class="text-yellow-400" />
          <font-awesome-icon :icon="['far', 'star']" />
          <font-awesome-icon :icon="['far', 'star']" />
        </div>
        <div class="flex items-center mt-3 text-green-400">
          <font-awesome-icon :icon="['fab', 'pix']" />
          <span class=" mx-1">R$ 599,00</span>
        </div>

        <div class="flex items-center">
          <font-awesome-icon :icon="['far', 'credit-card']" />
          <span class="text-zinc-700 mx-1">10x de R$ 59,00</span>
        </div>

        <div class="flex items-center">
          <font-awesome-icon :icon="['far', 'calendar']" />
          <span class="text-zinc-700 mx-1">Termina em 10 dias</span>
        </div>

        <div class="flex items-center cursor-pointer">
          <font-awesome-icon :icon="['fas', 'paperclip']" />
          <span class="text-zinc-700 mx-1">Exame</span>
        </div>

        <div class="flex justify-end">
          <DefaultButton :label="'RECUSAR'" />
          <DefaultButton :label="'ACEITAR'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
img {
  min-height: 60px;
  max-height: 60px;
}
</style>
