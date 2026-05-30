<script setup lang="ts">
import { site } from "~/site.config";

const { repair } = site;
</script>

<template>
  <section
    id="repair"
    aria-labelledby="repair-title"
    class="snap-section flex flex-col justify-center border-y border-emerald-100 bg-emerald-50/50 px-6 pb-16 pt-28"
  >
    <div
      class="mx-auto grid w-full max-w-280 items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16"
    >
      <SectionIntro
        class="md:self-center"
        title-id="repair-title"
        :eyebrow="repair.eyebrow"
        :title="repair.title"
        :lead="repair.lead"
      >
        <BaseButton
          v-reveal="240"
          class="reveal-init mt-8"
          :href="repair.ctaHref"
          variant="solid"
        >
          {{ repair.cta }}
        </BaseButton>
      </SectionIntro>

      <ServiceList :services="repair.services" />
    </div>
  </section>
</template>
