import { useEffect, useRef, RefObject } from 'react';

type Callback = (entry: IntersectionObserverEntry) => void;

export const useIntersectionObserver = <T extends HTMLElement>(
  callback: Callback,
  options?: IntersectionObserverInit
): RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) callback(entry);
    }, options);

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [callback, options]);

  // Add type assertion to resolve the TypeScript error
  return ref as RefObject<T>;
};