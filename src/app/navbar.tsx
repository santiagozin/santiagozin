import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-ful border-b border-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
  
          <div className="flex space-x-4 justify-center text-white">
          <Link href="/" className=" hover:text-gray-600 text-xl font-semibold">
              Inicio
            </Link>
            <Link href="/about" className=" hover:text-gray-600 text-xl !ml-12 font-semibold">
              About
            </Link>
            <Link href="/experiencia" className=" hover:text-gray-600 text-xl !ml-12 font-semibold">
              Experiencia
            </Link>
            <Link href="/proyectos" className=" hover:text-gray-600 text-xl !ml-12 font-semibold">
              Proyectos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}