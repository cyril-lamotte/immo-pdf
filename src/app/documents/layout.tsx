"use client"

import type { Metadata } from 'next'
import Print from '../components/Print/print'
import { usePage } from '../hooks/page.hook';

const metadata: Metadata = {
  title: 'Documents',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { bail, setBail } = usePage();

  return (
    <div className="document-layout">

      <Print />

      {children}
    </div>
  )
}
