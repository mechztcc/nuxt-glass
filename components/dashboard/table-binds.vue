<template>
  <div class="bg-zinc-50 dark:bg-zinc-900 p-5 rounded shadow dark:text-zinc-50">
    <div class="flex justify-between mb-10 border-b-2 py-3">
      <span class="text-xl font-semibold ">Leilões Recentes</span>
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
      <tr class="bg-zinc-100 dark:bg-zinc-900">
        <th>#</th>
        <th>
          <font-awesome-icon :icon="['far', 'user']" />
          Usuário
        </th>
        <th>
          <font-awesome-icon :icon="['fas', 'sack-dollar']" />
          Ultima oferta
        </th>
        <th>
          <font-awesome-icon :icon="['fas', 'location-dot']" />
          Cidade
        </th>
        <th>
          <font-awesome-icon :icon="['far', 'calendar']" />
          Ultima atualização
        </th>
        <th>Status</th>
        <th>Situação</th>
        <th>Ações</th>
      </tr>
      <tr class="hover:bg-zinc-100 dark:hover:bg-zinc-700" v-for="(item, index) in 6" :key="index">
        <td>1</td>
        <td>Alberto Paiva</td>
        <td>R$ 599,00</td>
        <td>Recife</td>
        <td>22/10/2023 20:33</td>
        <td>
          <Badge :label="'Arrematou'" :style="'bg-zinc-900 text-zinc-50'">
            <font-awesome-icon :icon="['fas', 'stamp']" />
          </Badge>
        </td>
        <td>
          <Badge :label="'Concluído'">
            <font-awesome-icon :icon="['far', 'clock']" />
          </Badge>
        </td>
        <td>
          <DefaultButton>
            <font-awesome-icon :icon="['far', 'eye']" />
          </DefaultButton>

          <DefaultButton>
            <font-awesome-icon :icon="['fas', 'pen']" />
          </DefaultButton>
          <DefaultButton>
            <font-awesome-icon :icon="['far', 'comment']" />
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
</style>
