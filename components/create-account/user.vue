<template>
  <Form class="h-full flex justify-center items-center mb-20" :validation-schema="schema" v-on:invalid-submit="handleErrors" @submit="onSubmit">
    <div class="w-full md:w-1/2 h-full justify-center flex flex-col">
      <div class="flex justify-center mt-2">
        <Logo />
      </div>
      <h1 class="text-3xl text-center">Bem vindo!</h1>
      <span class="text-lg text-zinc-700 text-center"> Preencha o formulário abaixo para criar seu acesso. </span>

      <DefaultInput :label="'Name'" :type="'text'" :field="'name'" />
      <DefaultFormError :name="'name'" v-if="hasError.name" />

      <DefaultInput :label="'E-mail'" :type="'text'" :field="'email'">
        <template #prepend>
          <font-awesome-icon :icon="['far', 'envelope']" class="text-zinc-900 rounded-full" />
        </template>
      </DefaultInput>
      <DefaultFormError :name="'email'" v-if="hasError.email" />

      <DefaultInput :label="'Senha'" :type="isPass ? 'password' : 'text'" :field="'password'">
        <template #prepend>
          <font-awesome-icon :icon="['fas', 'lock']" class="text-zinc-900 rounded-full cursor-pointer" @click="onHandlePass" />
        </template>
      </DefaultInput>
      <DefaultFormError :name="'password'" v-if="hasError.password" />

      <DefaultInput :label="'Confirmar Senha'" :type="isConfirmPass ? 'password' : 'text'" :field="'confirmPass'">
        <template #prepend>
          <font-awesome-icon :icon="['fas', 'lock']" class="text-zinc-900 rounded-full cursor-pointer" @click="onHandleConfirmPass" />
        </template>
      </DefaultInput>
      <DefaultFormError :name="'confirmPass'" v-if="hasError.confirmPass" />

      <DefaultButton :label="'AVANÇAR'" :fill="true" class="mt-5" :type="'submit'" />
      <ButtonGoogle />
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const store = useCreateAccount();

interface Iform {
  name?: string;
  email?: string;
  password?: string;
  confirmPass?: string;
}

const hasError = ref<Iform>({});

const schema = toTypedSchema(
  zod.object({
    name: zod.string().min(8, { message: 'Nome muito curto' }).default(''),
    email: zod.string().email({ message: 'E-mail inválido' }).default(''),
    password: zod.string().min(6, { message: 'Senha é obrigatório' }).default(''),
    confirmPass: zod.string().min(6, { message: 'Senha é obrigatório' }).default(''),
  })
);


const isPass = ref(true);
const isConfirmPass = ref(true);

function onHandlePass() {
  isPass.value = !isPass.value;
}

function onHandleConfirmPass() {
  isConfirmPass.value = !isConfirmPass.value;
}

function handleErrors({ errors }: any) {
  hasError.value = errors;
}

function onSubmit(form: Iform) {
  store.payload.email = form.email!;
  store.payload.password = form.password!;
  store.onHandleStep('next');
}
</script>

<style lang="scss" scoped></style>
