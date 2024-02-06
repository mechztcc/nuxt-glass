<template>
    <div class="flex flex-col justify-start">
      <font-awesome-icon :icon="['fas', 'receipt']" :size="'2x'" class="mb-2"/>
      <h1 class="text-3xl text-center">Forma de pagamento</h1>
      <span class="text-lg text-zinc-700 text-center">
        Nos conte como você deseja realizar o pagamento
      </span>
  
      <div class="grid grid-cols-3 mt-10 gap-5">
        <div class="col-span-1">
          <DefaultSelectedButton :label="'À vista no cartão'" />
        </div>
        <div class="col-span-1">
          <DefaultSelectedButton :label="'À vista no PIX'" />
        </div>
        <div class="col-span-1">
          <DefaultSelectedButton :label="'Cartão de crédito'" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped></style>
  