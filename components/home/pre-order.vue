<template>
  <div class="grid grid-cols-1 md:grid-cols-4 my-20">
    <div
      class="col-span-1 md:col-span-4 bg-zinc-900 rounded-lg px-5 py-10"
    >
      <div class="flex flex-col text-teal-400">
        <h1 class="text-2xl">
          Ainda estamos em desenvolvimento, se inscreva para ficar por dentro do
          nosso lançamento.
        </h1>
        <div class="flex mt-2">
          <font-awesome-icon :icon="['fab', 'facebook']" :size="'2x'" />
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            class="mx-2"
            :size="'2x'"
          />
          <font-awesome-icon :icon="['fab', 'linkedin']" :size="'2x'" />

        </div>
        <div class="flex justify-start mt-5">
          <div
            class="flex items-center border px-5 rounded border-zinc-300 bg-white"
          >
            <font-awesome-icon
              :icon="['fas', 'envelope']"
              class="text-zinc-900 rounded-full"
            />
            <Field name="email" class="p-3 rounded-xl outline-none w-full" />
          </div>
          <button class="border rounded border-green-400 hover:bg-teal-400 hover:text-white p-3 ml-2">
              <font-awesome-icon :icon="['fab', 'space-awesome']" class="mr-2"/>
            ENVIAR
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
</script>

<style lang="scss" scoped></style>
