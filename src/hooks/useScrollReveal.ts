import { useEffect, useRef, useCallback } from "react";

export function useMultiScrollReveal(selector: string = ".reveal-item") {
  const observerRef = useRef<IntersectionObserver>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-item-visible");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    requestAnimationFrame(() => {
      const elements = document.querySelectorAll(selector);
      if (!elements.length) return;
      elements.forEach((el) => observerRef.current?.observe(el));
    });

    return () => observerRef.current?.disconnect();
  }, [selector]);

  const observerItemRef = useCallback((el: HTMLElement | null) => {
    if (!el) return;
    if (observerRef.current) {
      observerRef.current.observe(el);
    }
  }, []);

  return { observerItemRef };
}
