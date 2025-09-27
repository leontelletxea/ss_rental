const HeroSection = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/hero_section.jpg)'}}></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative w-full px-6 py-24 sm:py-32">
        {/* Announcement Banner */}
        {/* <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800 bg-opacity-50 text-sm text-gray-300 border border-gray-700">
            ¡Descuentos especiales en alquileres por semana! 
            <a href="#" className="ml-2 text-blue-400 hover:text-blue-300 font-medium">
              Ver ofertas →
            </a>
          </div>
        </div> */}

        {/* Main Heading */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Tu vehiculo
            <br />
            <span className="text-blue-400">
              sin limites ni restricciones
            </span>
          </h1>
          
          <p className="mt-6 max-w-4xl mx-auto text-xl text-gray-300 leading-relaxed">
            Vehículos completamente equipados para que manejes sin preocupaciones. <br />
            Vos manejas, nosotros nos encargamos del resto.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200 shadow-lg">
              Contactanos
            </button>
            <button className="text-white hover:text-gray-300 px-8 py-3 font-medium text-lg transition-colors duration-200 border-b border-transparent hover:border-gray-300">
              Alquilar →
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-indigo-500 rounded-full opacity-5 blur-3xl"></div>
    </div>
  )
}

export default HeroSection