<script setup lang="ts">
import { site } from "~/site.config";

const { nav } = site;

const sectionIds = ["top", ...nav.map((link) => link.href.slice(1))];
const { activeId } = useActiveSection(sectionIds);
const isActive = (href: string) => activeId.value === href.slice(1);
</script>

<template>
  <nav aria-label="Разделы сайта">
    <ul class="flex items-center gap-8">
      <li v-for="link in nav" :key="link.href">
        <NavLink
          :href="link.href"
          :label="link.label"
          :active="isActive(link.href)"
        />
      </li>
    </ul>
  </nav>
</template>
