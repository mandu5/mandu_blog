import { useEffect } from "react";

/**
 * useOutsideClick
 * Invokes the provided handler when a mousedown or touchstart event occurs outside the referenced element.
 *
 * @param ref - A ref object pointing to a DOM element
 * @param handler - Callback to execute on outside click
 */
export function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const element = ref.current;
      if (!element || element.contains(event.target as Node)) return;
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener, { passive: true });
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default useOutsideClick;


