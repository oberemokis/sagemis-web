<script setup lang="ts">
import { site } from "~/site.config";

const { hero } = site;
</script>

<template>
  <section
    id="top"
    aria-labelledby="hero-title"
    class="snap-section relative flex flex-col justify-center bg-linear-to-b from-emerald-50 to-white px-6 pb-16 pt-28 text-center"
  >
    <div class="mx-auto flex w-full max-w-280 flex-col items-center">
      <p
        v-reveal
        class="reveal-init mb-4 text-[13px] uppercase tracking-[0.14em] text-emerald-700"
      >
        {{ hero.eyebrow }}
      </p>
      <h1
        id="hero-title"
        v-reveal="80"
        class="reveal-init mb-6 font-tiempos text-[clamp(36px,6.5vw,72px)] font-semibold leading-[1.05] tracking-[-0.03em]"
      >
        <template v-for="(line, i) in hero.titleLines" :key="line">
          {{ line }}<br v-if="i < hero.titleLines.length - 1" />
        </template>
      </h1>
      <p
        v-reveal="160"
        class="reveal-init mx-auto mb-9 max-w-135 text-[19px] text-neutral-500"
      >
        {{ hero.lead }}
      </p>

      <HeroActions v-reveal="240" class="reveal-init" :actions="hero.actions" />
      <!-- <HeroStats v-reveal="340" class="reveal-init" :stats="hero.stats" /> -->
    </div>

    <ScrollHint href="#rental" :label="hero.scrollHint" />
  </section>
</template>
