<template>
  <label for="" class="mb-2 mt-3 font-semibold">{{ label }}</label>
  <Field :name="field" as="select" class="p-3 rounded outline-none w-full border bg-zinc-50">
    <option :value="item" v-for="(item, index) in options" :key="index">{{ item }}</option>
  </Field>
  <ErrorMessage :name="field" class="mx-2 bg-red-200 rounded-full px-2 mt-2 text-red-600 justify-center flex items-center" />
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate';

defineProps({
  label: { type: String, required: true },
  field: { type: String, required: true },
  options: { type: Array, required: true },
});
</script>

<style lang="scss" scoped></style>
