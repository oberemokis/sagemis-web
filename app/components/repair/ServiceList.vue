<script setup lang="ts">
import type { RepairService } from "~/site.config";

defineProps<{ services: readonly RepairService[] }>();
</script>

<template>
  <ol class="flex flex-col">
    <ServiceItem
      v-for="(service, i) in services"
      :key="service.title"
      :service="service"
      :index="i"
      v-reveal="120 + i * 90"
      class="reveal-init"
    />
  </ol>
</template>
