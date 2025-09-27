import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="max-w-xs">
            <div className="flex items-center mb-4">
              <img 
              src="/images/logo.svg" 
              alt="SS Rental" 
              className="h-10 w-auto mr-3"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Vehículos completamente equipados para que manejes sin preocupaciones.
              Vos manejas, nosotros nos encargamos del resto.
            </p>
            </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Nuestra Flota</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Precios</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Florida Oeste<br />
                  Vicente Lopez
                </span>
              </div>
                <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.09 2.36 7.13L4 29l7.13-2.36A11.93 11.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.97 0-3.89-.57-5.53-1.65l-.39-.25-4.23 1.4 1.4-4.23-.25-.39A9.96 9.96 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3 0 1.35.99 2.65 1.13 2.83.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z"/>
                </svg>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  +54 911528367
                </a>
                </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                <a href="mailto:ssrental@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  ssrental@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 SS Rental. Todos los derechos reservados. Desarrollado por <strong>leontelletxea</strong>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer