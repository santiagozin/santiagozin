"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <nav className="w-ful  text-cyan-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Abrir menú"
          >
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuAbierto ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuAbierto ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuAbierto ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>


          <div
            className={`flex-col space-y-4 absolute text-cyan-700 top-16 left-0 w-full h-full bg-black px-4 py-6 z-50 md:static md:flex md:flex-row md:space-y-0 md:space-x-16 md:bg-transparent md:w-auto md:py-0 md:px-0 md:items-center md:justify-center ${menuAbierto ? 'flex' : 'hidden'} md:flex`}
          >
            <Link href="/experiencia" className="hover:text-gray-600 hover:border-b border-black text-lg md:ml-16 font-semibold text-black">
              Experiencia
            </Link>
            <Link href="/proyectos" className="hover:text-gray-600 hover:border-b border-black text-lg md:ml-16 font-semibold text-black">
              Proyectos 
            </Link>
            <Button variant="primary" className="hover:text-gray-600 hover:border-b border-black text-lg md:ml-16 font-semibold text-black">
             Contactar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}