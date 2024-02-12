<template>
  <label for="" class="mb-2 mt-3 font-semibold">{{ label }}</label>
  <div class="flex items-center border px-5 w-full border-zinc-300 bg-white rounded">
    <slot name="prepend"></slot>
    <Field :name="field" v-model="inputValue" :type="type" :validate-on-change="true" :keep-value="true" class="p-3 outline-none w-full bg-zinc-50" />
    <slot name="append"></slot>
  </div>
  <ErrorMessage :name="field" class="mx-2 bg-red-200 rounded-full px-2 mt-2 text-red-600 justify-center flex items-center" />
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate';

const props = defineProps({
  label: { type: String, required: true },
  type: { type: String, required: true },
  field: { type: String, required: true },
  mask: { type: String, required: false, default: '' },
});

const inputValue = ref('');
</script>

<style scoped></style>
