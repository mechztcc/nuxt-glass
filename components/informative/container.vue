<template>
  <template v-if="!customer">
    <div class="flex flex-col mt-20 mb-10 px-10">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl text-start">Possuo uma loja de óculos</h1>
        <button>
          <font-awesome-icon
            :icon="['fas', 'circle-chevron-right']"
            :size="'2x'"
          />
        </button>
      </div>
      <div class="flex flex-col mt-2">
        <span class="text-zinc-700">
          Sinta-se à vontade para entrar em contato com nossa equipe a qualquer
          momento.
        </span>
        <span class="text-zinc-700">
          Estamos aqui para garantir que sua experiência conosco seja
          excepcional.
        </span>
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-3 mx-5 md:mx-10 mb-20 gap-5 md:gap-10"
    >
      <div
        class="col-span-1 md:col-span-1"
        v-for="(item, index) in shop"
        :key="index"
      >
        <HomeAdvantages :title="item.title" :subtitle="item.subtitle">
          <font-awesome-icon
            :icon="item.icon"
            class="p-2 bg-black text-white rounded mb-3"
          />
        </HomeAdvantages>
      </div>
    </div>
  </template>

  <template v-if="customer">
    <div class="flex flex-col mt-20 mb-10 px-10">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl text-start">Quero comprar meus óculos</h1>
        <button>
          <font-awesome-icon
            :icon="['fas', 'circle-chevron-right']"
            :size="'2x'"
          />
        </button>
      </div>
      <div class="flex flex-col">
        <span class="text-zinc-700 mt-2">
          Junte-se a nós e faça parte de uma comunidade que valoriza não apenas
          a visão clara,
        </span>
        <span class="text-zinc-700">
          mas também a expressão única do seu estilo.
        </span>
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-3 mx-5 md:mx-10 mb-20 gap-5 md:gap-10"
    >
      <div
        class="col-span-1 md:col-span-1"
        v-for="(item, index) in client"
        :key="index"
      >
        <HomeAdvantages :title="item.title" :subtitle="item.subtitle">
          <font-awesome-icon
            :icon="item.icon"
            class="p-2 bg-black text-white rounded mb-3"
          />
        </HomeAdvantages>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
const customer = ref(false);
const shop = [
  {
    title: "Monte sua loja online",
    subtitle: "Cadastre seu catalogo de produtos",
    icon: ["fas", "store"],
  },
  {
    title: "Receba pedidos de clientes",
    subtitle: "Seja notificado sempre que um cliente solicitar um orçamento",
    icon: ["fas", "user"],
  },
  {
    title: "Histórico de pagamentos",
    subtitle: "Controle os pagamentos recebidos por sua loja",
    icon: ["fas", "receipt"],
  },
];

const client = [
  {
    title: "Solicite um orçamento",
    subtitle: "Receba as melhores ofertas da sua região",
    icon: ["fas", "receipt"],
  },
  {
    title: "Escolha em um vasto catalogo",
    subtitle: "Escolha seus óculos no vasto catalogo de nossos fornecedores",
    icon: ["fas", "tags"],
  },
  {
    title: "Pagamento online",
    subtitle: "Faça o pagamento online de forma 100% segura",
    icon: ["fas", "credit-card"],
  },
  {
    title: "Entrega do pedido",
    subtitle: "Receba o pedido no conforto da sua casa",
    icon: ["fas", "truck-fast"],
  },
  {
    title: "Suporte 24hrs",
    subtitle: "Conte com nosso suporte 24hrs para tirar suas dúvidas",
    icon: ["fas", "headset"],
  },
];

onMounted(() => {
  onChangeContent();
});

function onChangeContent() {
  const interval = setInterval(() => {
    customer.value = !customer.value;
  }, 5000);
}
</script>

<style lang="scss" scoped></style>
