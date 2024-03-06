'use client'

// import axios from 'axios'
import { ButtonHTMLAttributes } from 'react'

import { useCart } from '@/contexts/cart-context'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  defaultPriceId: string
}

export function AddToCartButton({ defaultPriceId }: ButtonProps) {
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(defaultPriceId)
  }

  // async function handleBuyProduct() {
  //   try {
  //     const response = await axios.post('/api/checkout', {
  //       priceId: defaultPriceId,
  //     })

  //     const { checkoutUrl } = response.data

  //     window.location.href = checkoutUrl
  //   } catch (error) {
  //     alert('Failed connecting to checkout')
  //   }
  // }

  return (
    <button
      onClick={handleAddToCart}
      className="mt-auto cursor-pointer rounded-lg border-0 bg-green-500 p-5 text-md font-bold text-white hover:bg-green-300"
    >
      Buy now
    </button>
  )
}
