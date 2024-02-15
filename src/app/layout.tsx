"use client"

import type { Metadata } from 'next'

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation/navigation';
import { currentBail } from './models/currentBail';
import { BailContext } from './contexts/BailContext';
import { Bail } from './types/Bail';
import jwt from "jwt-simple";
import './styles/styles.scss'

const metadata: Metadata = {
  title: 'Générateur de documents immobiliers',
  description: 'Générateur de documents immobiliers',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [bail, setBail] = useState<Bail>(currentBail);

  useEffect(() => {
    // Get data attribute from URL.
    const url = new URL(window.location.href);
    const token = url.searchParams.get('data') ?? null;
    if (token) {
      const data_from_url: Bail = jwt.decode(token, "98woAFhtg4rit3aojJRgifofjiawuSDFh3f8iw23hazsknjvISEBF");
      setBail(data_from_url);

      // Save data to local storage.
      localStorage.setItem('bail', JSON.stringify(data_from_url));
    } else {
      // Get data from local storage.
      const bail_from_storage = localStorage.getItem('bail');
      if (bail_from_storage) {
        setBail(JSON.parse(bail_from_storage));
      }
    }
  }, []);

  return (
    <html lang="fr">
      <body>
        <Navigation />
        <main>
          <BailContext.Provider value={{ bail, setBail }}>
            {children}
          </BailContext.Provider>
        </main>
      </body>
    </html>
  )
}
