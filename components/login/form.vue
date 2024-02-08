<template>
  <Form class="flex flex-col justify-between h-full w-full">
    <div class="flex justify-center mt-5"></div>
    <div class="flex flex-col">
      <div class="flex justify-center mb-2">
        <Logo />
      </div>
      <h1 class="text-3xl text-center">Bem vindo!</h1>
      <span class="text-lg text-zinc-700 text-center"> Preencha o formulário abaixo para acessar sua conta. </span>

      <DefaultInput :label="'Senha'" :type="'text'" :field="'email'">
        <template #prepend>
          <font-awesome-icon :icon="['far', 'envelope']" class="text-zinc-900 rounded-full" />
        </template>
      </DefaultInput>

      <DefaultInput :label="'Senha'" :type="isPass ? 'password' : 'text'" :field="'password'">
        <template #prepend>
          <font-awesome-icon :icon="['fas', 'lock']" class="text-zinc-900 rounded-full cursor-pointer" @click="onHandlePass" />
        </template>
      </DefaultInput>

      <span class="text-zinc-700 text-end mt-2 cursor-pointer"> Esqueceu a senha? </span>
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
import { Form, Field, ErrorMessage } from 'vee-validate';

const isPass = ref(true);

function onHandlePass() {
  isPass.value = !isPass.value;
}
</script>

<style lang="scss" scoped></style>
