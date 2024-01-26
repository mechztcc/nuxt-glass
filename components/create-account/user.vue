<template>
  <Form class="h-full flex justify-center">
    <div class="w-full md:w-1/2 h-full justify-center flex flex-col">
      <div class="flex justify-end mt-3 mb-20">
        <font-awesome-icon
          :icon="['fas', 'square']"
          @click="store.onHandleStep('prev')"
          class="cursor-pointer"
        />
        <font-awesome-icon
          :icon="['far', 'square']"
          class="ml-1 text-zinc-500 cursor-pointer"
          @click="store.onHandleStep('next')"
        />
      </div>
      <h1 class="text-3xl text-center">Bem vindo!</h1>
      <span class="text-lg text-zinc-700 text-center">
        Preencha o formulário abaixo para criar seu acesso.
      </span>
      <label for="" class="mb-2 mt-10 font-semibold">Nome</label>
      <div class="flex items-center border px-5 border-zinc-300">
        <font-awesome-icon
          :icon="['far', 'user']"
          class="text-zinc-900 rounded-full"
        />
        <Field name="email" class="p-3 rounded-xl outline-none w-full" />
      </div>

      <label for="" class="mb-2 mt-5 font-semibold">E-mail</label>
      <div class="flex items-center border px-5 border-zinc-300">
        <font-awesome-icon
          :icon="['far', 'envelope']"
          class="text-zinc-900 rounded-full"
        />
        <Field name="email" class="p-3 rounded-xl outline-none w-full" />
      </div>

      <label for="" class="mb-2 mt-5 font-semibold">Senha</label>
      <div class="flex items-center border px-5 border-zinc-300">
        <font-awesome-icon
          :icon="['fas', 'lock']"
          class="text-zinc-900 rounded-full cursor-pointer"
          @click="onHandlePass"
        />
        <Field
          name="password"
          :type="!isPass ? 'text' : 'password'"
          class="p-3 rounded-xl outline-none w-full"
        />
      </div>

      <label for="" class="mb-2 mt-5 font-semibold">Confirmar senha</label>
      <div class="flex items-center border px-5 border-zinc-300 mb-5">
        <Field
          name="password"
          :type="!isPass ? 'text' : 'password'"
          class="p-3 rounded-xl outline-none w-full"
        />
      </div>
      <DefaultButton :label="'AVANÇAR'" :fill="true" class="mt-5" :to="'/'" />
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
