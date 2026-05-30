<script setup lang="ts">
defineProps<{ href: string; label: string }>();
</script>

<template>
  <a
    :href="href"
    class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-[13px] uppercase tracking-[0.08em] text-neutral-500 lg:flex"
    aria-label="Прокрутить вниз"
  >
    <span>{{ label }}</span>
    <IconArrowDown class="h-4.5 w-4.5 animate-bounce" />
  </a>
</template>
