<template>
  <div class="grid grid-cols-1 md:grid-cols-3">
    <div class="col-span-1 md:col-span-1 md:col-start-2 mt-10">
      <span class="font-bold">Informações do produto</span>

      <div class="flex flex-col">
        <DefaultInput :label="'Nome'" :field="'name'" :type="'text'" />
        <Field label="Descrição" as="textarea" name="textarea" cols="30" rows="10" class="my-5"></Field>

        <span class="text-xl">Gênero da armação</span>
        <div class="flex">
          <DefaultSelectedButton :label="'Masculino'" />
          <DefaultSelectedButton :label="'Feminino'" class="mx-3" />
          <DefaultSelectedButton :label="'Unisex'" />
        </div>

        <span class="text-xl">Cor</span>
        <div class="flex">
          <DefaultSelectedButton :label="'Masculino'" />
          <DefaultSelectedButton :label="'Feminino'" class="mx-3" />
          <DefaultSelectedButton :label="'Unisex'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Field, ErrorMessage } from 'vee-validate';
</script>

<style scoped></style>
