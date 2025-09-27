import { GlobeAltIcon, CheckCircleIcon, EyeIcon, StarIcon, TruckIcon, PencilSquareIcon, CheckBadgeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

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
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">Libertad</h4>
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <GlobeAltIcon className="w-7 h-7 text-blue-600" />
                  </div>
                </div>
                <p className="text-gray-600">Sin restricciones de kilometraje ni limitaciones geográficas</p>
              </div>
              <div className="bg-gray-50/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">Confianza</h4>
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircleIcon className="w-7 h-7 text-blue-600" />
                  </div>
                </div>
                <p className="text-gray-600">Vehículos certificados y seguros integrales incluidos</p>
              </div>
              <div className="bg-gray-50/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">Transparencia</h4>
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <EyeIcon className="w-7 h-7 text-blue-600" />
                  </div>
                </div>
                <p className="text-gray-600">Precios claros sin costos ocultos ni sorpresas</p>
              </div>
              <div className="bg-gray-50/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">Excelencia</h4>
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <StarIcon className="w-7 h-7 text-blue-600" />
                  </div>
                </div>
                <p className="text-gray-600">Atención personalizada las 24 horas del día</p>
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
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="bg-blue-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <DocumentTextIcon className="w-8 h-8 text-gray-100" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
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
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="bg-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <TruckIcon className="w-8 h-8 text-gray-100" />
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
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="bg-gray-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <PencilSquareIcon className="w-8 h-8 text-gray-100" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
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
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <CheckBadgeIcon className="w-8 h-8 text-gray-100" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
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