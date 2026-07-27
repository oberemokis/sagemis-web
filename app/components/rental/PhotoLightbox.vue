<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from "vue";

const props = defineProps<{ images: readonly string[]; alt: string }>();

const open = defineModel<boolean>("open", { required: true });
const index = defineModel<number>("index", { required: true });

const emit = defineEmits<{ close: [] }>();

const closeButton = ref<HTMLButtonElement | null>(null);

function go(next: number) {
  const total = props.images.length;
  index.value = (next + total) % total;
}

function close() {
  open.value = false;
  emit("close");
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") close();
  else if (event.key === "ArrowLeft") go(index.value - 1);
  else if (event.key === "ArrowRight") go(index.value + 1);
  else return;
  event.preventDefault();
}

// Свайп по фото в полноэкранном режиме
let startX = 0;

function onTouchStart(event: TouchEvent) {
  startX = event.changedTouches[0]?.clientX ?? 0;
}

function onTouchEnd(event: TouchEvent) {
  const dx = (event.changedTouches[0]?.clientX ?? 0) - startX;
  if (Math.abs(dx) < 40) return;
  go(index.value + (dx < 0 ? 1 : -1));
}

// Пока просмотр открыт, страница под ним не должна скроллиться и ловить клавиши
watch(open, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeydown);
    nextTick(() => closeButton.value?.focus());
  } else {
    document.body.style.overflow = "";
    window.removeEventListener("keydown", onKeydown);
  }
});

onBeforeUnmount(() => {
  document.body.style.overflow = "";
  window.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-150"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-100 flex flex-col bg-black/95"
        role="dialog"
        aria-modal="true"
        :aria-label="alt"
      >
        <div class="flex items-center justify-between px-5 py-4 text-white">
          <p class="text-sm tabular-nums text-white/70">
            {{ index + 1 }} / {{ images.length }}
          </p>
          <button
            ref="closeButton"
            type="button"
            class="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-white/10"
            aria-label="Закрыть просмотр"
            @click="close"
          >
            <svg
              viewBox="0 0 16 16"
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              aria-hidden="true"
            >
              <path d="M3 3 L13 13 M13 3 L3 13" />
            </svg>
          </button>
        </div>

        <!-- Клик по фону закрывает, клик по самому фото — нет -->
        <div
          class="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-6"
          @click.self="close"
          @touchstart.passive="onTouchStart"
          @touchend.passive="onTouchEnd"
        >
          <img
            :src="images[index]"
            :alt="`${alt} — фото ${index + 1} из ${images.length}`"
            class="max-h-full max-w-full object-contain"
            decoding="async"
          />

          <button
            v-for="dir in images.length > 1 ? [-1, 1] : []"
            :key="dir"
            type="button"
            class="absolute top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
            :class="dir < 0 ? 'left-4' : 'right-4'"
            :aria-label="dir < 0 ? 'Предыдущее фото' : 'Следующее фото'"
            @click="go(index + dir)"
          >
            <svg
              viewBox="0 0 16 16"
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              aria-hidden="true"
            >
              <path :d="dir < 0 ? 'M10 3 L5 8 L10 13' : 'M6 3 L11 8 L6 13'" />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
