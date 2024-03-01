<template>
  <Form>
    <div class="grid grid-cols-4 gap-5">
      <div class="col-span-4">
        <span class="text-zinc-500">Seu pedido fica disponível em:</span>
        <div class="flex mt-2">
          <Badge class="mx-1" v-for="(item, index) of store.payload.availableAt" :label="`${item.state} - ${item.city}`" @click="store.onRemoveRegion(index)">
            <font-awesome-icon :icon="['fas', 'circle-xmark']" />
          </Badge>
          <Badge :label="'Adicionar'" class="mx-2" :class="'bg-zinc-300 text-zinc-500'" @click="onSelectNewCity()">
            <font-awesome-icon :icon="['fas', 'plus']" />
          </Badge>
        </div>
      </div>
      <div class="col-span-1 col-start-1 mt-5">
        <label for="" class="mt-5 font-semibold">Estado</label>
        <div class="flex items-center border px-5 border-zinc-300 bg-white mt-2">
          <Field name="state" as="select" v-model="selectedState" class="p-3 rounded-xl outline-none w-full bg-zinc-50">
            <option class="" v-for="(item, index) in states" :key="index" :value="item.name">{{ item.name }}</option>
          </Field>
        </div>
      </div>

      <div class="col-span-1 mt-5">
        <label for="" class="mb-2 mt-5 font-semibold">Cidade</label>
        <div class="flex items-center border px-5 border-zinc-300 bg-white mt-2">
          <Field name="city" as="select" v-model="selectedCity" class="p-3 rounded-xl outline-none w-full bg-zinc-50">
            <option v-for="city in selectedCities" :key="city" :value="city">{{ city }}</option>
          </Field>
        </div>
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field } from 'vee-validate';
const store = useNewAuctionRequest();

const states: any[] = [
  { name: 'PE', cities: ['Recife', 'Olinda'] },
  { name: 'AL', cities: ['Maceió', 'Arapiraca', 'Penedo'] },
];

const selectedState = ref('');
const selectedCity = ref('');

const selectedCities = computed(() => {
  const state = states.find((state) => state.name === selectedState.value);
  return state ? state.cities : [];
});

function onSelectNewCity() {
  if (!selectedCity.value || !selectedState.value) {
    return;
  }

  store.onSetAvailableRegion({
    city: selectedCity.value,
    state: selectedState.value,
  });

  selectedCity.value = '';
}
</script>

<style lang="scss" scoped></style>
