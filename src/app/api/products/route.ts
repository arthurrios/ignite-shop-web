import { NextResponse } from 'next/server'

import { stripe } from '@/lib/stripe'

export async function GET() {
  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
  })

  return NextResponse.json(data)
}
