<template>
  <Form class="flex justify-center mt-10 mx-5"" :validation-schema="schema">
    <div class="grid grid-cols-2 gap-5 items-start">
      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Nome</span>
      </div>
      <div class="col-span-1">
        <DefaultInput :type="'text'" :field="'name'" v-model="store.payload.name">
          <template #prepend>
            <font-awesome-icon :icon="['fas', 'pen']" class="dark:text-zinc-50" />
          </template>
        </DefaultInput>
      </div>

      <div class="col-span-1">
        <div class="flex items-center">
          <span class="dark:text-zinc-50 font-bold">Código do produto</span>
          <DefaultTooltip :tooltip="'Aqui vai uma mensagem  de ajuda para o usuário'"/>
        </div>
      </div>

      <div class="col-span-1">
        <DefaultInput :field="'code'" :type="'text'" v-model="store.payload.code">
          <template #prepend>
            <font-awesome-icon :icon="['fas', 'hashtag']" class="dark:text-zinc-50" />
          </template>
        </DefaultInput>
      </div>

      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Gênero</span>
      </div>
      <div class="col-span-1">
        <div class="flex">
          <Field type="radio" name="gender" v-model="store.payload.gender"></Field>
          <span class="dark:text-zinc-50 mx-2">Masculino</span>
        </div>
        <div class="flex">
          <Field type="radio" name="gender" v-model="store.payload.gender"></Field>
          <span class="dark:text-zinc-50 mx-2">Feminino</span>
        </div>
        <div class="flex">
          <Field type="radio" name="gender" v-model="store.payload.gender"></Field>
          <span class="dark:text-zinc-50 mx-2">Unisex</span>
        </div>
      </div>

      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Armação</span>
      </div>
      <div class="col-span-1">
        <div class="flex">
          <Field type="radio" name="glassType" v-model="store.payload.glassType"></Field>
          <span class="dark:text-zinc-50 mx-2">Arredondada</span>
        </div>
        <div class="flex">
          <Field type="radio" name="glassType" v-model="store.payload.glassType"></Field>
          <span class="dark:text-zinc-50 mx-2">Quadrada</span>
        </div>
      </div>

      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Cor</span>
      </div>

      <div class="col-span-1">
        <DefaultColorsSelect v-model="store.payload.color" />
      </div>

      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Marca</span>
      </div>

      <div class="col-span-1">
        <DefaultInput :field="'brand'" :type="'text'" v-model="store.payload.brand">
          <template #prepend>
            <font-awesome-icon :icon="['fas', 'tag']" class="dark:text-zinc-50" />
          </template>
        </DefaultInput>
      </div>

      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Material das astes</span>
      </div>

      <div class="col-span-1">
        <DefaultInput :field="'mark'" :type="'text'" v-model="store.payload.material">
          <template #prepend>
            <font-awesome-icon :icon="['fas', 'glasses']" class="dark:text-zinc-50" />
          </template>
        </DefaultInput>
      </div>

      <div class="col-span-1">
        <div class="flex items-center">
          <span class="dark:text-zinc-50 font-bold">Peso</span>
          <DefaultTooltip :tooltip="'Peso total do produto sem embalagem'" />
        </div>
      </div>

      <div class="col-span-1">
        <DefaultInput :field="'weight'" :type="'text'" v-model="store.payload.weight">
          <template #prepend>
            <font-awesome-icon :icon="['fas', 'scale-balanced']" class="dark:text-zinc-50" />
          </template>
          <template #append>
            <span>g</span>
          </template>
        </DefaultInput>
      </div>

      <div class="col-span-1">
        <div class="flex items-center">
          <span class="dark:text-zinc-50 font-bold">Dimensões</span>
          <DefaultTooltip :tooltip="'Aqui vai uma mensagem de ajuda pro usuário.'" />
        </div>
      </div>

      <div class="col-span-1">
        <DefaultInput :field="'dimensions'" :type="'text'" v-model="store.payload.dimensions">
          <template #prepend>
            <font-awesome-icon :icon="['fas', 'ruler-combined']" class="dark:text-zinc-50" />
          </template>
          <template #append>
            <span>cm</span>
          </template>
        </DefaultInput>
      </div>

      <div class="col-span-2 mt-5">
        <span class="dark:text-zinc-50 font-bold">Descrição</span>
        <Field as="textarea" name="description" class="w-full dark:bg-zinc-900 mt-5 px-5 py-5" rows="10" v-model="store.payload.description" />
        <div class="flex justify-end">
          <span class="dark:text-zinc-50"> {{ store.descSize }} / 1024</span>
        </div>
      </div>

      <div class="col-span-2 mt-5">
        <DefaultButton label="Avançar" :fill="true" @pressed="store.onNext()" />
        <div class="flex justify-center mt-5">
          <span class="dark:text-zinc-50 hover:text-teal-400 cursor-pointer" @click="store.onPrev()">Voltar</span>
        </div>
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
  import { toTypedSchema } from '@vee-validate/zod';
import { Field, Form } from 'vee-validate';
import * as zod from 'zod';


  const store = useCreateProduct();

  const schema = toTypedSchema(
  zod.object({
    email: zod.string().email({ message: 'E-mail inválido' }),
    password: zod.string().min(6, { message: 'Senha é obrigatório' }),
  })
  );

</script>

<style scoped></style>
