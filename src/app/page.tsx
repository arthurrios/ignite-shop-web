'use client'

import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import shirt1 from '../assets/shirts/1.png'
import shirt2 from '../assets/shirts/2.png'
import shirt3 from '../assets/shirts/3.png'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      spacing: 48,
    },
  })

  return (
    <main
      ref={sliderRef}
      className="keen-slider ml-auto flex min-h-[656px] w-full max-w-main"
    >
      <a
        href=""
        className="keen-slider__slide group relative flex min-w-[560px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1"
      >
        <Image
          className="object-cover"
          src={shirt1}
          width={520}
          height={480}
          alt=""
        />

        <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-black/60 p-8 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-lg">Tshirt X</strong>
          <span className="text-xl font-bold text-green-300">$39.90</span>
        </footer>
      </a>

      <a
        href=""
        className="keen-slider__slide group relative flex min-w-[560px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1"
      >
        <Image
          className="object-cover"
          src={shirt2}
          width={520}
          height={480}
          alt=""
        />

        <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-black/60 p-8 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-lg">Tshirt X</strong>
          <span className="text-xl font-bold text-green-300">$39.90</span>
        </footer>
      </a>

      <a
        href=""
        className="keen-slider__slide group relative flex min-w-[560px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1"
      >
        <Image
          className="object-cover"
          src={shirt3}
          width={520}
          height={480}
          alt=""
        />

        <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-black/60 p-8 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-lg">Tshirt X</strong>
          <span className="text-xl font-bold text-green-300">$39.90</span>
        </footer>
      </a>
      <a
        href=""
        className="keen-slider__slide group relative flex min-w-[] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1"
      >
        <Image
          className="object-cover"
          src={shirt3}
          width={520}
          height={480}
          alt=""
        />

        <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-black/60 p-8 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-lg">Tshirt X</strong>
          <span className="text-xl font-bold text-green-300">$39.90</span>
        </footer>
      </a>
    </main>
  )
}
