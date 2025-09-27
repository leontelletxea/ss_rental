import { GlobeAltIcon, CheckCircleIcon, EyeIcon, TruckIcon, PencilSquareIcon, CheckBadgeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <section className="relative py-24 bg-gray-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50 rounded-full opacity-50 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-12">
                Sobre
                <span className="text-blue-600"> Nosotros</span>
            </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                En SS Rental, nos especializamos en ofrecer servicios de alquiler de vehículos 
                que van más allá de lo convencional. Entendemos que cada viaje es único, y por 
                eso nos comprometemos a brindar una experiencia sin limitaciones ni restricciones 
                innecesarias.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nuestra flota está compuesta por vehículos modernos, completamente equipados y 
                mantenidos bajo los más altos estándares de calidad y seguridad. Desde autos 
                económicos hasta vehículos premium, tenemos la opción perfecta para cada necesidad.
              </p>
            </div>
          </div>

          {/* Values Cards */}
          <div className="relative">
            {/* Desktop Layout - Artistic positioning */}
            <div className="hidden lg:block relative h-[700px] w-full">
              {/* Main Central Circle - Libertad */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  <div className="w-72 h-72 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex flex-col items-center justify-center text-center p-10 border-4 border-white">
                    <h3 className="text-3xl font-bold text-white mb-3">Libertad</h3>
                    <p className="text-blue-100 text-base leading-relaxed">
                      Sin límites de velocidad ni distancia
                    </p>
                  </div>
                  {/* Location Pin */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 z-10">
                    <GlobeAltIcon className="w-6 h-6 text-gray-800" />
                  </div>
                </div>
              </div>

              {/* Top Left Circle - Confianza */}
              <div className="absolute top-8 left-4 z-10">
                <div className="relative">
                  <div className="w-72 h-72 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex flex-col items-center justify-center text-center p-8 border-4 border-white">
                    <h3 className="text-2xl font-bold text-white mb-3">Confianza</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Vehículos certificados y seguros incluidos
                    </p>
                  </div>
                  {/* Location Pin */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3">
                    <CheckCircleIcon className="w-6 h-6 text-gray-800" />
                  </div>
                </div>
              </div>

              {/* Top Right Circle - Transparencia */}
              <div className="absolute top-96 right-8 z-30">
                <div className="relative">
                  <div className="w-72 h-72 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex flex-col items-center justify-center text-center p-8 border-4 border-white">
                    <h3 className="text-2xl font-bold text-white mb-3">Transparencia</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Precios claros sin costos ocultos
                    </p>
                  </div>
                  {/* Location Pin */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3">
                    <EyeIcon className="w-6 h-6 text-gray-800" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Layout - Grid */}
            <div className="lg:hidden space-y-8">
              {/* Libertad - Main Value */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex flex-col items-center justify-center text-center p-8 sm:p-10 border-4 border-white shadow-lg">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Libertad</h3>
                    <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                      Sin límites de velocidad ni distancia
                    </p>
                  </div>
                  {/* Location Pin */}
                  <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 sm:p-3 z-10 shadow-md">
                    <GlobeAltIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
                  </div>
                </div>
              </div>

              {/* Secondary Values - Side by side on larger mobiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                {/* Confianza */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-56 h-56 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex flex-col items-center justify-center text-center p-6 sm:p-8 border-4 border-white shadow-lg">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Confianza</h3>
                      <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                        Vehículos certificados y seguros incluidos
                      </p>
                    </div>
                    {/* Location Pin */}
                    <div className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 sm:p-3 shadow-md">
                      <CheckCircleIcon className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
                    </div>
                  </div>
                </div>

                {/* Transparencia */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-56 h-56 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex flex-col items-center justify-center text-center p-6 sm:p-8 border-4 border-white shadow-lg">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Transparencia</h3>
                      <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                        Precios claros sin costos ocultos
                      </p>
                    </div>
                    {/* Location Pin */}
                    <div className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 sm:p-3 shadow-md">
                      <EyeIcon className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Rent Section */}
        <div className="bg-gray-50/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 shadow-lg">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-blue-600 mb-6">¿Cómo Alquilar?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En solo 4 pasos simples tenés tu vehículo listo para usar
            </p>
          </div>

          {/* Steps Process */}
          <div className="relative">

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="bg-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <DocumentTextIcon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    1
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Completá el Formulario</h4>
                <p className="text-gray-600 leading-relaxed">
                  Ingresá tus datos personales, fechas de alquiler y preferencias. 
                  Solo toma 2 minutos y podés hacerlo desde nuestra web o app.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="bg-blue-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <TruckIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    2
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Elegí tu Vehículo</h4>
                <p className="text-gray-600 leading-relaxed">
                  Navegá por nuestra flota y seleccioná el auto perfecto para tu viaje. 
                  Compará precios, características y disponibilidad en tiempo real.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <PencilSquareIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-700 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    3
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Firmá el Contrato</h4>
                <p className="text-gray-600 leading-relaxed">
                  Revisá los términos, firmá digitalmente y realizá el pago seguro. 
                  Todo 100% online con contrato digital y respaldo legal completo.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="bg-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckBadgeIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-800 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    4
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">¡Listo para Manejar!</h4>
                <p className="text-gray-600 leading-relaxed">
                  Retirá tu vehículo en nuestra sucursal o pedí entrega a domicilio. 
                  Check-in digital y manejo inmediato sin complicaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;