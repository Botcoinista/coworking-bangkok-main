import { useEffect } from 'react';

/**
 * Hook to detect clicks outside of the provided ref and call the provided callback.
 * @param {React.RefObject} ref - React ref of the element to detect outside clicks.
 * @param {Function} callback - Function to be called when an outside click is detected.
 */
function useOutsideClick(ref: React.RefObject<HTMLElement>, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: globalThis.MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

export default useOutsideClick;
