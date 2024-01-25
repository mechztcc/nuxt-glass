<template>
  <div class="grid grid-cols-1 md:grid-cols-2 header">
    <div class="col-span-1 md:col-span-1">
      <template v-if="index == 0">
        <div class="flex flex-col items-start justify-center w-full h-full p-8">
          <h1 class="text-6xl text-zinc-800">
            Compre seus Óculos de sol ou de gráu sem sair de casa.
          </h1>
          <div class="flex flex-col mb-5">
            <span class="text-zinc-700 text-2xl mt-3">
              Precisando de óculos de gráu? Informe sua receita médica e espere
              as lojas entrarem em contato com você. Você recebe os óculos no
              conforto da sua casa.
            </span>
          </div>
          <div class="flex justify-start w-full">
            <DefaultButton :label="'Quero fazer meus óculos'" :fill="true" />
          </div>
        </div>
      </template>

      <template v-if="index == 1">
        <div class="flex flex-col items-start justify-center w-full h-full p-8">
          <h1 class="text-6xl text-zinc-800">
            Monte sua loja e receba demandas de clientes sem sair de casa
          </h1>
          <div class="flex flex-col mb-5">
            <span class="text-zinc-700 text-2xl mt-3">
              Crie seu catalogo, receba os pedidos de seus clientes, dê seu
              orçamento e arremate a venda.
            </span>
          </div>
          <div class="flex justify-start w-full">
            <DefaultButton :label="'Quero montar minha loja'" :fill="true" />
          </div>
        </div>
      </template>
    </div>
    <div class="col-span-1 md:col-span-1">
      <div class="flex w-full h-full relative">
        <div
          class="absolute flex justify-between bottom-1/2 text-white w-full px-10"
        >
          <font-awesome-icon
            class="cursor-pointer"
            :icon="['fas', 'circle-chevron-left']"
            :size="'3x'"
          />
          <font-awesome-icon
            class="cursor-pointer"
            :icon="['fas', 'circle-chevron-right']"
            :size="'3x'"
          />
        </div>
        <img
          class="w-full h-full"
          style="border-top-left-radius: 400px"
          :src="currentBanner"
          alt=""
        />
        <div class="absolute flex bottom-0 right-1/2 text-white mb-5">
          <font-awesome-icon
            v-for="(item, i) in banners"
            :key="index"
            :icon="index == i ? ['fas', 'circle'] : ['far', 'circle']"
            class="mr-1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const banners = [
  "https://img.freepik.com/free-photo/young-woman-with-brown-hair-exudes-confidence-generated-by-ai_24640-82432.jpg?t=st=1706191404~exp=1706195004~hmac=d3f6cf556c3fa65a378a3e995a71bb74870dce0332429d8298e8cb8c94755132&w=1380",
  "https://img.freepik.com/free-photo/confident-businessman-with-beard-glasses-working-indoors-generated-by-ai_188544-27881.jpg?t=st=1706192118~exp=1706195718~hmac=fb8bd70e5e5e2072e49db830ff3c652c1b654e0e1a060c4a11db91b44fee9f49&w=1380",
];

const index = ref(0);
const currentBanner = computed(() => banners[index.value]);
function changeBanner() {
  setInterval(() => {
    index.value = (index.value + 1) % banners.length;
  }, 5000);
}
onMounted(() => {
  changeBanner();
});

function onHandle() {
  index.value = (index.value + 1) % banners.length;
}
</script>

<style lang="css" scoped>
.header {
  min-height: 80vh;
}

img {
  object-fit: cover;
}
</style>
