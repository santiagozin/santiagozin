import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
  
          <div className="flex space-x-4 justify-center">
            <Link href="/" className="text-black hover:text-gray-600 text-xl font-semibold">
              About
            </Link>
            <Link href="/experiencia" className="text-black hover:text-gray-600 text-xl !ml-12 font-semibold">
              Experiencia
            </Link>
            <Link href="/proyectos" className="text-black hover:text-gray-600 text-xl !ml-12 font-semibold">
              Proyectos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}