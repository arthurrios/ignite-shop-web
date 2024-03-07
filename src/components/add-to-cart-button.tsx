'use client'

import { ButtonHTMLAttributes } from 'react'

import { useCart } from '@/contexts/cart-context'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  priceId: string
  imageUrl: string
  name: string

  priceInCents: number
}

export function AddToCartButton({
  priceId,
  name,
  priceInCents,
  imageUrl,
}: ButtonProps) {
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(priceId, imageUrl, name, priceInCents)
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
      Add to cart
    </button>
  )
}
