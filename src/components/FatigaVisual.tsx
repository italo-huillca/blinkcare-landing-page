'use client'

import { FaExclamationTriangle, FaEyeSlash, FaFire, FaHeadSideCough, FaBrain } from 'react-icons/fa'
import { MdRemoveRedEye } from 'react-icons/md'

export default function FatigaVisual() {
  return (
    <section className="py-20 bg-white" id="que-es-fatiga-visual">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaExclamationTriangle />
            <span>Problema de Salud Digital</span>
          </div>
          
          <h2 className="section-title">
            ¿Qué es la <span className="text-red-600">Fatiga Visual Digital</span>?
          </h2>
          
          <p className="section-subtitle text-gray-700 mt-6">
            Un problema de salud moderna que afecta a <strong>más del 70% de personas</strong> que usan pantallas más de 6 horas al día
          </p>
        </div>

        {/* Explicación en 30 segundos */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 mb-16 border border-red-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">⏱️</span>
            En 30 segundos
          </h3>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              La <strong>fatiga visual digital</strong> (también conocida como síndrome visual informático) es un conjunto de síntomas oculares y visuales 
              que aparecen después de usar dispositivos digitales de forma prolongada.
            </p>
            
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong className="text-red-600">El problema raíz:</strong> Cuando miramos pantallas, nuestro cerebro se concentra tanto que 
              <strong> olvidamos parpadear</strong>. El parpadeo normal es de 15-20 veces por minuto, pero frente a una computadora 
              <strong className="text-red-600"> baja a solo 4-5 veces</strong>. Esto provoca que la lágrima no se distribuya correctamente, 
              dejando los ojos <strong>secos, irritados y cansados</strong>.
            </p>
          </div>
        </div>

        {/* Datos médicos reales */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200 hover:shadow-xl transition-shadow">
            <div className="text-5xl font-bold text-red-600 mb-2">70%</div>
            <p className="text-gray-700 font-medium">de trabajadores digitales sufren fatiga visual</p>
            <p className="text-sm text-gray-500 mt-2">Fuente: American Optometric Association</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-200 hover:shadow-xl transition-shadow">
            <div className="text-5xl font-bold text-orange-600 mb-2">75%</div>
            <p className="text-gray-700 font-medium">reducción en la frecuencia de parpadeo</p>
            <p className="text-sm text-gray-500 mt-2">Estudios clínicos de optometría</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200 hover:shadow-xl transition-shadow">
            <div className="text-5xl font-bold text-red-600 mb-2">6-10h</div>
            <p className="text-gray-700 font-medium">promedio diario frente a pantallas</p>
            <p className="text-sm text-gray-500 mt-2">Población laboral moderna</p>
          </div>
        </div>

        {/* Por qué ocurre */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            ¿Por qué ocurre? Las causas científicas
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <FaBrain className="text-white text-xl" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Concentración extrema</h4>
                <p className="text-gray-600">
                  El cerebro entra en un estado de alta concentración que suprime el reflejo natural del parpadeo. 
                  Es un mecanismo evolutivo que no estaba preparado para pantallas.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <FaEyeSlash className="text-white text-xl" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Reducción del parpadeo</h4>
                <p className="text-gray-600">
                  De 15-20 parpadeos/minuto (normal) a 4-5 parpadeos/minuto (frente a pantallas). 
                  La película lagrimal se evapora 3 veces más rápido de lo que se repone.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <MdRemoveRedEye className="text-white text-xl" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Esfuerzo de acomodación</h4>
                <p className="text-gray-600">
                  Los músculos ciliares del ojo trabajan constantemente para enfocar objetos cercanos durante horas, 
                  generando fatiga muscular ocular.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <FaFire className="text-white text-xl" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Evaporación lagrimal acelerada</h4>
                <p className="text-gray-600">
                  Sin parpadeo frecuente, la lágrima se evapora completamente en 10-15 segundos, 
                  dejando la superficie ocular desprotegida y seca.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Síntomas más comunes */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Síntomas más comunes
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-l-4 border-red-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <FaEyeSlash className="text-red-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Ojos secos</h4>
                  <p className="text-gray-600 text-sm">Sensación de arena o sequedad extrema. El síntoma #1 más reportado.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-l-4 border-orange-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <FaFire className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Ardor y picazón</h4>
                  <p className="text-gray-600 text-sm">Irritación constante que empeora con las horas de exposición.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <MdRemoveRedEye className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Visión borrosa</h4>
                  <p className="text-gray-600 text-sm">Dificultad para enfocar después de horas de trabajo digital.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaHeadSideCough className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Dolor de cabeza</h4>
                  <p className="text-gray-600 text-sm">Cefalea tensional por esfuerzo visual prolongado.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-l-4 border-gray-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <FaEyeSlash className="text-gray-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Cansancio ocular</h4>
                  <p className="text-gray-600 text-sm">Sensación de ojos pesados, difíciles de mantener abiertos.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-l-4 border-red-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <FaBrain className="text-red-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Baja productividad</h4>
                  <p className="text-gray-600 text-sm">Dificultad de concentración y rendimiento reducido.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action suave */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">¿Reconoces estos síntomas?</h3>
          <p className="text-xl mb-6 opacity-90">
            BlinkCare ataca la causa raíz: <strong>entrena tu parpadeo</strong> para prevenir todos estos problemas
          </p>
          <button 
            onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
          >
            Descubrir cómo funciona
            <span>→</span>
          </button>
        </div>

        {/* Sugerencia de imagen */}
        <div className="mt-8 text-center text-sm text-gray-500 italic">
          💡 Sugerencias de imágenes: Infografía del ojo con lágrima evaporándose, gráfico de barras comparando parpadeos normal vs. pantalla, ilustración médica del síndrome visual informático
        </div>
      </div>
    </section>
  )
}
