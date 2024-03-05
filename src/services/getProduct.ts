import Stripe from 'stripe'

import { api } from '@/data/api'

export async function getProduct(id: string): Promise<Stripe.Product> {
  const response = await api(`/products/${id}`, {
    next: {
      revalidate: 60 * 60 * 1, // 1 hour
    },
  })

  const product = await response.json()

  return product
}
