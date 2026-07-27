<script setup lang="ts">
import type { ScooterItem } from "~/site.config";

defineProps<{ item: ScooterItem; cta: string; ctaHref: string }>();
</script>

<template>
  <article
    class="relative flex h-full flex-col border border-neutral-300 bg-white transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
  >
    <span
      class="absolute -left-1 -top-1 h-2 w-2 rotate-45 bg-emerald-600"
      aria-hidden="true"
    />
    <span
      class="absolute -right-1 -top-1 h-2 w-2 rotate-45 bg-emerald-600"
      aria-hidden="true"
    />
    <span
      class="absolute -bottom-1 -left-1 h-2 w-2 rotate-45 bg-emerald-600"
      aria-hidden="true"
    />
    <span
      class="absolute -bottom-1 -right-1 h-2 w-2 rotate-45 bg-emerald-600"
      aria-hidden="true"
    />

    <div
      class="flex h-[260px] items-center justify-center overflow-hidden"
      :style="{ background: item.tone }"
    >
      <PhotoCarousel
        v-if="item.images.length"
        :images="item.images"
        :alt="`${item.name} — ${item.tag}`"
      />
      <IconBike v-else class="h-16 w-16 text-emerald-700" />
    </div>

    <div class="flex flex-1 flex-col gap-[18px] p-6">
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-semibold">{{ item.name }}</h3>
        <span
          class="rounded-full border border-emerald-200 px-2.5 py-1 text-xs uppercase tracking-[0.06em] text-emerald-700"
        >
          {{ item.tag }}
        </span>
      </div>

      <ul v-if="item.colors.length" class="flex flex-wrap items-center gap-3">
        <li
          v-for="color in item.colors"
          :key="color.label"
          class="flex items-center gap-2 text-[15px] text-neutral-500"
        >
          <span
            class="h-4 w-4 rounded-full border border-black/10"
            :style="{ background: color.hex }"
            aria-hidden="true"
          />
          {{ color.label }}
        </li>
      </ul>

      <ul class="flex flex-col gap-2">
        <li
          v-for="spec in item.specs"
          :key="spec"
          class="relative pl-[18px] text-[15px] text-neutral-500 before:absolute before:left-0 before:top-[10px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-600"
        >
          {{ spec }}
        </li>
      </ul>

      <div class="mt-auto flex items-center justify-between pt-2">
        <p class="text-[22px] font-semibold">
          {{ item.price
          }}<small class="text-sm font-normal text-neutral-500">
            {{ item.unit }}</small
          >
        </p>
        <BaseButton :href="ctaHref" variant="ghost" size="sm">
          {{ cta }}
        </BaseButton>
      </div>
    </div>
  </article>
</template>
