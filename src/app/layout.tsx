import type { Metadata } from 'next'
import Navigation from './components/Navigation/navigation';
import ImportData from './components/ImportData/importData';
import './styles/styles.scss'

export const metadata: Metadata = {
  title: 'Générateur de documents immobiliers',
  description: 'Générateur de documents immobiliers',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="fr">
      <body>
        <ImportData />
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
