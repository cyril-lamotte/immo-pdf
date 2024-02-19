import { useEffect, useContext } from 'react';
import { BailContext } from '../contexts/BailContextProvider';

export const useDocument = () => {
  const { bail, setBail, save } = useContext(BailContext);

  useEffect(() => {
    // Listen to hide event to close bubbles.
    document.addEventListener('onBubbleOpen', (e) => {
      const bubble_id = e.detail;
      const event = new CustomEvent('onBubbleHide', { detail: bubble_id });
      document.dispatchEvent(event);
    });
  }, []);

  const handleClick = () => {
    const event = new Event('onBubbleHide');
    document.dispatchEvent(event);
  }

  return { bail, setBail, save, handleClick };
}
