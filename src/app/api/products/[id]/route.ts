import { NextResponse } from 'next/server'
import { z } from 'zod'

import { stripe } from '@/lib/stripe'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = z.string().parse(params.id)

  const product = await stripe.products.retrieve(id, {
    expand: ['default_price'],
  })

  if (!product) {
    return new NextResponse()
  }

  return NextResponse.json(product)
}
