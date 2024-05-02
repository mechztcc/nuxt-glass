<template>
  <div class="grid grid-cols-1 md:grid-cols-3 mx-5 my-10">
    <div class="col-span-1 md:col-span-1 md:col-start-2">
      <div class="flex flex-col">
        <div class="grid grid-cols-2 gap-5">
          <DefaultInput :label="'Preço de custo'" :type="'number'" :field="'min'" :value="store.payload.costPrice">
            <template #prepend>
              <font-awesome-icon :icon="['fas', 'tag']" class="dark:text-zinc-50" />
            </template>
          </DefaultInput>
          <DefaultInput :label="'Porcentagem de lucro'" :type="'number'" :field="'min'" :value="store.payload.profitPercents">
            <template #prepend>
              <font-awesome-icon :icon="['fas', 'percent']" class="dark:text-zinc-50" />
            </template>
          </DefaultInput>
          <DefaultInput :label="'Desconto máximo'" :type="'number'" :field="'min'" :value="store.payload.maxDescount">
            <template #prepend>
              <font-awesome-icon :icon="['fas', 'percent']" class="dark:text-zinc-50" />
            </template>
          </DefaultInput>

          <DefaultInput :label="'Quantidade'" :type="'number'" :field="'min'" :value="store.payload.amount">
            <template #prepend>
              <font-awesome-icon :icon="['fas', 'box-archive']" class="dark:text-zinc-50" />
            </template>
          </DefaultInput>

          <span class="dark:text-zinc-50">Valor de venda</span>
          <span class="text-xl dark:text-zinc-50">R$ {{ store.expectedPrice }}</span>
        </div>

        <DefaultButton :label="'Avançar'" :fill="true" class="mt-5" @pressed="store.onNext()" />
        <div class="flex justify-center mt-5">
          <span class="dark:text-zinc-50 hover:text-teal-400 cursor-pointer" @click="store.onPrev()">Voltar</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const store = useCreateProduct();
</script>

<style scoped></style>
