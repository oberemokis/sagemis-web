<script setup lang="ts">
import type { FooterColumnData } from "~/site.config";

defineProps<{ column: FooterColumnData }>();
</script>

<template>
  <li class="flex flex-col gap-3">
    <h2
      class="mb-1 text-[13px] font-medium uppercase tracking-widest text-emerald-400"
    >
      {{ column.head }}
    </h2>
    <ul class="flex flex-col gap-3">
      <li v-for="(item, i) in column.items" :key="i">
        <a
          v-if="'href' in item && item.href"
          :href="item.href"
          :target="item.href.startsWith('http') ? '_blank' : undefined"
          :rel="item.href.startsWith('http') ? 'noopener noreferrer' : undefined"
          class="text-[15px] text-neutral-200 transition-colors hover:text-white"
        >
          {{ item.label }}
        </a>
        <span v-else class="text-[15px] text-neutral-200">{{
          item.label
        }}</span>
      </li>
    </ul>
  </li>
</template>
