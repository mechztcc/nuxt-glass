<template>
  <div class="flex flex-col w-full relative">
    <div
      @click="onOpenMap()"
      class="flex justify-center items-center border at-top trans rounded-md px-3 py-3 mb-3 cursor-pointer dark:bg-zinc-900 dark:text-zinc-50 dark:border-zinc-900 dark:hover:border-teal-400 hover:bg-zinc-900 hover:text-teal-400"
    >
      <font-awesome-icon :icon="['fas', 'map-location-dot']" />
      <h1 class="mx-3 text-lg hover:text-teal-400">
        Usar minha localização atual
      </h1>
    </div>

    <template v-if="isOpened">
      <DefaultInput
        :field="'location'"
        :type="'text'"
        @change="onSearch($event)"
        class="mb-2"
      >
        <template #prepend>
          <font-awesome-icon :icon="['fas', 'location-dot']" />
        </template>
      </DefaultInput>

      <div class="flex flex-col justify-center items-center shadow-md bg-zinc-50 cursor-pointer z-10 max-h-60 overflow-auto py-2 px-2">

        <template v-if="loading">
          <font-awesome-icon :icon="['fas', 'circle-notch']" spin  />
          <small class="mt-2">Buscando informações...</small>
        </template>

        <template v-if="items.length > 0">
        <small class="mt-2" v-for="(item, index) in items" :key="index">
          {{ item.display_name }}
        </small>
      </template>
      </div>
    </template>

    <div
      id="map"
      v-if="isOpened"
      class="rounded-lg top-10 z-5"
      style="height: 500px; width: 100%; z-index: 5"
    ></div>
  </div>
</template>

<script lang="ts" setup>
  import { useDebounceFn } from '@vueuse/core';

  const isOpened = ref(false);
  const address = ref('');

  const items = ref<any[]>([]);
  const loading = ref<boolean>(false);

  let currentMarker: any = null;

  onMounted(async () => {});

  const onSearch = useDebounceFn((text: string) => {
    items.value = []
    onFindAddress(text);
  }, 1000);

  async function onFindAddress(text: string) {
    loading.value = true;

    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      text
    )}&format=json&addressdetails=1&limit=5`;

    const { data, error, pending } = await useFetch<any[]>(url, {
      headers: {
        'Accept-Language': 'pt-BR',
      },
    });

    if (data.value) {
      items.value = data.value;
    }

    loading.value = pending.value;
  }

  async function onOpenMap() {
    isOpened.value = !isOpened.value;

    if (!isOpened.value) {
      return;
    }

    const L = await import('leaflet');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const map = L.map('map').setView([latitude, longitude], 13);

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
          }).addTo(map);

          currentMarker = L.marker([latitude, longitude])
            .addTo(map)
            .bindPopup('Você está aqui!')
            .openPopup();

          map.on('click', (e) => {
            const { lat, lng } = e.latlng;

            if (currentMarker) {
              currentMarker.remove();
            }

            currentMarker = L.marker([lat, lng])
              .addTo(map)
              .bindPopup('Você está aqui!')
              .openPopup();
          });
        },
        (err) => {
          // error.value = 'Erro ao obter a localização: ' + err.message;
        }
      );
    } else {
      // error.value = 'Geolocalização não é suportada neste navegador.';
    }
  }
</script>

<style lang="css" scoped>
  .at-top {
    z-index: 999a !important;
  }
</style>
