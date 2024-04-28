<template>
  <div class="flex justify-center mt-10 mx-5">
    <div class="grid grid-cols-2 gap-5 items-start">
      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Nome</span>
      </div>
      <div class="col-span-1">
        <DefaultInput :type="'text'" :name="'name'">
          <template #prepend>
            <font-awesome-icon :icon="['fas', 'pen']" class="dark:text-zinc-50" />
          </template>
        </DefaultInput>
      </div>

      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Gênero</span>
      </div>
      <div class="col-span-1">
        <div class="flex">
          <Field type="radio" name="gender"></Field>
          <span class="dark:text-zinc-50 mx-2">Masculino</span>
        </div>
        <div class="flex">
          <Field type="radio" name="gender"></Field>
          <span class="dark:text-zinc-50 mx-2">Feminino</span>
        </div>
        <div class="flex">
          <Field type="radio" name="gender"></Field>
          <span class="dark:text-zinc-50 mx-2">Unisex</span>
        </div>
      </div>

      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Armação</span>
      </div>
      <div class="col-span-1">
        <div class="flex">
          <Field type="radio" name="gender"></Field>
          <span class="dark:text-zinc-50 mx-2">Arredondada</span>
        </div>
        <div class="flex">
          <Field type="radio" name="gender"></Field>
          <span class="dark:text-zinc-50 mx-2">Quadrada</span>
        </div>
      </div>

      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Cor</span>
      </div>

      <div class="col-span-1">
        <DefaultColorsSelect />
      </div>

      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Marca</span>
      </div>

      <div class="col-span-1">
        <DefaultInput :name="'mark'" :type="'text'">
          <template #prepend>
            <font-awesome-icon :icon="['fas', 'tag']" class="dark:text-zinc-50" />
          </template>
        </DefaultInput>
      </div>

      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Material</span>
      </div>

      <div class="col-span-1">
        <DefaultInput :name="'mark'" :type="'text'">
          <template #prepend>
            <font-awesome-icon :icon="['fas', 'glasses']" class="dark:text-zinc-50" />
          </template>
        </DefaultInput>
      </div>

      <div class="col-span-1">
        <div class="flex items-center">
          <span class="dark:text-zinc-50 font-bold">Código do produto</span>
          <DefaultTooltip :tooltip="'Aqui vai uma mensagem  de ajuda para o usuário'" />
        </div>
      </div>

      <div class="col-span-1">
        <DefaultInput :name="'mark'" :type="'text'">
          <template #prepend>
            <font-awesome-icon :icon="['fas', 'hashtag']" class="dark:text-zinc-50" />
          </template>
        </DefaultInput>
      </div>

      <div class="col-span-2 mt-5">
        <span class="dark:text-zinc-50 font-bold">Descrição</span>
        <Field as="textarea" name="description" class="w-full dark:bg-zinc-900 mt-5" rows="10" />
      </div>

      <div class="col-span-2 mt-5">
        <DefaultButton label="Avançar" :fill="true" />
        <div class="flex justify-center mt-5">
          <span class="dark:text-zinc-50 hover:text-teal-400 cursor-pointer">Voltar</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Field, ErrorMessage } from 'vee-validate';
</script>

<style scoped></style>
