'use client'

import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  defaultPriceId: string
}

export function Button({ defaultPriceId }: ButtonProps) {
  function handleBuyProduct() {
    console.log(defaultPriceId)
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
