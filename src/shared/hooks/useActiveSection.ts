"use client";
import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[], options: IntersectionObserverInit = { rootMargin: '0px 0px -65% 0px' }) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, options);
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sectionIds.join(','), options.rootMargin]);
  return active;
}
