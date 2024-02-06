<template>
  <div class="grid grid-cols-4 gap-5">
    <div class="col-span-4">
      <span class="text-zinc-500">Seu pedido fica disponível em:</span>
      <div class="flex mt-2">
        <Badge :label="'Recife'">
          <font-awesome-icon :icon="['fas', 'circle-xmark']" />
        </Badge>
        <Badge :label="'Olinda'" class="mx-2">
          <font-awesome-icon :icon="['fas', 'circle-xmark']" />
        </Badge>
        <Badge :label="'Paulista'">
          <font-awesome-icon :icon="['fas', 'circle-xmark']" />
        </Badge>
      </div>
    </div>
    <div class="col-span-1 col-start-1 mt-5">
      <label for="" class="mt-5 font-semibold">Estado</label>
      <div class="flex items-center border px-5 border-zinc-300 bg-white mt-2">
        <Field
          name="state"
          as="select"
          class="p-3 rounded-xl outline-none w-full bg-zinc-50"
        >
          <option class="" v-for="(item, index) in 5" :key="index">PE</option>
        </Field>
      </div>
    </div>
    <div class="col-span-1 mt-5">
      <label for="" class="mb-2 mt-5 font-semibold">Cidade</label>
      <div class="flex items-center border px-5 border-zinc-300 bg-white mt-2">
        <Field
          name="city"
          class="p-3 rounded-xl outline-none w-full bg-zinc-50"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
</script>

<style lang="scss" scoped></style>
