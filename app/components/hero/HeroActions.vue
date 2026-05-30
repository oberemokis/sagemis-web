<script setup lang="ts">
import type { HeroAction } from "~/site.config";

defineProps<{ actions: readonly HeroAction[] }>();
</script>

<template>
  <ul class="flex flex-wrap justify-center gap-3.5">
    <li v-for="action in actions" :key="action.href">
      <BaseButton :href="action.href" :variant="action.variant">
        {{ action.label }}
      </BaseButton>
    </li>
  </ul>
</template>
