import { useState } from 'react'
import Button from './Button'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-blue-800 shadow-lg">
      <div className="px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src="/images/logo.svg" 
                alt="SS Rental" 
                className="h-10 w-auto"
              />
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
                Como alquilar
              </a>
              <Button>Contacto</Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-300 p-2 relative"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu with animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pt-2 pb-3 space-y-1">
            <a href="#" className="text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors">
              Sobre nosotros
            </a>
            <a href="#" className="text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors">
              Vehículos
            </a>
            <a href="#" className="text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors">
              Tarifas
            </a>
            <div className="px-3 py-2">
              <Button>Contacto</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar