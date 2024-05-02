<template>
  <Form class="flex justify-center mt-10 mx-5" :validation-schema="schema">
    <div class="grid grid-cols-2 gap-5 items-start">
      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Nome</span>
      </div>
      <div class="col-span-1">
        <DefaultInput :type="'text'" :field="'name'" :value="store.payload.name" @change="store.onUpdatePayload({ name: $event })">
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
        <DefaultInput :field="'code'" :type="'text'" :value="store.payload.code" @change="store.onUpdatePayload({ code: $event })">
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
          <input type="radio" :checked="store.onGetGender('masculino')" @change="store.onUpdatePayload({ gender: 'masculino' })" />
          <span class="dark:text-zinc-50 mx-2">Masculino</span>
        </div>
        <div class="flex">
          <input type="radio" :checked="store.onGetGender('feminino')" @change="store.onUpdatePayload({ gender: 'feminino' })" />
          <span class="dark:text-zinc-50 mx-2">Feminino</span>
        </div>
        <div class="flex">
          <input type="radio" :checked="store.onGetGender('unisex')" @change="store.onUpdatePayload({ gender: 'unisex' })" />
          <span class="dark:text-zinc-50 mx-2">Unisex</span>
        </div>
      </div>

      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Armação</span>
      </div>
      <div class="col-span-1">
        <div class="flex">
          <input type="radio" :checked="store.onGetGlassType('arredondada')" @change="store.onUpdatePayload({ glassType: 'arredondada' })" />
          <span class="dark:text-zinc-50 mx-2">Arredondada</span>
        </div>
        <div class="flex">
          <input type="radio" :checked="store.onGetGlassType('quadrada')" @change="store.onUpdatePayload({ glassType: 'quadrada' })" />
          <span class="dark:text-zinc-50 mx-2">Quadrada</span>
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
        <DefaultInput :field="'brand'" :type="'text'" :value="store.payload.brand" @change="store.onUpdatePayload({ brand: $event })">
          <template #prepend>
            <font-awesome-icon :icon="['fas', 'tag']" class="dark:text-zinc-50" />
          </template>
        </DefaultInput>
      </div>

      <div class="col-span-1">
        <span class="dark:text-zinc-50 font-bold">Material das astes</span>
      </div>

      <div class="col-span-1">
        <DefaultInput :field="'material'" :type="'text'" :value="store.payload.material" @change="store.onUpdatePayload({ material: $event })">
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
        <DefaultInput :field="'weight'" :type="'text'" :value="store.payload.weight" @change="store.onUpdatePayload({ weight: $event })">
          <template #prepend>
            <font-awesome-icon :icon="['fas', 'scale-balanced']" class="dark:text-zinc-50" />
          </template>
          <template #append>
            <span>g</span>
          </template>
        </DefaultInput>
      </div>

      <hr class="my-3 col-span-2">


      <div class="col-span-1">
        <div class="flex items-center">
          <span class="dark:text-zinc-50 font-bold">Dimensões</span>
          <DefaultTooltip :tooltip="'Aqui vai uma mensagem de ajuda pro usuário.'" />
        </div>
      </div>


      <div class="col-span-1">
        <div class="flex flex-col">
          <DefaultInput
            :field="'dimensions'"
            :label="'Aro vertical'"
            :type="'text'"
            :value="store.payload.dimensions"
            @change="store.onUpdatePayload({ dimensions: $event })"
          >
            <template #prepend>
              <font-awesome-icon :icon="['fas', 'ruler-combined']" class="dark:text-zinc-50" />
            </template>
            <template #append>
              <span>cm</span>
            </template>
          </DefaultInput>

          <DefaultInput
            :field="'dimensions'"
            :label="'Aro Horizontal'"
            :type="'text'"
            :value="store.payload.dimensions"
            @change="store.onUpdatePayload({ dimensions: $event })"
          >
            <template #prepend>
              <font-awesome-icon :icon="['fas', 'ruler-combined']" class="dark:text-zinc-50" />
            </template>
            <template #append>
              <span>cm</span>
            </template>
          </DefaultInput>

          <DefaultInput
            :field="'dimensions'"
            :label="'Ponte'"
            :type="'text'"
            :value="store.payload.dimensions"
            @change="store.onUpdatePayload({ dimensions: $event })"
          >
            <template #prepend>
              <font-awesome-icon :icon="['fas', 'ruler-combined']" class="dark:text-zinc-50" />
            </template>
            <template #append>
              <span>cm</span>
            </template>
          </DefaultInput>

          <DefaultInput
            :field="'dimensions'"
            :label="'Ponte + Aro'"
            :type="'text'"
            :value="store.payload.dimensions"
            @change="store.onUpdatePayload({ dimensions: $event })"
          >
            <template #prepend>
              <font-awesome-icon :icon="['fas', 'ruler-combined']" class="dark:text-zinc-50" />
            </template>
            <template #append>
              <span>cm</span>
            </template>
          </DefaultInput>
        </div>
      </div>

      <hr class="my-3 col-span-2">

      <div class="col-span-2 mt-5">
        <span class="dark:text-zinc-50 font-bold">Descrição</span>
        <textarea as="textarea" name="description" class="w-full dark:bg-zinc-900 mt-5 px-5 py-5" limit rows="10" @input="store.onUpdatePayload({ description: $event.target['value'] })" />
        <div class="flex justify-end">
          <span class="dark:text-zinc-50"> {{ store.descSize }} / 1024</span>
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
