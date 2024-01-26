<template>
  <div class="flex flex-col">
    <img
      class="w-full"
      src="https://assets.glassesdirect.co.uk/products/medium/glasses-direct/taylor/taylor-glasses-gunmetal-front.jpg"
      alt=""
    />
    <span class="text-xl mb-1">ARMAÇÃO OAKLEY</span>
    <div class="flex items-center justify-between mb-3">
      <div class="flex">
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['far', 'star']" />
        <font-awesome-icon :icon="['far', 'star']" />
      </div>
      <span class="font-semibold text-zinc-700">R$ 79,99</span>
    </div>

    <div class="flex justify-end mb-5">
      <font-awesome-icon :icon="['fas', 'person-dress']" class="mx-1" />
      <font-awesome-icon :icon="['fas', 'square']" class="text-zinc-400 border" />
      <font-awesome-icon :icon="['fas', 'square']" class="mx-1 text-purple-800" />
      <font-awesome-icon :icon="['fas', 'square']" class="text-orange-400"/>
    </div>
    <DefaultButton :label="'COMPRAR'" fill> </DefaultButton>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
