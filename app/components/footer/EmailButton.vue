<script setup lang="ts">
import { computed } from "vue";
import type { EmailButtonData } from "~/site.config";

const props = defineProps<{ data: EmailButtonData }>();

const href = computed(
  () =>
    `mailto:${props.data.email}?subject=${encodeURIComponent(
      props.data.subject,
    )}`,
);
</script>

<template>
  <BaseButton :href="href" variant="light">
    <IconMail class="h-4.5 w-4.5" />
    {{ data.label }}
  </BaseButton>
</template>
