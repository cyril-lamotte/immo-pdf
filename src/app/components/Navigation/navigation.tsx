"use client"

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './navigation.scss';

export default function Navigation() {

  const pathname = usePathname()

  return (
    <header className="nav hidden-print">
      <ul>
        <li><Link className={`${pathname === '/' ? 'is-active' : ''}`} href="/">Tableau de bord</Link></li>
        <li><Link className={`${pathname === '/donnees' ? 'is-active' : ''}`} href="/donnees">Données</Link></li>
        <li><Link className={`${pathname === '/documents/contrat-de-location-meublee' ? 'is-active' : ''}`} href="/documents/contrat-de-location-meublee">Contrat de location meublée</Link></li>
        <li><Link className={`${pathname === '/documents/revision-annuelle' ? 'is-active' : ''}`} href="/documents/revision-annuelle">Révision annuelle</Link></li>
        <li><Link className={`${pathname === '/documents/depot-de-garantie' ? 'is-active' : ''}`} href="/documents/depot-de-garantie">Reçu du dépôt de garantie</Link></li>
        <li><Link className={`${pathname === '/documents/facture' ? 'is-active' : ''}`} href="/documents/facture">Facture</Link></li>
        <li><Link className={`${pathname === '/documents/quittance-de-loyer' ? 'is-active' : ''}`} href="/documents/quittance-de-loyer">Quittance de loyer</Link></li>
      </ul>
    </header>
  )
}
