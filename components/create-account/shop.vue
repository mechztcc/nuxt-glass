<template>
  <Form class="h-full flex justify-center" :validation-schema="schema" @submit="onSubmit">
    <div class="w-full md:w-1/2 h-full justify-center flex flex-col">
      <div class="flex justify-center mt-10">
        <Logo />
      </div>
      <h1 class="text-3xl text-center">Bem vindo!</h1>
      <span class="text-lg text-zinc-700 text-center"> Preencha o formulário abaixo com os detalhes da sua loja. </span>

      <DefaultInput :label="'Nome da Loja'" :type="'text'" :field="'shopName'" />

      <div class="grid grid-cols-1">
        <div class="flex flex-col">
          <DefaultInput :label="'CPF / CNPJ'" :type="'text'" :field="'document'" />
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
        <div class="flex flex-col col-span-1">
          <DefaultSelectInput :field="'state'" :label="'Estado'" :options="states" />
        </div>

        <div class="col-span-2 flex flex-col">
          <DefaultInput :label="'CEP'" :type="'text'" :field="'zip'" />
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
        <div class="flex flex-col">
          <DefaultInput :label="'Número'" :type="'text'" :field="'number'" />
        </div>

        <div class="flex flex-col col-span-2">
          <DefaultInput :label="'Cidade'" :type="'text'" :field="'city'" />
        </div>
      </div>

      <div class="grid grid-cols-1 gap-5">
        <div class="flex flex-col">
          <DefaultInput :label="'Rua'" :type="'text'" :field="'street'" />
        </div>
      </div>

      <DefaultButton :label="'AVANÇAR'" :fill="true" class="mt-10" :type="'submit'" />
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const store = useCreateAccount();
const states = ['PE', 'AL', 'CE', 'SE', 'SC'];

interface Iform {
  shopName?: string;
  zip?: string;
  street?: string;
  city?: string;
  state?: string;
  document?: string;
  number?: string;
}

const isPass = ref(false);
function onHandlePass() {
  isPass.value = !isPass.value;
}

const schema = toTypedSchema(
  zod.object({
    shopName: zod.string().min(8, { message: 'Nome muito curto' }).default(''),
    zip: zod.string(),
    street: zod.string().min(6, { message: 'Rua é obrigatório' }).default(''),
    city: zod.string(),
    state: zod.string(),
    document: zod.string().min(11, { message: 'Inválido' }).default(''),
    number: zod.string(),
  })
);

const { execute } = useFetchAuth('users', { immediate: false, method: 'post', body: store.payload, successMsg: 'Usuário registrado com sucesso!' });

async function onSubmit(form: Iform) {
  store.payload.store.city = form.city!;
  store.payload.store.name = form.shopName!;
  store.payload.store.document = form.document!;
  store.payload.store.number = form.number!;
  store.payload.store.state = form.state!;
  store.payload.store.street = form.street!;
  store.payload.store.zipcode = form.zip!;

  await execute();
}
</script>

<style lang="scss" scoped></style>
