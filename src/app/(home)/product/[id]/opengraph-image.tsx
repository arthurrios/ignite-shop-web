/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

import { getProduct } from '@/services/getProduct'

import { ProductPageProps } from './page'
export const runtime = 'edge'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function OgImage({ params }: ProductPageProps) {
  const product = await getProduct(params.id)

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.gray[900],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={product.images[0]} alt="" style={{ width: '100%' }} />
      </div>
    ),
    {
      ...size,
    },
  )
}
