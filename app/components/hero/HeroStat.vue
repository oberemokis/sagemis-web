<script setup lang="ts">
import type { HeroStat } from "~/site.config";

defineProps<{ stat: HeroStat }>();
</script>

<template>
  <li class="flex flex-col gap-1">
    <span class="text-[32px] font-semibold tracking-[-0.02em]">
      {{ stat.num }}
    </span>
    <span class="text-sm text-neutral-500">{{ stat.label }}</span>
  </li>
</template>
