'use client'

import { Handbag } from '@phosphor-icons/react'

import { useCart } from '@/contexts/cart-context'

export function CartWidget() {
  const { items } = useCart()

  return (
    <div className="relative rounded-md bg-gray-800 p-3">
      {items.length > 0 && (
        <div className="absolute -right-[7px] -top-[7px] flex size-6 items-center justify-center rounded-full border-2 border-gray-900 bg-green-500">
          <span className="left-1/2 text-xs font-bold">{items.length}</span>
        </div>
      )}
      <Handbag size={24} weight="bold" className="text-gray-400" />
    </div>
  )
}
