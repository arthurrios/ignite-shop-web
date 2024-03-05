import { cache } from 'react'

import { stripe } from '@/lib/stripe'

export interface ProductItem {
  id: string
  name: string
  imageUrl: string
  price: string
}

export const listProducts = cache(async () => {
  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
  })

  return data
})
