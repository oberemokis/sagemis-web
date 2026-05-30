import { ref, watch, onMounted, onBeforeUnmount } from "vue";

export function useActiveSection(ids: string[]) {
  const activeId = ref(ids[0] ?? "");
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) activeId.value = entry.target.id;
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer!.observe(section));
  });

  onBeforeUnmount(() => observer?.disconnect());

  watch(activeId, (id) => {
    const url =
      id && id !== ids[0]
        ? `#${id}`
        : window.location.pathname + window.location.search;
    window.history.replaceState(window.history.state, "", url);
  });

  return { activeId };
}
