<template>
  <div class="bg-zinc-50 p-5 rounded shadow">
    <div class="flex justify-between mb-10 border-b-2 py-3">
      <span class="text-xl font-semibold">Meus produtos</span>
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
      </div>
    </div>
    <table class="w-full mb-5">
      <tr class="bg-zinc-100">
        <th class="">
          Imagem
        </th>
        <th>
          Nome
        </th>
        <th>
          <font-awesome-icon :icon="['fas', 'sack-dollar']" />
          Preço Min
        </th>
        <th>
          <font-awesome-icon :icon="['fas', 'paintbrush']" />
          Cor
        </th>
        <th>Quantidade</th>
        <th>Status</th>
        <th>Ações</th>
      </tr>
      <tr class="hover:bg-zinc-100" v-for="(item, index) in 3" :key="index">
        <td>
          <img
            src="https://www.artviso.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/r/armacao-oculos-de-grau-boss-1514g-r81-titanio-redondo-grafite-masculino-lateral.jpg"
            alt=""
          />
        </td>
        <td>Armação Lacoste (M)</td>
        <td>R$ 599,00</td>
        <td>
          <font-awesome-icon :icon="['fas', 'square']" class="text-purple-900" />
        </td>
        <td>0</td>
        <td>
          <Badge :label="'Esgotado'" :style="'bg-red-400 text-white'">
            <font-awesome-icon :icon="['far', 'circle-xmark']" />
          </Badge>
        </td>
        <td>
          <DefaultButton>
            <font-awesome-icon :icon="['far', 'eye']" />
          </DefaultButton>

          <DefaultButton>
            <font-awesome-icon :icon="['fas', 'pen']" />
          </DefaultButton>
          
        </td>
      </tr>
    </table>

    <div class="flex justify-end py-2">
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
</template>

<script setup></script>

<style lang="css" scoped>
td,
th {
  text-align: start;
}
th {
  padding: 10px 0;
}

img {
  max-height: 200x;
  max-width: 200px;
  min-height: 200x;
  min-width: 200px;
  object-fit: cover;
}
</style>
