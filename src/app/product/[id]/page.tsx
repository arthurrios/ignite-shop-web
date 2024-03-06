import { Metadata } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'

import { Button } from '@/components/button'
import { getProduct } from '@/services/getProduct'

export interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(params.id)

  return {
    title: product.name,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id)

  const price = product.default_price as Stripe.Price
  const formattedPrice = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(price.unit_amount! / 100)

  return (
    <main className="mx-auto grid max-w-main grid-cols-2 items-stretch gap-16">
      <div className="flex h-container w-full max-w-[576px] items-center justify-center rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1">
        <Image src={product.images[0]} width={520} height={480} alt="" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-300">{product.name}</h1>
        <span className="mt-4 block text-2xl text-green-300">
          {formattedPrice}
        </span>

        <p className="mt-10 text-md leading-[1.6] text-gray-300">
          {product.description}
        </p>

        <Button defaultPriceId={price.id} />
      </div>
    </main>
  )
}
