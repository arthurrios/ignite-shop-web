import Image from 'next/image'

import { CartItem, useCart } from '@/contexts/cart-context'

export interface CartItemProps {
  item: CartItem
}

export function CartItem({ item }: CartItemProps) {
  const { removeCartItem } = useCart()

  const formattedPrice = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format((item.priceInCents * item.quantity) / 100)

  function handleRemove() {
    removeCartItem(item.priceId)
  }

  return (
    <div className="flex items-center gap-5">
      <div className="relative flex h-[93px] w-[102px] items-center justify-center rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4]">
        <div className="absolute -bottom-4 -left-4 flex size-8 items-center justify-center rounded-full border-4 border-gray-800 bg-green-500 text-lg font-bold">
          {item.quantity}
        </div>
        <Image src={item.imageUrl} width={95} height={95} alt="" />
      </div>
      <div className="flex flex-col items-start justify-between">
        <div>
          <h1 className="text-md text-gray-300">{item.name}</h1>
          <strong className="text-md text-gray-100">{formattedPrice}</strong>
        </div>
        <button
          onClick={handleRemove}
          className="leading-0 text-sm font-bold text-green-500 hover:text-green-300"
        >
          Remove
        </button>
      </div>
    </div>
  )
}
