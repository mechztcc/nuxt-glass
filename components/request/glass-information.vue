<template>
  <div class="flex flex-col">
    <font-awesome-icon :icon="['fas', 'glasses']" :size="'2x'" class="mb-2" />
    <h1 class="text-3xl text-center">Detalhes do Pedido!</h1>
    <span class="text-lg text-zinc-700 text-center">
      Nos conte mais sobre sua escolha de óculos
    </span>

    <div class="grid grid-cols-3 gap-5 mt-20">
      <div class="col-span-3">
        <div class="flex items-center">
          <span class="text-zinc-700 text-lg">
            Qual tipo de armação você deseja?
          </span>
          <font-awesome-icon
            :icon="['fas', 'circle-check']"
            class="mx-2 text-green-400"
            v-if="hasFrames"
          />
          <font-awesome-icon
            :icon="['fas', 'circle-xmark']"
            class="text-red-400 mx-2"
            v-if="!hasFrames"
          />
        </div>
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton
          :label="'Armação Arredondada'"
          @selected="receive($event)"
        />
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton
          :label="'Armação Quadrada'"
          @selected="receive($event)"
        />
      </div>
    </div>

    <div class="grid grid-cols-3 gap-5 mt-20">
      <div class="col-span-3">
        <div class="flex items-center">
          <span class="text-zinc-700 text-lg">Qual Genero da armação?</span>
          <font-awesome-icon
            :icon="['fas', 'circle-check']"
            class="mx-2 text-green-400"
            v-if="hasGender"
          />
          <font-awesome-icon
            :icon="['fas', 'circle-xmark']"
            class="text-red-400 mx-2"
            v-if="!hasGender"
          />
        </div>
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton
          :label="'Masculino'"
          @selected="receive($event)"
        />
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton
          :label="'Feminino'"
          @selected="receive($event)"
        />
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton :label="'Unisex'" @selected="receive($event)" />
      </div>
    </div>

    <div class="grid grid-cols-4 gap-5 mt-20">
      <div class="col-span-4">
        <div class="flex items-center">
          <span class="text-zinc-700 text-lg">
            Alguma Preferencia de Lentes?
          </span>
          <font-awesome-icon
            :icon="['fas', 'circle-check']"
            class="mx-2 text-green-400"
            v-if="hasLenses"
          />
          <font-awesome-icon
            :icon="['fas', 'circle-xmark']"
            class="text-red-400 mx-2"
            v-if="!hasLenses"
          />
        </div>
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton
          :label="'Anti Reflexo'"
          @selected="receive($event)"
        />
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton
          :label="'Fotocromática'"
          @selected="receive($event)"
        />
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton
          :label="'Anti LedAzul'"
          @selected="receive($event)"
        />
      </div>
      <div class="col-span-1">
        <DefaultSelectedButton
          :label="'Fotocromática + Anti LedAzul'"
          @selected="receive($event)"
        />
      </div>
    </div>

    <RequestDragRecipe />
  </div>
</template>

<script setup lang="ts">
import { useNewAuctionRequest } from "~/stores/new-auction-request";
import { type IDefaultSelectedButtonProps } from "../../interfaces/default-selected-button-props";
const store = useNewAuctionRequest();

const selecteds = ref<any>([]);

const receive = (info: IDefaultSelectedButtonProps) => {
  const infoExists = selecteds.value.some(
    (el: IDefaultSelectedButtonProps) => el.label == info.label
  );
  if (infoExists) {
    selecteds.value = selecteds.value.filter(
      (el: IDefaultSelectedButtonProps) => el.label !== info.label
    );
    return;
  }
  selecteds.value.push(info);
};

const hasLenses = computed(() => {
  const labels = ["Anti LedAzul", "Fotocromática", "Anti Reflexo"];
  return (
    selecteds.value.filter((el: IDefaultSelectedButtonProps) =>
      labels.includes(el.label)
    ).length > 0
  );
});

const hasFrames = computed(() => {
  const labels = ["Armação Arredondada", "Armação Quadrada"];
  return (
    selecteds.value.filter((el: IDefaultSelectedButtonProps) =>
      labels.includes(el.label)
    ).length > 0
  );
});

const hasGender = computed(() => {
  const labels = ["Masculino", "Feminino", "Unisex"];
  return (
    selecteds.value.filter((el: IDefaultSelectedButtonProps) =>
      labels.includes(el.label)
    ).length > 0
  );
});
</script>

<style lang="scss" scoped></style>
