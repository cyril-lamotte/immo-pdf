import type { Metadata } from 'next'
import Print from '../components/Print/print'

export const metadata: Metadata = {
  title: 'Documents',
}

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="document-layout">

      <Print />

      {children}
    </div>
  )
}
