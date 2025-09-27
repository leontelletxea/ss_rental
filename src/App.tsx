import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 w-full overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-blue-800 shadow-lg">
        <div className="px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-white text-xl font-bold">
                  SS Rental
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors">
                  Sobre nosotros
                </a>
                <a href="#" className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors">
                  Vehículos
                </a>
                <a href="#" className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors">
                  Tarifas
                </a>
                <Button>Contacto</Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-blue-300 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-6 pt-2 pb-3 space-y-1">
                <a href="#" className="text-white hover:text-blue-300 block px-3 py-2 text-base font-medium">Vehículos</a>
                <a href="#" className="text-white hover:text-blue-300 block px-3 py-2 text-base font-medium">Tarifas</a>
                <a href="#" className="text-white hover:text-blue-300 block px-3 py-2 text-base font-medium">Servicios</a>
                <a href="#" className="text-white hover:text-blue-300 block px-3 py-2 text-base font-medium">Contacto</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/hero_section.jpg)'}}></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative w-full px-6 py-24 sm:py-32">
          {/* Announcement Banner */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800 bg-opacity-50 text-sm text-gray-300 border border-gray-700">
              ¡Descuentos especiales en alquileres por semana! 
              <a href="#" className="ml-2 text-blue-400 hover:text-blue-300 font-medium">
                Ver ofertas →
              </a>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Renta tu auto
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-600">
                sin limitaciones
              </span>
            </h1>
            
            <p className="mt-6 max-w-4xl mx-auto text-xl text-gray-300 leading-relaxed">
              Vehículos confiables y económicos para recorrer todo el país. 
              Sin límites de velocidad y con la libertad de llegar a cualquier destino.
              La diferencia que otras empresas no te ofrecen.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200 shadow-lg">
                Contactanos
              </button>
              <button className="text-white hover:text-gray-300 px-8 py-3 font-medium text-lg transition-colors duration-200 border-b border-transparent hover:border-gray-300">
                Ver vehículos →
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-indigo-500 rounded-full opacity-5 blur-3xl"></div>
      </div>
    </div>
  )
}

export default App
