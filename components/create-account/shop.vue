<template>
  <Form class="h-full flex justify-center">
    <div class="w-full md:w-1/2 h-full justify-center flex flex-col">
      <div class="flex justify-end mt-3 mb-20">
        <font-awesome-icon
          :icon="['far', 'square']"
          @click="store.onHandleStep('prev')"
          class="cursor-pointer"
        />
        <font-awesome-icon
          :icon="['fas', 'square']"
          class="ml-1 cursor-pointer"
          @click="store.onHandleStep('next')"
        />
      </div>
      <h1 class="text-3xl text-center">Bem vindo!</h1>
      <span class="text-lg text-zinc-700 text-center">
        Preencha o formulário abaixo com os detalhes da sua loja.
      </span>
      <label for="" class="mb-2 mt-10 font-semibold">Nome da loja</label>
      <div class="flex items-center border px-5 border-zinc-300  bg-white">
        <font-awesome-icon
          :icon="['far', 'user']"
          class="text-zinc-900 rounded-full"
        />
        <Field name="email" class="p-3 rounded-xl outline-none w-full" />
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        <div class="col-span-1 md:col-span-1">
          <label for="" class="mb-2 mt-5 font-semibold">CEP</label>
          <div class="flex items-center border px-5 border-zinc-300  bg-white">
            <font-awesome-icon
              :icon="['fas', 'location-dot']"
              class="text-zinc-900 rounded-full"
            />
            <Field name="email" class="p-3 rounded-xl outline-none w-full" />
          </div>
        </div>

        <div class="col-span-1 md:col-span-2">
          <label for="" class="mb-2 mt-5 font-semibold">Estado</label>
          <div class="flex items-center border px-5 border-zinc-300  bg-white">
            <font-awesome-icon
              :icon="['fas', 'location-dot']"
              class="text-zinc-900 rounded-full"
            />
            <Field name="email" class="p-3 rounded-xl outline-none w-full" />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        <div class="col-span-1 md:col-span-1">
          <label for="" class="mb-2 mt-5 font-semibold">Número</label>
          <div class="flex items-center border px-5 border-zinc-300  bg-white">
            <Field name="email" class="p-3 rounded-xl outline-none w-full" />
          </div>
        </div>

        <div class="col-span-1 md:col-span-2">
          <label for="" class="mb-2 mt-5 font-semibold">Cidade</label>
          <div class="flex items-center border px-5 border-zinc-300  bg-white">
            <Field name="email" class="p-3 rounded-xl outline-none w-full" />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        <div class="col-span-1 md:col-span-1">
          <label for="" class="mb-2 mt-5 font-semibold">CPF / CNPJ</label>
          <div class="flex items-center border px-5 border-zinc-300  bg-white">
            <Field name="email" class="p-3 rounded-xl outline-none w-full" />
          </div>
        </div>

        <div class="col-span-1 md:col-span-2">
          <label for="" class="mb-2 mt-5 font-semibold">Rua</label>
          <div class="flex items-center border px-5 border-zinc-300  bg-white">
            <Field name="email" class="p-3 rounded-xl outline-none w-full" />
          </div>
        </div>
      </div>

      <DefaultButton :label="'AVANÇAR'" :fill="true" class="mt-10" :to="'/'" />
      <ButtonGoogle />
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
const store = useCreateAccount();
const isPass = ref(false);

function onHandlePass() {
  isPass.value = !isPass.value;
}
</script>

<style lang="scss" scoped></style>
