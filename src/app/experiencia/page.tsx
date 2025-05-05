import React from 'react'
import Navbar from '../navbar'

const Experiencia = () => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />  
              <h2 className="text-4xl font-normal mb-16 text-white text-center mt-24">Experiencia Profesional</h2>
      <section className="w-full flex flex-col items-center pr-80">

        
        <div className="relative w-full md:w-3/4 max-w-4xl">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-400"></div>

          <div className="mb-16 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
              <div className="w-4 h-4 rounded-full bg-gray-400 border-4 border-gray-900"></div>
              <div className=" text-gray-400 font-bold text-2xl mt-2 absolute -left-8">2025</div>
            </div>
            <div className="mr-auto ml-8 md:ml-auto md:mr-[55%] p-6 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full md:w-[90%] border-r-4 border-blue-400">
              <h3 className="text-2xl font-bold text-white">Fullstack developer</h3>
              <h4 className="text-lg italic text-gray-400 mb-4">ITTI - Ene 2025 / Actualidad</h4>
              <p className="text-gray-300">
                Desarrollo integral de producto propio para la gestion de personal.
                <span className="block">Tecnologías: NextJS, React, Typescript, Next JS, Tailwind, NodeJS, PostgreSQL, Docker, AWS.</span>
              </p>
            </div>
          </div>

          {/* Num Finance */}
          <div className="mb-16 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
              <div className="w-4 h-4 rounded-full bg-gray-400 border-4 border-gray-900"></div>
              <div className="text-lg text-gray-400 mt-2 absolute -left-12">2023</div>
            </div>
            <div className="ml-auto mr-8 md:mr-auto md:ml-[55%] p-6 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full md:w-[90%] border-l-4 border-blue-400">
              <h3 className="text-2xl font-bold text-white">Sr Front-end developer</h3>
              <h4 className="text-lg italic text-gray-400 mb-4">Num Finance - Jun 2023 / Ene 2025</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Desarrollo end to end de productos digitales Web3</li>
                <li>• Interacción con contratos inteligentes (Base, OP Sepolia, Polygon, Ethereum)</li>
                <li>• Integración de librerías Web3 (Wagmi, Ethers, RainbowKit)</li>
                <li>• Stack: NextJS, React, Typescript, Tailwind, NodeJS</li>
                <li>• Testing con Vitest y Jest</li>
                <li>• Deployment en AWS y Vercel</li>
              </ul>
            </div>
          </div>

          {/* IT Desarrollos */}
          <div className="mb-16 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
              <div className="w-4 h-4 rounded-full bg-gray-400 border-4 border-gray-900"></div>
              <div className="text-lg text-white mt-2 absolute -left-12">2019</div>
            </div>
            <div className="mr-auto ml-8 md:ml-auto md:mr-[55%] p-6 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full md:w-[90%] border-r-4 border-blue-400">
              <h3 className="text-2xl font-bold text-white">Front-end developer</h3>
              <h4 className="text-lg italic text-gray-400 mb-4">IT Desarrollos (Nosis) - Nov 2019 / Jun 2023</h4>
              <p className="text-gray-300">
                Desarrollo front-end en proyectos bancarios y financieros utilizando React, Typescript, Tailwind y más.
              </p>
            </div>
          </div>

          {/* Freelance */}
          <div className="mb-16 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
              <div className="w-4 h-4 rounded-full bg-gray-400 border-4 border-gray-900"></div>
              <div className="text-lg text-white mt-2 absolute -left-12">2017</div>
            </div>
            <div className="ml-auto mr-8 md:mr-auto md:ml-[55%] p-6 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full md:w-[90%] border-l-4 border-blue-400">
              <h3 className="text-2xl font-bold text-white">Desarrollador Web</h3>
              <h4 className="text-lg italic text-gray-400 mb-4">Independiente - Ene 2017 / Actualidad</h4>
              <p className="text-gray-300">
                Desarrollo freelance para clientes internacionales, incluyendo un E-commerce para una tienda española.
              </p>
            </div>
          </div>

          {/* Experiencia Financiera */}
          <div className="mb-16 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
              <div className="w-4 h-4 rounded-full bg-gray-400 border-4 border-gray-900"></div>
              <div className="text-lg text-white mt-2 absolute -left-12">2013</div>
            </div>
            <div className="mr-auto ml-8 md:ml-auto md:mr-[55%] p-6 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full md:w-[90%] border-r-4 border-blue-400">
              <h3 className="text-2xl font-bold text-white">Experiencia Financiera</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="text-lg font-semibold">Analista de Finanzas - Galeno Seguros</h4>
                  <p className="text-sm text-gray-400">2017 - 2019</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Analista de Tesorería - Grupo Clarín</h4>
                  <p className="text-sm text-gray-400">2016 - 2017</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Analista de Tesorería - CPC S.A.</h4>
                  <p className="text-sm text-gray-400">2013 - 2016</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experiencia Temprana */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
              <div className="w-4 h-4 rounded-full bg-gray-400 border-4 border-gray-900"></div>
              <div className="text-lg text-white mt-2 absolute -left-12">2009</div>
            </div>
            <div className="ml-auto mr-8 md:mr-auto md:ml-[55%] p-6 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full md:w-[90%] border-l-4 border-blue-400">
              <h3 className="text-2xl font-bold text-white">Experiencia Inicial</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="text-lg font-semibold">Analista de Cuentas a pagar - Zonis BTU UTE</h4>
                  <p className="text-sm text-gray-400">2010 - 2012</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Administrativo - ArgentinaMall.com</h4>
                  <p className="text-sm text-gray-400">2009 - 2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experiencia
