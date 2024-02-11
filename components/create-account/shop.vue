<template>
  <Form class="h-full flex justify-center" :validation-schema="schema" @invalid-submit="handleErrors" @submit="onSubmit">
    <div class="w-full md:w-1/2 h-full justify-center flex flex-col">
      <div class="flex justify-center mt-10">
        <Logo />
      </div>
      <h1 class="text-3xl text-center">Bem vindo!</h1>
      <span class="text-lg text-zinc-700 text-center"> Preencha o formulário abaixo com os detalhes da sua loja. </span>

      <DefaultInput :label="'Nome da Loja'" :type="'text'" :field="'shopName'" :mask="'currency'" />
      <DefaultFormError :name="'shopName'" v-if="hasError.shopName" />

      <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
        <div class="flex flex-col col-span-1">
          <DefaultInput :label="'CEP'" :type="'text'" :field="'zip'" :mask="'currency'" />
          <DefaultFormError :name="'zip'" v-if="hasError.zip" />
        </div>

        <div class="col-span-2 flex flex-col">
          <DefaultInput :label="'Estado'" :type="'text'" :field="'state'" />
          <DefaultFormError :name="'state'" v-if="hasError.state" />
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
        <div class="flex flex-col">
          <DefaultInput :label="'Número'" :type="'text'" :field="'number'" />
          <DefaultFormError :name="'number'" v-if="hasError.number" />
        </div>

        <div class="flex flex-col col-span-2">
          <DefaultInput :label="'Cidade'" :type="'text'" :field="'city'" />
          <DefaultFormError :name="'city'" v-if="hasError.city" />
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
        <div class="flex flex-col">
          <DefaultInput :label="'CPF / CNPJ'" :type="'text'" :field="'document'" />
          <DefaultFormError :name="'document'" v-if="hasError.document" />
        </div>

        <div class="flex flex-col col-span-2">
          <DefaultInput :label="'Rua'" :type="'text'" :field="'street'" />
          <DefaultFormError :name="'street'" v-if="hasError.street" />
        </div>
      </div>

      <DefaultButton :label="'AVANÇAR'" :fill="true" class="mt-10" @pressed="store.onHandleStep('next')" />
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const store = useCreateAccount();

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
const hasError = ref<Iform>({});

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

function onHandlePass() {
  isPass.value = !isPass.value;
}

function handleErrors({ errors }: any) {
  hasError.value = errors;
}

function onSubmit(form: Iform) {
  store.payload.store.city = form.city!;
  store.payload.store.document = form.document!;
  store.payload.store.number = form.number!;
  store.payload.store.state = form.state!;
  store.payload.store.street = form.street!;
  store.payload.store.zipcode = form.zip!;

  store.onHandleStep('next');
}
</script>

<style lang="scss" scoped></style>
