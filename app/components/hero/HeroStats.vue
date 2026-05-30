<script setup lang="ts">
import type { HeroStat } from "~/site.config";

defineProps<{ stats: readonly HeroStat[] }>();
</script>

<template>
  <ul class="mt-16 flex flex-wrap justify-center gap-9 sm:gap-16">
    <HeroStat v-for="stat in stats" :key="stat.label" :stat="stat" />
  </ul>
</template>
