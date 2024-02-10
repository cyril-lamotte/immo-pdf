import type { Metadata } from 'next'
import './styles/styles.scss'

export const metadata: Metadata = {
  title: 'Immo doc',
  description: 'Générateur de documents immobiliers',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
