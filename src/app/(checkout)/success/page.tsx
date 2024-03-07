/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { getCheckoutSession } from '@/services/getCheckoutSession'

import logoImg from '../../../assets/logo.svg'

interface SuccessPageProps {
  searchParams: {
    session_id: string
  }
}

export default async function Success({ searchParams }: SuccessPageProps) {
  if (!searchParams.session_id) {
    redirect('/')
  }

  const { customerName, products, totalQuantity } = await getCheckoutSession(
    searchParams.session_id,
  )

  return (
    <div className="m-auto">
      <Link href="/" className="flex items-center justify-center">
        <Image src={logoImg} alt="" />
      </Link>
      <main className="mx-auto flex h-container flex-col items-center justify-center">
        <div className="flex items-center [&>div:first-child]:ml-0">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="drop-shadow-checkoutItem -ml-14 mb-12 flex size-[140px] items-center justify-center rounded-full bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1"
              >
                <Image
                  src={product.images[0]}
                  width={120}
                  height={110}
                  alt=""
                />
              </div>
            )
          })}
        </div>

        <h1 className="text-2xl font-bold text-gray-100">Purchase done!</h1>
        <p className="mt-6 max-w-[490px] text-center text-xl leading-[1.4] text-gray-300">
          Yay! <strong>{customerName}</strong>, your{' '}
          <strong>{totalQuantity} shirts</strong> order it's on the way.
        </p>

        <Link
          className="mt-16 block text-lg font-bold text-green-500 hover:text-green-300"
          href="/"
        >
          Back to catalog
        </Link>
      </main>
    </div>
  )
}
