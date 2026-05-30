<script setup lang="ts">
import type { FooterBottomData } from "~/site.config";

defineProps<{ data: FooterBottomData }>();
</script>

<template>
  <div
    class="mx-auto flex w-full max-w-280 flex-col gap-2 border-t border-emerald-900 px-6 py-6 text-[13px] text-emerald-200/60 sm:flex-row sm:items-center sm:justify-between"
  >
    <small>{{ data.copyright }}</small>
    <a
      :href="data.link.href"
      class="text-emerald-200/60 transition-colors hover:text-emerald-100"
    >
      {{ data.link.label }}
    </a>
  </div>
</template>
