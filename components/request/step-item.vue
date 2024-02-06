<template>
  <div class="flex items-center mt-5 text-zinc-500">
    <font-awesome-icon
      :icon="['fas', step]"
      :class="['p-1 px-2 text-white rounded w-fit', bgStyle]"
    />
    <span :class="['mx-2 text-xl', textStyle]">{{ title }}</span>
  </div>
  <span :class="['text-sm mt-2', textStyle]">
    {{ subtitle }}
  </span>
</template>

<script setup lang="ts">

const store = useNewAuctionRequest();
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  step: { type: String, required: true },
});

const bgStyle = computed(() => {
  if (store.step == Number(props.step)) {
    return "bg-zinc-900";
  } else {
    return "bg-zinc-600";
  }
});

const textStyle = computed(() => {
  if (store.step == Number(props.step)) {
    return "text-zinc-900";
  } else {
    return "text-zinc-500";
  }
});
</script>

<style lang="scss" scoped></style>
