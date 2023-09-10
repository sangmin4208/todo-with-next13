import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppNextUIProvider } from './components/next-ui-provider'
import { Toaster } from '@/components/ui/toaster'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Example TODO App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Toaster />
        <AppNextUIProvider>{children}</AppNextUIProvider>
      </body>
    </html>
  )
}
