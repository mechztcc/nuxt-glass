<template>
  <div class="grid grid-cols-1 md:grid-cols-2 header">
    <div class="col-span-1 md:col-span-1">
      <div class="flex flex-col items-start justify-center w-full h-full p-8">
        <h1 class="text-6xl text-zinc-800">
          Compre ou Venda seus Óculos de sol ou de gráu sem sair de casa.
        </h1>
        <div class="flex flex-col mb-5">
          <span class="text-zinc-700 text-2xl mt-3">
            Precisando de óculos de gráu? Informe sua receita médica e espere as
            lojas entrarem em contato com você. Você recebe os óculos no
            conforto da sua casa.
          </span>
        </div>
        <div class="flex justify-start w-full">
          <DefaultButton :label="'Quero fazer meus óculos'" :fill="true" />
        </div>
      </div>
    </div>
    <div class="col-span-1 md:col-span-1">
      <div class="flex w-full h-full relative justify-center items-center">
        <div
          class="absolute flex justify-between bottom-1/2 text-white w-full px-10"
        >
          <font-awesome-icon
            class="cursor-pointer"
            :icon="['fas', 'circle-chevron-left']"
            :size="'3x'"
          />
          <font-awesome-icon
            class="cursor-pointer"
            :icon="['fas', 'circle-chevron-right']"
            :size="'3x'"
          />
        </div>
        <img class="" src="~assets/imgs/img1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="css" scoped>
.header {
  min-height: 40vh;
}


</style>
