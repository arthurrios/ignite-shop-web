import Stripe from 'stripe'

import { Carousel } from '@/components/carousel'
import { Header } from '@/components/header'
import { getProducts } from '@/services/getProducts'

export const fetchCache = 'default-no-store'
export const revalidate = 3600

export default async function Home() {
  const products = await getProducts()

  const productsData = products.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD',
      }).format(price.unit_amount! / 100),
    }
  })

  return (
    <>
      <Header />
      <Carousel products={productsData} />
    </>
  )
}
