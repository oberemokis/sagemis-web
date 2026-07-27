<script setup lang="ts">
import { site } from "~/site.config";

const { rental } = site;
</script>

<template>
  <section
    id="rental"
    aria-labelledby="rental-title"
    class="snap-section relative flex flex-col justify-center px-6 pb-16 pt-28"
  >
    <div class="relative z-10 mx-auto w-full max-w-280">
      <SectionIntro
        title-id="rental-title"
        :eyebrow="rental.eyebrow"
        :title="rental.title"
        :lead="rental.lead"
      />

      <ul class="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
        <li
          v-for="(item, i) in rental.items"
          :key="item.name"
          v-reveal="240 + i * 120"
          class="reveal-init"
        >
          <ScooterCard
            :item="item"
            :cta="rental.cta"
            :cta-href="rental.ctaHref"
          />
        </li>
      </ul>
    </div>
  </section>
</template>
