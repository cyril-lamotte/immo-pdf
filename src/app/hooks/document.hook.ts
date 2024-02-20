import { useEffect } from 'react';
import { useBailContext } from '../contexts/BailContextProvider';

export const useDocument = () => {
  const { bail, setBail, save } = useBailContext();

  useEffect(() => {
    // Listen to hide event to close bubbles.
    document.addEventListener('onBubbleOpen', (e) => {
      const event = e as CustomEvent;
      const bubble_id = event.detail;

      const hideBubbleEvent = new CustomEvent('onBubbleHide', { detail: bubble_id });
      document.dispatchEvent(hideBubbleEvent);
    });
  }, []);

  const handleClick = () => {
    const event = new Event('onBubbleHide');
    document.dispatchEvent(event);
  }

  return { bail, setBail, save, handleClick };
}
