<template>
  <Form class="flex justify-center mt-10 mx-5" :validation-schema="schema" @submit="onSubmit" @invalid-submit="test">
    <div class="grid grid-cols-2 gap-5 items-start" v-if="!pending">
      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Nome</span>
      </div>
      <div class="col-span-1">
        <DefaultInput :type="'text'" :field="'name'" :value="store.payload.name">
          <template #prepend>
            <font-awesome-icon :icon="['fas', 'pen']" class="dark:text-zinc-50" />
          </template>
        </DefaultInput>
      </div>

      <div class="col-span-1">
        <div class="flex items-center">
          <span class="dark:text-zinc-50 font-bold">Código do produto</span>
          <DefaultTooltip :tooltip="'Aqui vai uma mensagem  de ajuda para o usuário'" />
        </div>
      </div>

      <div class="col-span-1">
        <DefaultInput :field="'code'" :type="'text'" :value="store.payload.code">
          <template #prepend>
            <font-awesome-icon :icon="['fas', 'hashtag']" class="dark:text-zinc-50" />
          </template>
        </DefaultInput>
      </div>

      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Gênero</span>
      </div>
      <div class="col-span-1">
        <div class="flex" v-for="(item, index) in data.glassGender" :key="index">
          <Field name="gender" type="radio" :value="item.name" />
          <span class="dark:text-zinc-50 mx-2">{{ item.name }} </span>
        </div>
      </div>

      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Armação</span>
      </div>
      <div class="col-span-1">
        <div class="flex" v-for="(item, index) in data.glassType" :key="index">
          <Field name="glassType" type="radio" :value="item.name" />
          <span class="dark:text-zinc-50 mx-2">{{ item.name }}</span>
        </div>
      </div>

      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Cor</span>
      </div>

      <div class="col-span-1">
        <DefaultColorsSelect :checked="store.payload.color" @pressed="store.onUpdatePayload({ color: $event })" />
      </div>

      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Marca</span>
      </div>

      <div class="col-span-1">
        <DefaultInput :field="'brand'" :type="'text'" :value="store.payload.brand">
          <template #prepend>
            <font-awesome-icon :icon="['fas', 'tag']" class="dark:text-zinc-50" />
          </template>
        </DefaultInput>
      </div>

      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Material das astes</span>
      </div>

      <div class="col-span-1">
        <DefaultInput :field="'material'" :type="'text'" :value="store.payload.material">
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
        <DefaultInput :field="'weight'" :type="'text'" :value="store.payload.weight">
          <template #prepend>
            <font-awesome-icon :icon="['fas', 'scale-balanced']" class="dark:text-zinc-50" />
          </template>
          <template #append>
            <span>g</span>
          </template>
        </DefaultInput>
      </div>

      <hr class="my-3 col-span-2" />

      <div class="col-span-1">
        <div class="flex items-center">
          <span class="dark:text-zinc-50 font-bold">Dimensões</span>
          <DefaultTooltip :tooltip="'Aqui vai uma mensagem de ajuda pro usuário.'" />
        </div>
      </div>

      <div class="col-span-1">
        <div class="flex flex-col">
          <DefaultInput :field="'verticalRim'" :label="'Aro vertical'" :type="'text'">
            <template #prepend>
              <font-awesome-icon :icon="['fas', 'ruler-combined']" class="dark:text-zinc-50" />
            </template>
            <template #append>
              <span class="dark:text-zinc-50">cm</span>
            </template>
          </DefaultInput>

          <DefaultInput :field="'horizontalRim'" :label="'Aro Horizontal'" :type="'text'">
            <template #prepend>
              <font-awesome-icon :icon="['fas', 'ruler-combined']" class="dark:text-zinc-50" />
            </template>
            <template #append>
              <span class="dark:text-zinc-50">cm</span>
            </template>
          </DefaultInput>

          <DefaultInput :field="'bridge'" :label="'Ponte'" :type="'text'">
            <template #prepend>
              <font-awesome-icon :icon="['fas', 'ruler-combined']" class="dark:text-zinc-50" />
            </template>
            <template #append>
              <span class="dark:text-zinc-50">cm</span>
            </template>
          </DefaultInput>

          <DefaultInput :field="'bridgeWithRim'" :label="'Ponte + Aro'" :type="'text'">
            <template #prepend>
              <font-awesome-icon :icon="['fas', 'ruler-combined']" class="dark:text-zinc-50" />
            </template>
            <template #append>
              <span class="dark:text-zinc-50">cm</span>
            </template>
          </DefaultInput>
        </div>
      </div>

      <hr class="my-3 col-span-2" />

      <div class="col-span-2 mt-5">
        <span class="dark:text-zinc-50 font-bold">Descrição</span>
        <Field as="textarea" name="description" class="w-full dark:bg-zinc-900 mt-5 px-5 py-5" limit rows="10" />
        <div class="flex justify-end">
          <span class="dark:text-zinc-50"> {{ store.descSize }} / 1024</span>
        </div>
        <ErrorMessage name="description" class="mx-2 bg-red-200 rounded-full px-2 mt-2 text-red-600 justify-center flex items-center" />
      </div>

      <div class="col-span-2 mt-10">
        <DefaultButton :type="'submit'" :label="'Avançar'" :fill="true" />
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
  import { toTypedSchema } from '@vee-validate/zod';
  import { Field, Form, ErrorMessage } from 'vee-validate';
  import * as zod from 'zod';

  const store = useCreateProduct();
  const { data, pending } = useFetchAuth('orders/create-order-informations', {
    immediate: true,
    method: 'get',
  });


  const schema = toTypedSchema(
    zod.object({
      name: zod.string().min(10, { message: 'Nome muito curta' }),
      code: zod.string().min(6, { message: 'Código muito curta' }),
      gender: zod.string(),
      // color: zod.string(),
      glassType: zod.string(),
      brand: zod.string(),
      material: zod.string(),
      weight: zod.string(),
      bridge: zod.string(),
      bridgeWithRim: zod.string(),
      horizontalRim: zod.string(),
      verticalRim: zod.string(),
      description: zod.string().min(50, { message: 'Deve conter no mínimo 50 caracteres.' }),
    })
  );

  function onSubmit(value: any) {
    store.payload = {
      ...store.payload,
      ...value,
    };

    store.onNext();
  }

  function test(e: any) {}
</script>

<style scoped></style>
