<template>
  <div class="rounded p-5 flex flex-col bg-zinc-50 my-3 mx-3">
    <div class="flex items-start justify-between">
      <img
        src="https://img.freepik.com/free-photo/full-shot-plus-sized-woman-stretching_23-2150172315.jpg?w=1380"
        alt=""
        class="rounded-full h-20 w-20 object-cover"
      />
      <Badge :label="'Em andamento'"></Badge>
    </div>
    <span class="text-xl font-bold">Claudia farias</span>
    <div class="flex mt-2">
      <span>PE - Recife</span>
      <span class="mx-2">PE - Olinda</span>
    </div>
    <span>Óculos de sol</span>
    <div class="flex">
      <span>Receber em casa</span>
      <span class="mx-2">Retirar no local</span>
    </div>
    <div class="flex">
      <span>À vista no PIX</span>
    </div>
    <div class="flex">
      <span>Entre R$ 500,00 e R$ 1.000,00</span>
    </div>
    <span class="mt-2">Recebeu 28 lances</span>
    <span class="mt-2"> Busco óculos de sol, com armação resistente! Preferencia na cor PRETA. </span>

    <hr class="my-2" />
    <div class="flex justify-between">
      <div class="flex items-center mt-2">
        <font-awesome-icon :icon="['far', 'clock']" />
        <span class="mx-2">Termina em 18 horas e 21 min</span>
      </div>

      <div class="flex">
        <DefaultButton class="mx-2">
          <font-awesome-icon :icon="['fas', 'flag']" />
        </DefaultButton>
        <DefaultButton>
          <font-awesome-icon :icon="['fas', 'paperclip']" />
        </DefaultButton>
        <DefaultButton class="mx-2">
          <font-awesome-icon :icon="['fas', 'comment-dollar']" />
        </DefaultButton>
        <DefaultButton>
          <font-awesome-icon :icon="['fas', 'trash']" />
        </DefaultButton>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
