<template>
  <div class="z-10">
    <label for="" class="mb-2 mt-3 font-semibold dark:text-zinc-50">{{ label }}</label>
  <div
    :class="[
      'flex items-center px-5 w-full  border-zinc-300  dark:bg-zinc-900 bg-white rounded',
      hasFocus ? 'border border-teal-400 dark:border-teal-400' : '',
    ]"
    @focusin="onFocusIn()"
    @focusout="onFocusOut()"
  >
    <slot name="prepend"></slot>
    <Field
      :name="field"
      :value="value"
      v-model="inputValue"
      :placeholder="placeholder"
      :type="type"
      :as="as"
      :validate-on-change="true"
      :keep-value="true"
      @update:model-value="onChange()"
      class="p-3 outline-none w-full bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-50"
    />
    <slot name="append"></slot>
  </div>
  <ErrorMessage :name="field" class="mx-2 bg-red-200 rounded-full px-2 mt-2 text-red-600 justify-center flex items-center" />
  </div>
</template>

<script setup lang="ts">
  import { Field, ErrorMessage } from 'vee-validate';

  const props = defineProps({
    label: { type: String, required: false },
    type: { type: String, required: true },
    placeholder: { type: String, required: false },
    field: { type: String, required: true },
    as: { type: String, required: false },
    value: { required: false },
    mask: { type: String, required: false, default: '' },
  });

  const inputValue = ref(props.value);

  const emit = defineEmits(['change']);
  function onChange() {
    emit('change', inputValue.value);
  }

  const hasFocus = ref(false);
  function onFocusIn() {
    hasFocus.value = true;
  }
  function onFocusOut() {
    hasFocus.value = false;
  }
</script>

<style scoped></style>
