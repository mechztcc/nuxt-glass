<template>
  <Form class="flex flex-col justify-between h-full w-full">
    <div class="flex mt-5"></div>
    <div class="flex flex-col">
      <h1 class="text-3xl text-center">Bem vindo!</h1>
      <span class="text-lg text-zinc-700 text-center">
        Preencha o formulário abaixo para acessar sua conta.
      </span>

      <label for="" class="mb-2 mt-10 font-semibold">E-mail</label>
      <div class="flex items-center border px-5 w-full border-zinc-300">
        <font-awesome-icon
          :icon="['far', 'envelope']"
          class="text-zinc-900 rounded-full"
        />
        <Field name="email" class="p-3 rounded-xl outline-none w-full" />
      </div>

      <label for="" class="mb-2 mt-10 font-semibold">Senha</label>
      <div class="flex items-center border px-5 w-full border-zinc-300">
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
      <span class="text-zinc-700 text-end mt-2 cursor-pointer">
        Esqueceu a senha?
      </span>
      <DefaultButton :label="'ENTRAR'" :fill="true" class="mt-5" :to="'/'" />
      <ButtonGoogle />
    </div>
    <NuxtLink :to="'/create-account'" class="text-zinc-700 mb-5 text-center">
      <span>
        Não possui uma conta?
        <b class="cursor-pointer">Registrar</b>
      </span>
    </NuxtLink>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";

const isPass = ref(true);

function onHandlePass() {
  isPass.value = !isPass.value;
}
</script>

<style lang="scss" scoped></style>
