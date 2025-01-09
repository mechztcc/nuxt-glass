<template>
  <NuxtLayout :name="'admin'">
    <div class="grid grid-cols-3 h-screen">
      <div class="col-span-1 col-start-2">
        <div class="d-flex border h-1/2 rounded-xl mb-5"></div>


        <div class="d-flex flex-col justify-center items-center text-center mb-5">
            <div class="d-flex border bg-transparent rounded-2xl"> 
              <div class="bg-teal-400 w-1/2 h-2 rounded-2xl"></div>
            </div>

            <small class="">Analisando imagem</small>
        </div>
        <DefaultButton label="Executar medição" :fill="true"/>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style></style>
