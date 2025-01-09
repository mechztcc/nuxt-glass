<template>
  <div class="flex flex-col w-full">
    <div
      @click="onOpenMap()"
      class="flex justify-center items-center border trans rounded-md px-3 py-3 w-full cursor-pointer dark:bg-zinc-900 dark:text-zinc-50 dark:border-zinc-900 dark:hover:border-teal-400 hover:bg-zinc-900 hover:text-teal-400"
    >
      <font-awesome-icon :icon="['fas', 'map-location-dot']" />
      <h1 class="mx-3 text-lg hover:text-teal-400">
        Usar minha localização atual
      </h1>
    </div>

    <div class="flex my-3" v-if="isOpened">
      <div id="map" class="rounded-lg" style="height: 500px; width: 100%"></div>
    </div>
  </div>
</template>

<script setup>
  const isOpened = ref(false);

  let currentMarker = null;

  onMounted(async () => {});

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
          error.value = 'Erro ao obter a localização: ' + err.message;
        }
      );
    } else {
      // error.value = 'Geolocalização não é suportada neste navegador.';
    }
  }
</script>

<style lang="scss" scoped></style>
