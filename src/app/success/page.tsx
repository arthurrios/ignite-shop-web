import Link from 'next/link'

export default function Success() {
  return (
    <main className="h-container mx-auto flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-100">Purchase done!</h1>

      <div className="mt-16 flex h-[145px] w-full max-w-[130px] items-center justify-center rounded-lg bg-gradient-to-b from-[#1EA483] to-[#7465D4] p-1"></div>

      <p className="mt-8 max-w-[560px] text-center text-xl leading-[1.4] text-gray-300">
        Uhuul <strong>Diego Fernandes</strong>, sua{' '}
        <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua
        casa.
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
