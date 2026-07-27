<script setup lang="ts">
import { computed } from "vue";
import type { RepairService } from "~/site.config";

const props = defineProps<{ service: RepairService; index: number }>();

const num = computed(() => String(props.index + 1).padStart(2, "0"));
</script>

<template>
  <li class="grid grid-cols-[auto_1fr] items-baseline gap-3 py-5 sm:gap-5 sm:py-6">
    <span class="text-sm tabular-nums text-emerald-600" aria-hidden="true">
      {{ num }}
    </span>
    <div>
      <h3 class="mb-1 text-[18px] font-semibold">{{ service.title }}</h3>
      <p class="text-[15px] text-neutral-500">{{ service.desc }}</p>
    </div>
  </li>
</template>
