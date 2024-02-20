"use client"

import type { Metadata } from 'next'
import Print from '@/app/components/Print/print'
import Loading from '@/app/components/Loading/Loading';
import { usePage } from '@/app/hooks/page.hook';

const metadata: Metadata = {
  title: 'Documents',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { bail, setBail } = usePage();

  // Test if bail is an empty object.
  if (Object.keys(bail).length === 0) {
    return <Loading />
  }

  return (
    <div className="document-layout">

      <Print />

      {children}
    </div>
  )
}
