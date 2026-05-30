<script setup lang="ts">
import { site } from "~/site.config";

const { footer } = site;
</script>

<template>
  <footer
    id="footer"
    aria-label="Подвал сайта"
    class="snap-section flex flex-col justify-center bg-neutral-950 text-neutral-200"
  >
    <div
      v-reveal
      class="reveal-init mx-auto grid w-full max-w-280 gap-12 px-6 pb-14 pt-18 md:grid-cols-[1fr_1.4fr]"
    >
      <div>
        <a
          href="#top"
          class="text-[22px] font-bold tracking-wide text-white"
          aria-label="sagemis — на главную"
        >
          <BrandLogo />
        </a>
        <p class="mt-4 max-w-70 text-[15px] text-neutral-400">
          {{ footer.tagline }}
        </p>
        <EmailButton class="mt-6" :data="footer.emailButton" />
      </div>

      <ul class="grid gap-8 sm:grid-cols-3">
        <FooterColumn
          v-for="col in footer.columns"
          :key="col.head"
          :column="col"
        />
      </ul>
    </div>

    <FooterBottom :data="footer.bottom" />
  </footer>
</template>
