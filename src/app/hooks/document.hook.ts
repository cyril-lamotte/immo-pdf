import { useState, useEffect } from 'react';
import { currentBail } from '../models/currentBail';
import { Bail } from '../types/Bail';

export const useDocument = () => {
  const [bail, setBail] = useState<Bail>(currentBail);

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

  return { bail, setBail, handleClick };
}
