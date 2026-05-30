<script setup lang="ts">
import { site } from "~/site.config";

withDefaults(defineProps<{ withWord?: boolean }>(), { withWord: true });
</script>

<template>
  <span class="inline-flex select-none items-center gap-2 leading-none">
    <IconScooter class="h-[1.18em] w-[1.18em] shrink-0" />
    <span v-if="withWord" class="font-tiempos font-normal tracking-[-0.01em]">{{
      site.brand
    }}</span>
  </span>
</template>
