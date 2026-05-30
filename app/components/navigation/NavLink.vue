<script setup lang="ts">
defineProps<{ href: string; label: string; active?: boolean }>();
</script>

<template>
  <a
    :href="href"
    :aria-current="active ? 'true' : undefined"
    class="relative text-[15px] transition-colors"
    :class="
      active ? 'text-emerald-700' : 'text-neutral-900 hover:text-emerald-700'
    "
  >
    {{ label }}
    <span
      class="absolute -bottom-1.5 left-0 h-0.5 w-full origin-left rounded-full bg-emerald-700 transition-transform duration-300 ease-out"
      :class="active ? 'scale-x-100' : 'scale-x-0'"
      aria-hidden="true"
    />
  </a>
</template>
