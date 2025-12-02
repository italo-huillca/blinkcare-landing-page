'use client'

import { FaEye, FaRocket } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'

export default function Hero() {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-purple-50 pt-20 pb-32">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaRocket className="text-primary-600" />
              <span>Tecnología Médica Preventiva</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Protege tu visión con{' '}
              <span className="text-gradient">BlinkCare</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium">
              El primer dispositivo inteligente que previene la fatiga visual digital
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              <strong>BlinkCare</strong> detecta en tiempo real cuando dejas de parpadear frente a la pantalla y te envía recordatorios discretos. 
              Previene <strong>ojos secos</strong>, ardor, <strong>visión borrosa</strong> y <strong>cansancio ocular</strong> antes de que aparezcan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToCTA}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <FaEye />
                Proteger mi visión ahora
                <BsArrowRight className="text-xl" />
              </button>
              
              <button 
                onClick={scrollToCTA}
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Recibir diagnóstico visual
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
              <div>
                <div className="text-4xl font-bold text-primary-600">15-20</div>
                <div className="text-sm text-gray-600 mt-1">Parpadeos normales/min</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600">4-5</div>
                <div className="text-sm text-gray-600 mt-1">Frente a pantallas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-health-green">100%</div>
                <div className="text-sm text-gray-600 mt-1">Prevención efectiva</div>
              </div>
            </div>
          </div>
          
          {/* Image/Mockup */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-purple-100 rounded-xl flex items-center justify-center">
                  {/* Placeholder for device image */}
                  <div className="text-center">
                    <FaEye className="text-8xl text-primary-600 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-700">Dispositivo BlinkCare</p>
                    <p className="text-sm text-gray-500 mt-2">IA + IoT + App</p>
                  </div>
                </div>
                
                {/* Features badges */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="bg-primary-50 rounded-lg p-3 text-center">
                    <div className="font-bold text-primary-600">Detección IA</div>
                    <div className="text-xs text-gray-600">Tiempo real</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <div className="font-bold text-purple-600">Recordatorios</div>
                    <div className="text-xs text-gray-600">Discretos</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-health-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ✓ Respaldo médico
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ✓ Sin suscripciones
              </div>
            </div>
            
            {/* Suggestion for real image */}
            <div className="mt-6 text-center text-sm text-gray-500 italic">
              💡 Sugerencia de imagen: Mockup 3D del dispositivo BlinkCare con pantalla OLED, diseño minimalista en color blanco/azul
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
