import { NextRequest, NextResponse } from 'next/server'

import { env } from '@/env'
import { stripe } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  const { priceId } = await req.json()

  const successUrl = `${env.NEXT_PUBLIC_API_BASE_URL}/success`
  const cancelUrl = `${env.NEXT_PUBLIC_API_BASE_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  })

  return NextResponse.json(
    {
      checkoutUrl: checkoutSession.url,
    },
    { status: 201 },
  )
}