<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ images: readonly string[]; alt: string }>();

const index = ref(0);

function go(next: number) {
  const total = props.images.length;
  index.value = (next + total) % total;
}

// Свайп по фото: горизонтальный жест листает, вертикальный отдаём скроллу страницы
let startX = 0;
let startY = 0;

function onTouchStart(event: TouchEvent) {
  const touch = event.changedTouches[0];
  if (!touch) return;
  startX = touch.clientX;
  startY = touch.clientY;
}

function onTouchEnd(event: TouchEvent) {
  const touch = event.changedTouches[0];
  if (!touch) return;
  const dx = touch.clientX - startX;
  const dy = touch.clientY - startY;
  if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
  go(index.value + (dx < 0 ? 1 : -1));
}
</script>

<template>
  <div
    class="group relative h-full w-full overflow-hidden"
    role="group"
    aria-roledescription="карусель"
    :aria-label="alt"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <div
      class="flex h-full w-full transition-transform duration-400 ease-out motion-reduce:transition-none"
      :style="{ transform: `translateX(-${index * 100}%)` }"
    >
      <img
        v-for="(src, i) in images"
        :key="src"
        :src="src"
        :alt="`${alt} — фото ${i + 1} из ${images.length}`"
        class="h-full w-full shrink-0 object-cover"
        :loading="i === 0 ? 'eager' : 'lazy'"
        decoding="async"
      />
    </div>

    <template v-if="images.length > 1">
      <button
        v-for="dir in [-1, 1]"
        :key="dir"
        type="button"
        class="absolute top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-neutral-900 shadow-sm transition-opacity hover:bg-white focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100"
        :class="dir < 0 ? 'left-3' : 'right-3'"
        :aria-label="dir < 0 ? 'Предыдущее фото' : 'Следующее фото'"
        @click="go(index + dir)"
      >
        <svg
          viewBox="0 0 16 16"
          class="h-4 w-4"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          aria-hidden="true"
        >
          <path :d="dir < 0 ? 'M10 3 L5 8 L10 13' : 'M6 3 L11 8 L6 13'" />
        </svg>
      </button>

      <ul class="absolute inset-x-0 bottom-3 flex justify-center gap-2">
        <li v-for="(src, i) in images" :key="src">
          <button
            type="button"
            class="h-2 w-2 rounded-full border border-black/10 transition-colors"
            :class="i === index ? 'bg-emerald-600' : 'bg-white/80'"
            :aria-label="`Фото ${i + 1}`"
            :aria-current="i === index"
            @click="go(i)"
          />
        </li>
      </ul>
    </template>
  </div>
</template>
