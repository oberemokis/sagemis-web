type RevealEl = HTMLElement & { _io?: IntersectionObserver };

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("reveal", {
    mounted(el: RevealEl, binding) {
      const delay = Number(binding.value) || 0;

      import("animejs").then(({ animate }) => {
        const io = new IntersectionObserver(
          (entries, observer) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              const target = entry.target as HTMLElement;
              animate(target, {
                opacity: [0, 1],
                translateY: [32, 0],
                duration: 750,
                delay,
                ease: "outCubic",
                onComplete: () => {
                  target.style.transform = "";
                },
              });
              observer.unobserve(target);
            }
          },
          { threshold: 0.15 }
        );
        io.observe(el);
        el._io = io;
      });
    },
    unmounted(el: RevealEl) {
      el._io?.disconnect();
    },
  });
});
