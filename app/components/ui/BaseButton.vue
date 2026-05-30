<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    href?: string;
    variant?: "solid" | "ghost" | "light";
    size?: "md" | "sm";
  }>(),
  { variant: "solid", size: "md" },
);

const variantClasses: Record<NonNullable<typeof props.variant>, string> = {
  solid: "border-emerald-700 bg-emerald-700 text-white hover:bg-emerald-800",
  ghost:
    "border-emerald-700 bg-transparent text-emerald-700 hover:bg-emerald-700 hover:text-white",
  light: "border-white bg-white text-emerald-800 hover:opacity-85",
};

const sizeClasses: Record<NonNullable<typeof props.size>, string> = {
  md: "px-6 py-3 text-[15px]",
  sm: "px-[18px] py-2.5 text-sm",
};

const tag = computed(() => (props.href ? "a" : "button"));
</script>

<template>
  <component
    :is="tag"
    :href="href"
    class="inline-flex items-center justify-center gap-2 rounded-full border font-medium transition-[color,background-color,opacity]"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </component>
</template>
