'use client'

import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import Link from 'next/link'

import { useCart } from '@/contexts/cart-context'
import { postCheckoutSession } from '@/services/postCheckoutSession'

import logoImg from '../assets/logo.svg'
import { CartItem } from './cart-item'
import { CartWidget } from './cart-widget'

export interface HeaderProps {}

export function Header() {
  const { items, clearCart } = useCart()

  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0)
  const orderTotal = items.reduce(
    (acc, item) => acc + item.quantity * item.priceInCents,
    0,
  )

  async function handleCheckout() {
    const checkoutItems = items.map((item) => {
      return {
        price: item.priceId,
        quantity: item.quantity,
      }
    })

    try {
      const checkoutUrl = await postCheckoutSession(checkoutItems)

      window.location.href = checkoutUrl
      clearCart()
    } catch (error) {
      alert('Error redirecting to checkout.')
    }
  }

  return (
    <header className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-0 py-8">
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <Dialog.Root>
        <Dialog.Trigger>
          <CartWidget />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Content className="absolute bottom-0 right-0 top-0 z-10 h-screen w-modal bg-gray-800 px-12 pb-12 pt-18 drop-shadow-modal">
            <div className="flex h-full flex-col justify-between">
              <div>
                <Dialog.Title className="mb-8 text-lg font-bold">
                  Cart
                </Dialog.Title>
                <div className="space-y-10">
                  {items.map((item) => {
                    return <CartItem key={item.priceId} item={item} />
                  })}
                </div>
              </div>
              <div className="space-y-14">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-gray-100">Quantity</h3>
                    <span className="text-md text-gray-300">
                      {totalQuantity} items
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-md font-bold text-gray-100">
                      Order total
                    </h3>
                    <span className="text-xl font-bold text-gray-100">
                      {new Intl.NumberFormat('en', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(orderTotal / 100)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full rounded-lg border-0 bg-green-500 px-8 py-5 text-md font-bold text-white hover:bg-green-300"
                >
                  Complete order
                </button>
              </div>
            </div>
            <Dialog.Close>
              <X
                size={24}
                weight="bold"
                className="absolute right-6 top-6 text-gray-400"
              />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  )
}
