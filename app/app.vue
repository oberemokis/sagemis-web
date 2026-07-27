<script setup lang="ts">
import { site } from "~/site.config";

const { seo, business, brand, rental, repair } = site;

const absoluteOgImage = seo.url.replace(/\/$/, "") + seo.ogImage;

useSeoMeta({
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords.join(", "),
  author: brand,
  applicationName: brand,
  themeColor: seo.themeColor,
  ogType: "website",
  ogSiteName: brand,
  ogTitle: seo.title,
  ogDescription: seo.description,
  ogUrl: seo.url,
  ogImage: absoluteOgImage,
  ogImageAlt: `${brand} — прокат трициклов и ремонт самокатов`,
  ogLocale: seo.locale,
  twitterCard: "summary_large_image",
  twitterTitle: seo.title,
  twitterDescription: seo.description,
  twitterImage: absoluteOgImage,
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${seo.url}/#website`,
      url: seo.url,
      name: brand,
      description: seo.description,
      inLanguage: "ru-RU",
      publisher: { "@id": `${seo.url}/#business` },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${seo.url}/#business`,
      name: brand,
      legalName: business.legalName,
      description: seo.description,
      url: seo.url,
      image: absoluteOgImage,
      logo: `${seo.url}/logo.svg`,
      telephone: business.telephone,
      email: business.email,
      priceRange: business.priceRange,
      foundingDate: business.foundingDate,
      openingHours: business.openingHours,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.streetAddress,
        addressLocality: business.addressLocality,
        addressCountry: business.addressCountry,
      },
      hasMap: business.mapUrl,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Услуги sagemis",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: rental.title,
            itemListElement: rental.items.map((item) => ({
              "@type": "Offer",
              name: `Прокат — ${item.name}`,
              price: item.price,
              priceCurrency: "RUB",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: item.price,
                priceCurrency: "RUB",
                unitCode: "HUR",
              },
              itemOffered: {
                "@type": "Service",
                name: `Прокат — ${item.name}`,
                description: item.specs.join(", "),
              },
            })),
          },
          {
            "@type": "OfferCatalog",
            name: repair.title,
            itemListElement: repair.services.map((service) => ({
              "@type": "Offer",
              name: service.title,
              itemOffered: {
                "@type": "Service",
                name: service.title,
                description: service.desc,
              },
            })),
          },
        ],
      },
    },
  ],
};

useHead({
  htmlAttrs: {
    lang: "ru",
  },
  link: [
    {
      rel: "canonical",
      href: seo.url,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(jsonLd),
    },
  ],
});
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <NuxtRouteAnnouncer />
    <SiteHeader />
    <main class="relative flex-1">
      <div
        class="pointer-events-none absolute inset-x-0 top-[100vh] hidden h-[200vh] bg-linear-to-b from-white to-emerald-50 min-[861px]:block"
      >
        <RoadBackdrop />
      </div>
      <HeroSection />
      <RentalSection />
      <RepairSection />
    </main>
    <SiteFooter />
  </div>
</template>
