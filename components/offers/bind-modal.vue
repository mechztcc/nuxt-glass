<template>
  <DefaultButton class="mx-2" @pressed="onHandleModal()">
    <font-awesome-icon :icon="['fas', 'comment-dollar']" />
  </DefaultButton>

  <template v-if="isModal">
    <div class="rounded bg-zinc-50 dark:bg-zinc-900 shadow-md flex flex-col px-7 py-7 absolute top-10 z-10">
      
      <div class="flex justify-between">
        <span class="text-3xl font-bold">Dar lance</span>
        <DefaultButton @pressed="onHandleModal()">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </DefaultButton>
      </div>
      <hr class="my-2">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
        <div class="col-span-1">
          <DefaultInput :label="'Preço'" :type="'text'" :field="'price'">
            <template #prepend>
              <font-awesome-icon :icon="['fas', 'coins']" class="text-zinc-900 dark:text-zinc-50 rounded-full" />
            </template>
          </DefaultInput>
        </div>

        <div class="col-span-1">
          <DefaultInput :label="'Data de entrega'" :type="'text'" :field="'price'">
            <template #prepend>
              <font-awesome-icon :icon="['fas', 'calendar']" class="text-zinc-900 dark:text-zinc-50 rounded-full" />
            </template>
          </DefaultInput>
        </div>
      </div>

      <span class="font-bold mt-5">Descrição</span>
      <textarea class="bg-zinc-50 dark:bg-zinc-900 mt-2 border-2 dark:border-zinc-700" cols="20" rows="10"></textarea>
      <div class="flex justify-end">
        <span>0 / 1024</span>
      </div>


      <DefaultButton :label="'Enviar'" :fill="true" class="mt-5"/>
    </div>
  </template>
</template>

<script setup lang="ts">
  import { Field, ErrorMessage } from 'vee-validate';
  const isModal = ref(false);

  function onHandleModal() {
    isModal.value = !isModal.value;
  }
</script>

<style scoped></style>
