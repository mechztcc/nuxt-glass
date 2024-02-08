<template>
  <div class="grid grid-cols-2 mb-5 gap-2">
    <div class="col-span-1">
      <img
        src="https://www.artviso.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/r/armacao-oculos-de-grau-boss-1514g-r81-titanio-redondo-grafite-masculino-lateral.jpg"
        alt=""
      />
    </div>
    <div class="col-span-1">
      <div class="flex flex-col justify-between">
        <span class="text-2xl font-semibold">Armação TOP</span>
        <div class="flex">
          <font-awesome-icon :icon="['far', 'star']" />
          <font-awesome-icon :icon="['far', 'star']" />
          <font-awesome-icon :icon="['far', 'star']" />
          <font-awesome-icon :icon="['far', 'star']" />
          <font-awesome-icon :icon="['far', 'star']" />
        </div>
        <span class="text-xl font-semibold text-teal-400 mt-2">R$ 150,00</span>
        <div class="flex mt-2 mb-3">
          <div class="flex flex-col items-center">
            <span class="font-semibold">Cor</span>
            <font-awesome-icon :icon="['fas', 'square']" class="text-red-800" />
          </div>
          <div class="flex flex-col items-center mx-3">
            <span class="font-semibold">Estoque</span>
            <span>3</span>
          </div>
          <div class="flex flex-col items-center mx-3">
            <span class="font-semibold">Genero</span>
            <span>M</span>
          </div>
          <div class="flex flex-col items-center mx-3">
            <span class="font-semibold">Formato</span>
            <span>Redondo</span>
          </div>
          <div class="flex flex-col items-center mx-3">
            <span class="font-semibold">Tipo</span>
            <span>Gráu</span>
          </div>
        </div>
        <DefaultButton :label="'Editar'" :fill="true" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
img {
  max-height: 200px;
  min-width: 100%;
  object-fit: cover;
}
</style>
