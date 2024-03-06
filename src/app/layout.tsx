import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import { CartProvider } from '@/contexts/cart-context'

import logoImg from '../assets/logo.svg'

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
            <header className="mx-auto w-full max-w-[1180px] px-0 py-8">
              <Link href="/">
                <Image src={logoImg} alt="" />
              </Link>
            </header>
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
