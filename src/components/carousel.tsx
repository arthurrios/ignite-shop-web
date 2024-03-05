'use client'

import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import { ProductItem } from '@/services/listProducts'

export interface CarouselProps {
  products: ProductItem[]
}

export function Carousel({ products }: CarouselProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.4,
      spacing: 48,
    },
  })
  return (
    <main
      ref={sliderRef}
      className="keen-slider ml-auto flex min-h-[656px] w-full max-w-main"
    >
      {products.map((product) => {
        return (
          <a
            key={product.id}
            href=""
            className="keen-slider__slide group relative flex min-w-[560px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1"
          >
            <Image
              className="object-cover"
              src={product.imageUrl}
              width={520}
              height={480}
              alt=""
            />

            <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-black/60 p-8 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              <strong className="text-lg">{product.name}</strong>
              <span className="text-xl font-bold text-green-300">
                {product.price}
              </span>
            </footer>
          </a>
        )
      })}
    </main>
  )
}
