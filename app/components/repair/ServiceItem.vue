<script setup lang="ts">
import { computed } from "vue";
import type { RepairService } from "~/site.config";

const props = defineProps<{ service: RepairService; index: number }>();

const num = computed(() => String(props.index + 1).padStart(2, "0"));
</script>

<template>
  <li
    class="grid grid-cols-[auto_1fr_auto] items-baseline gap-5 border-t border-emerald-100 py-6 last:border-b"
  >
    <span class="text-sm tabular-nums text-emerald-600" aria-hidden="true">
      {{ num }}
    </span>
    <div>
      <h3 class="mb-1 text-[18px] font-semibold">{{ service.title }}</h3>
      <p class="text-[15px] text-neutral-500">{{ service.desc }}</p>
    </div>
    <span class="whitespace-nowrap text-[15px] font-medium">
      {{ service.price }}
    </span>
  </li>
</template>
