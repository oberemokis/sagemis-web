<script setup lang="ts">
import type { RepairService } from "~/site.config";

defineProps<{ services: readonly RepairService[] }>();
</script>

<template>
  <div class="relative">
    <span
      class="absolute -left-1 -top-1 h-2 w-2 rotate-45 bg-emerald-600"
      aria-hidden="true"
    />
    <span
      class="absolute -right-1 -top-1 h-2 w-2 rotate-45 bg-emerald-600"
      aria-hidden="true"
    />
    <span
      class="absolute -bottom-1 -left-1 h-2 w-2 rotate-45 bg-emerald-600"
      aria-hidden="true"
    />
    <span
      class="absolute -right-1 -bottom-1 h-2 w-2 rotate-45 bg-emerald-600"
      aria-hidden="true"
    />

    <ol
      class="flex flex-col divide-y divide-neutral-200 border border-neutral-200 bg-white px-4 shadow-[0_12px_40px_rgba(0,0,0,0.05)] sm:px-6"
    >
      <ServiceItem
        v-for="(service, i) in services"
        :key="service.title"
        :service="service"
        :index="i"
        v-reveal="120 + i * 90"
        class="reveal-init"
      />
    </ol>
  </div>
</template>
