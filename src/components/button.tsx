'use client'

import axios from 'axios'
import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  defaultPriceId: string
}

export function Button({ defaultPriceId }: ButtonProps) {
  async function handleBuyProduct() {
    try {
      const response = await axios.post('/api/checkout', {
        priceId: defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      alert('Failed connecting to checkout')
    }
  }

  return (
    <button
      onClick={handleBuyProduct}
      className="mt-auto cursor-pointer rounded-lg border-0 bg-green-500 p-5 text-md font-bold text-white hover:bg-green-300"
    >
      Buy now
    </button>
  )
}
