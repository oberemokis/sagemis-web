<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  lead: string;
  titleId?: string;
}>();
</script>

<template>
  <div>
    <p
      v-reveal
      class="reveal-init mb-4 text-[13px] uppercase tracking-[0.14em] text-emerald-700"
    >
      {{ eyebrow }}
    </p>
    <h2
      :id="titleId"
      v-reveal="80"
      class="reveal-init mb-4 text-[clamp(28px,4vw,44px)] font-semibold leading-[1.15] tracking-[-0.02em]"
    >
      {{ title }}
    </h2>
    <p
      v-reveal="160"
      class="reveal-init max-w-140 text-[18px] text-neutral-500"
    >
      {{ lead }}
    </p>
    <slot />
  </div>
</template>
