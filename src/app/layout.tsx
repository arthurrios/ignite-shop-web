import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { CartProvider } from '@/contexts/cart-context'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Ignite Shop',
    default: 'Ignite Shop',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <CartProvider>
          <div className="flex min-h-screen flex-col items-start justify-center">
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
