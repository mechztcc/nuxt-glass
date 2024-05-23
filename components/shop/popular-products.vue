<template>
  <div class="col-span-2 md:col-span-3 text-center my-10 dark:text-zinc-50">
    <h1 class="text-5xl font-extrabold">Produtos populares da loja</h1>
  </div>

  <div class="col-span-1 md:col-span-1" v-for="(item, index) in populars" :key="index">
    <ProductCard :product="item" />
  </div>
</template>

<script setup lang="ts">
  import type { IProduct } from '~/interfaces/product.interface';

  const populars: IProduct[] = [
    {
      id: 1,
      brand: 'BILABONG',
      code: '43412-3323-BR',
      description: `Descubra a perfeita combinação de estilo e proteção com os nossos óculos de sol Elegance. Com um design moderno e sofisticado, eles são ideais para qualquer ocasião, seja para um dia na praia, um passeio pela cidade ou até mesmo para dar um toque especial ao seu look diário.`,
      material: 'Carbono',
      weight: '300',
      created_at: new Date().toISOString(),
      productDimensions: {
        bride: '58',
        bridgeWithRim: '60',
        horizontalRim: '60',
        verticalRim: '40',
      },
      images: [
        { url: 'https://tucglasses.com/wp-content/uploads/2022/06/oculos-de-sol-masculino-polarizado-andiroba-4.jpg', id: 1, name: '', size: '2mb' },
      ],
      name: 'Oculos importado',
      glassType: 'Oculos de sol',
      color: 'teal-400',
      gender: 'Masculino',
      productValues: {
        totalPrice: 750.0,
        amount: 3,
        maxDescount: '10',
        priceCost: '500',
        profit: '10',
      },
    },
    {
      id: 1,
      brand: 'BILABONG',
      code: '43412-3323-BR',
      description: `Descubra a perfeita combinação de estilo e proteção com os nossos óculos de sol Elegance. Com um design moderno e sofisticado, eles são ideais para qualquer ocasião, seja para um dia na praia, um passeio pela cidade ou até mesmo para dar um toque especial ao seu look diário.`,
      material: 'Carbono',
      weight: '300',
      created_at: new Date().toISOString(),
      productDimensions: {
        bride: '58',
        bridgeWithRim: '60',
        horizontalRim: '60',
        verticalRim: '40',
      },
      images: [{ url: 'https://thumb.braavo.me/hoover/0/2652859673.webp', id: 1, name: '', size: '2mb' }],
      name: 'Oculos importado',
      glassType: 'Oculos de sol',
      color: 'teal-400',
      gender: 'Masculino',
      productValues: {
        totalPrice: 750.0,
        amount: 3,
        maxDescount: '10',
        priceCost: '500',
        profit: '10',
      },
    },
    {
      id: 1,
      brand: 'BILABONG',
      code: '43412-3323-BR',
      description: `Descubra a perfeita combinação de estilo e proteção com os nossos óculos de sol Elegance. Com um design moderno e sofisticado, eles são ideais para qualquer ocasião, seja para um dia na praia, um passeio pela cidade ou até mesmo para dar um toque especial ao seu look diário.`,
      material: 'Carbono',
      weight: '300',
      created_at: new Date().toISOString(),
      productDimensions: {
        bride: '58',
        bridgeWithRim: '60',
        horizontalRim: '60',
        verticalRim: '40',
      },
      images: [
        {
          url: 'https://images.tcdn.com.br/img/img_prod/1084939/oculos_de_sol_oakley_solar_oc_0oo9416_941625_64_masculino_unisex_retangular_2523_1_7f1161401c40dafbb43da3b15df7050b.jpg',
          id: 1,
          name: '',
          size: '2mb',
        },
      ],
      name: 'Oculos importado',
      glassType: 'Oculos de sol',
      color: 'teal-400',
      gender: 'Masculino',
      productValues: {
        totalPrice: 750.0,
        amount: 3,
        maxDescount: '10',
        priceCost: '500',
        profit: '10',
      },
    },
  ];
</script>

<style scoped></style>
