import Stripe from 'stripe'

import { api } from '@/data/api'

export async function getProducts(): Promise<Stripe.Product[]> {
  const response = await api('/products', {
    next: {
      revalidate: 60 * 60 * 1, // 1 hour
    },
  })

  const products = await response.json()

  return products
}
