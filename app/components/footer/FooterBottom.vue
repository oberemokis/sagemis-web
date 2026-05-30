<script setup lang="ts">
import type { FooterBottomData } from "~/site.config";

defineProps<{ data: FooterBottomData }>();
</script>

<template>
  <div
    class="mx-auto flex w-full max-w-[1120px] flex-col gap-2 border-t border-neutral-800 px-6 py-6 text-[13px] text-neutral-500 sm:flex-row sm:items-center sm:justify-between"
  >
    <small>{{ data.copyright }}</small>
    <a
      :href="data.link.href"
      class="text-neutral-500 transition-colors hover:text-neutral-200"
    >
      {{ data.link.label }}
    </a>
  </div>
</template>
