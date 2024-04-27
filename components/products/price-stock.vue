<template>
  <div>
    <div class="flex flex-col">
      <span class="text-xl">Preço e estoque</span>

      <DefaultInput :label="'Preço de custo'" :type="'number'" :field="'min'">
        <template #prepend>
          <font-awesome-icon :icon="['fas', 'tag']" />
        </template>
      </DefaultInput>

      <DefaultInput :label="'Porcentagem de lucro'" :type="'number'" :field="'min'">
        <template #prepend>
          <font-awesome-icon :icon="['fas', 'percent']" />
        </template>
      </DefaultInput>

      <DefaultInput :label="'Desconto máximo'" :type="'number'" :field="'min'">
        <template #prepend>
          <font-awesome-icon :icon="['fas', 'percent']" />
        </template>
      </DefaultInput>

      <DefaultInput :label="'Quantidade'" :type="'number'" :field="'min'">
        <template #prepend>
          <font-awesome-icon :icon="['fas', 'box-archive']" />
        </template>
      </DefaultInput>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
