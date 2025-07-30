import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/context/authContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lame de Tony',
  description: 'Site de présentation de tony coutellerie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}