"use client"

import React from 'react';
import Navigation from './components/Navigation/navigation';
import { BailContextProvider } from './contexts/BailContextProvider';
import './styles/styles.scss'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const handleClick = () => {
    closeBubbles();
  }

  const handleESC = (e: React.KeyboardEvent<HTMLInputElement>) =>  {
    if (e.code === 'Escape') {
      closeBubbles();
    }
  }

  const closeBubbles = () => {
    const event = new Event('onBubbleHide');
    document.dispatchEvent(event);
  }

  return (
    <div onMouseDown={handleClick} onKeyUp={handleESC}>
      <Navigation />
      <main>
        <BailContextProvider>
          {children}
        </BailContextProvider>
      </main>
    </div>
  )
}
