"use client"

import React from 'react';
import type { Metadata } from 'next'
import Loading from '@/app/components/Loading/Loading';
import { usePage } from '@/app/hooks/page.hook';

const metadata: Metadata = {
  title: 'Documents',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { bail } = usePage();

  // Test if bail is an empty object.
  if (Object.keys(bail).length === 0) {
    return <Loading />
  }

  return (
    <div className="document-layout">
      {children}
    </div>
  )
}
