<template>
  <Form class="flex flex-col justify-between h-full w-full dark:bg-zinc-800" :validation-schema="schema" @submit="onSubmit">
    <div class="flex justify-center mt-5"></div>
    <div class="flex flex-col">
      <div class="flex justify-center mb-2">
        <Logo />
      </div>
      <h1 class="text-3xl text-center dark:text-zinc-50">Bem vindo!</h1>
      <span class="text-lg text-zinc-700 dark:text-zinc-50 text-center"> Preencha o formulário abaixo para acessar sua conta. </span>

      <DefaultInput :label="'E-mail'" :type="'text'" :field="'email'">
        <template #prepend>
          <font-awesome-icon :icon="['far', 'envelope']" class="text-zinc-900 dark:text-zinc-50 rounded-full" />
        </template>
      </DefaultInput>

      <DefaultInput :label="'Senha'" :type="isPass ? 'password' : 'text'" :field="'password'">
        <template #prepend>
          <font-awesome-icon :icon="['fas', 'lock']" class="text-zinc-900 dark:text-zinc-50 rounded-full cursor-pointer" @click="onHandlePass" />
        </template>
      </DefaultInput>

      <span class="text-zinc-700 dark:text-zinc-50 text-end mt-2 cursor-pointer"> Esqueceu a senha? </span>
      <DefaultButton :label="'ENTRAR'" :fill="true" class="mt-5" :type="'submit'" />
      <ButtonGoogle />
    </div>
    <NuxtLink :to="'/create-account'" class="text-zinc-700 dark:text-zinc-50 mb-5 text-center">
      <span>
        Não possui uma conta?
        <b class="cursor-pointer">Registrar</b>
      </span>
    </NuxtLink>
  </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const cookie = useCookie('credentials');
const router = useRouter();


const schema = toTypedSchema(
  zod.object({
    email: zod.string().email({ message: 'E-mail inválido' }),
    password: zod.string().min(6, { message: 'Senha é obrigatório' }),
  })
);

const payload = ref({
  email: '',
  password: '',
});

const body = computed(() => {
  return payload.value;
});

const { data, pending, execute } = useFetchAuth('auth', {
  method: 'post',
  immediate: false,
  body,
  successMsg: 'Login Realizado com sucesso!',
});


const isPass = ref(true);
function onHandlePass() {
  isPass.value = !isPass.value;
}

async function onSubmit(v: any) {
  payload.value = v;
  await execute();
  router.push(data.value.redirectTo)

  localStorage.setItem('credentials', JSON.stringify(data.value));
  cookie.value = JSON.stringify(data.value);
}
</script>

<style lang="scss" scoped></style>
