import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'

export async function getCheckoutSession(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  // const product = session.line_items?.data[0].price?.product as Stripe.Product
  const products = session.line_items?.data.map(
    (item) => item.price?.product,
  ) as Stripe.Product[]

  const totalQuantity = session.line_items?.data.reduce(
    (acc, item) => acc + item.quantity!,
    0,
  )

  return {
    customerName,
    products,
    totalQuantity,
  }
}
