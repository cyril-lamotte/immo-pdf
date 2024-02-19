"use client"

import type { Metadata } from 'next'
import Navigation from './components/Navigation/navigation';
import { BailContextProvider } from './contexts/BailContextProvider';
import './styles/styles.scss'

const metadata: Metadata = {
  title: 'Générateur de documents immobiliers',
  description: 'Générateur de documents immobiliers',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
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
