"use client"

import React from 'react';
import type { Metadata } from 'next'
import Navigation from './components/Navigation/navigation';
import { BailContextProvider } from './contexts/BailContextProvider';
import './styles/styles.scss'

const metadata: Metadata = {
  title: 'Générateur de documents immobiliers',
  description: 'Générateur de documents immobiliers',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const handleClick = () => {
    closeBubbles();
  }

  const handleESC = (e: KeyboardEvent) =>  {
    if (e.code === 'Escape') {
      closeBubbles();
    }
  }

  const closeBubbles = () => {
    const event = new Event('onBubbleHide');
    document.dispatchEvent(event);
  }

  return (
    <html lang="fr" onMouseDown={handleClick} onKeyUp={handleESC}>
      <body>
        <Navigation />
        <main>
          <BailContextProvider>
            {children}
          </BailContextProvider>
        </main>
      </body>
    </html>
  )
}
