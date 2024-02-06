<template>
  <div class="flex flex-col">
    <div class="grid grid-cols-3 gap-5">
      <div class="col-span-3">
        <span class="text-zinc-700">Tipo de armação</span>
      </div>
      <div class="col-span-1">
        <div class="border p-5">
          <h1>Armação Arredondada</h1>
        </div>
      </div>
      <div class="col-span-1">
        <div class="border p-5">
          <h1>Armação Quadrada</h1>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-5 mt-20">
      <div class="col-span-3">
        <span class="text-zinc-700">Genero da armação</span>
      </div>
      <div class="col-span-1">
        <div class="border p-5">
          <h1>Masculino</h1>
        </div>
      </div>
      <div class="col-span-1">
        <div class="border p-5">
          <h1>Feminino</h1>
        </div>
      </div>
      <div class="col-span-1">
        <div class="border p-5">
          <h1>Unisex</h1>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 mt-20">
      <div class="col-span-1 col-start-3">
        <DefaultButton :label="'Avançar'" :fill="true" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
