import Stripe from 'stripe'

import { Carousel } from '@/components/carousel'
import { stripe } from '@/lib/stripe'

export default async function Home() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount! / 100,
    }
  })

  return <Carousel products={products} />
}
