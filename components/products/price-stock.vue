<template>
  <div class="grid grid-cols-1 md:grid-cols-3 mx-5 my-10">
    <div class="col-span-1 md:col-span-1 md:col-start-2">
      <Form @submit="onSubmit" :validation-schema="schema">
        <div class="flex flex-col">
          <div class="grid grid-cols-2 gap-5">
            <DefaultInput :label="'Preço de custo'" :type="'number'" :field="'costPrice'" :value="store.payload.costPrice">
              <template #prepend>
                <font-awesome-icon :icon="['fas', 'tag']" class="dark:text-zinc-50" />
              </template>
            </DefaultInput>
            <DefaultInput :label="'Porcentagem de lucro'" :type="'number'" :field="'profitPercents'" :value="store.payload.profitPercents">
              <template #prepend>
                <font-awesome-icon :icon="['fas', 'percent']" class="dark:text-zinc-50" />
              </template>
            </DefaultInput>
            <DefaultInput :label="'Desconto máximo'" :type="'number'" :field="'maxDescount'" :value="store.payload.maxDescount">
              <template #prepend>
                <font-awesome-icon :icon="['fas', 'percent']" class="dark:text-zinc-50" />
              </template>
            </DefaultInput>

            <DefaultInput :label="'Quantidade em estoque'" :type="'number'" :field="'amount'" :value="store.payload.amount">
              <template #prepend>
                <font-awesome-icon :icon="['fas', 'box-archive']" class="dark:text-zinc-50" />
              </template>
            </DefaultInput>

            <span class="dark:text-zinc-50">Valor de venda</span>
            <span class="text-xl dark:text-zinc-50">R$ {{ store.expectedPrice }}</span>
          </div>
        </div>

        <div class="mt-10">
          <DefaultButton :label="'Avançar'" :type="'submit'" :fill="true" />
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { toTypedSchema } from '@vee-validate/zod';
  import { Form } from 'vee-validate';
  import * as zod from 'zod';

  const schema = toTypedSchema(
    zod.object({
      costPrice: zod.number({}),
      amount: zod.number(),
      maxDescount: zod.number(),
      profitPercents: zod.number(),
    })
  );

  const store = useCreateProduct();

  function onSubmit(value: any) {
    store.payload = {
      ...store.payload,
      ...value,
    };
    
    store.onNext();
  }
</script>

<style scoped></style>
