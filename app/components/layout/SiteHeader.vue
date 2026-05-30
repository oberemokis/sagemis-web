<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/70 backdrop-blur-md backdrop-saturate-150"
  >
    <div
      class="mx-auto flex h-18 w-full max-w-280 items-center justify-between px-6"
    >
      <a
        href="#top"
        class="text-xl font-bold tracking-wide text-emerald-700"
        aria-label="sagemis — на главную"
      >
        <BrandLogo />
      </a>

      <SiteNav class="hidden md:block" />

      <BaseButton href="#rental" variant="solid" size="sm">
        Арендовать
      </BaseButton>
    </div>
  </header>
</template>
