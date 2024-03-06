/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { getCheckoutSession } from '@/services/getCheckoutSession'

interface SuccessPageProps {
  searchParams: {
    session_id: string
  }
}

export default async function Success({ searchParams }: SuccessPageProps) {
  if (!searchParams.session_id) {
    redirect('/')
  }

  const { customerName, product } = await getCheckoutSession(
    searchParams.session_id,
  )

  return (
    <main className="h-container mx-auto flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-100">Purchase done!</h1>

      <div className="mt-16 flex h-[145px] w-full max-w-[130px] items-center justify-center rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1">
        <Image src={product.imageUrl} width={120} height={110} alt="" />
      </div>

      <p className="mt-8 max-w-[490px] text-center text-xl leading-[1.4] text-gray-300">
        Yay! <strong>{customerName}</strong>, your{' '}
        <strong>{product.name}</strong> it's on the way.
      </p>

      <Link
        className="mt-20 block text-lg font-bold text-green-500 hover:text-green-300"
        href="/"
      >
        Back to catalog
      </Link>
    </main>
  )
}
