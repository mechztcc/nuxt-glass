<template>
  <label for="" class="mb-2 mt-3 font-semibold">{{ label }}</label>
  <div class="flex items-center border px-5 w-full border-zinc-300 bg-white rounded">
    <slot name="prepend"></slot>
    <Field :name="field" v-model="inputValue" :type="type" class="p-3 rounded-xl outline-none w-full" />
    <slot name="append"></slot>
  </div>
</template>

<script setup lang="ts">
import { Field } from 'vee-validate';

const props = defineProps({
  label: { type: String, required: true },
  type: { type: String, required: true },
  field: { type: String, required: true },
  mask: { type: String, required: false, default: '' },
});

const inputValue = ref('');

</script>

<style scoped></style>
