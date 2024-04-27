<template>
  <NuxtLayout :name="'admin'">
    <div class="bg-zinc-50 p-5">
      <div class="flex justify-between border-b-2 py-3">
        <span class="text-xl font-semibold">Meu Catálogo</span>
        <div class="flex">
          <DefaultButton>
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </DefaultButton>
          <DefaultButton>
            <font-awesome-icon :icon="['fas', 'arrow-down-a-z']" />
          </DefaultButton>
          <DefaultButton>
            <font-awesome-icon :icon="['fas', 'retweet']" />
          </DefaultButton>
          <DefaultButton>
            <font-awesome-icon :icon="['fas', 'grip-lines']" />
          </DefaultButton>
          <DefaultButton>
            <font-awesome-icon :icon="['fas', 'grip-vertical']" />
          </DefaultButton>
          <DefaultButton :to="'/admin/products/create'">
            <font-awesome-icon :icon="['fas', 'plus']" />
          </DefaultButton>

        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-10">
        <div class="col-span-2" v-for="(item, index) in 6" :key="index">
          <ProductCard />
        </div>
      </div>

      <div class="flex justify-end py-2 mt-5">
        <DefaultButton>
          <font-awesome-icon :icon="['fas', 'angle-left']" />
        </DefaultButton>
        <DefaultButton class="bg-zinc-900 text-white">
          <font-awesome-icon :icon="['fas', '1']" :fill="true" />
        </DefaultButton>
        <DefaultButton class="text-zinc-500">
          <font-awesome-icon :icon="['fas', '2']" />
        </DefaultButton>
        <DefaultButton class="text-zinc-500">
          <font-awesome-icon :icon="['fas', '3']" />
        </DefaultButton>
        <DefaultButton class="text-zinc-500">
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </DefaultButton>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
