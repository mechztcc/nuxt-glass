<template>
  <div class="flex items-center mt-8 text-zinc-500">
    <font-awesome-icon
      :icon="['fas', 'square-check']"
      :class="[bgStyle]"
      :size="'2x'"
    />
    <span :class="['mx-3 text-xl', textStyle]">{{ title }}</span>
  </div>

</template>

<script setup lang="ts">

const store = useNewAuctionRequest();
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  step: { type: String, required: true },
});

const bgStyle = computed(() => {
  if (store.step >= Number(props.step)) {
    return "text-zinc-50";
  } else {
    return "text-zinc-600";
  }
});

const textStyle = computed(() => {
  if (store.step >= Number(props.step)) {
    return "text-zinc-50";
  } else {
    return "text-zinc-500";
  }
});
</script>

<style lang="scss" scoped></style>
