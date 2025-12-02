'use client'

import { FaBrain, FaMicrochip, FaMobileAlt } from 'react-icons/fa'
import { BsBellFill, BsGraphUp } from 'react-icons/bs'
import { MdRemoveRedEye } from 'react-icons/md'

export default function ComoFunciona() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="como-funciona">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaMicrochip />
            <span>Tecnología Health-Tech</span>
          </div>
          
          <h2 className="section-title">
            Cómo funciona <span className="text-gradient">BlinkCare</span>
          </h2>
          
          <p className="section-subtitle mt-6">
            Un sistema integrado de <strong>3 módulos tecnológicos</strong> que trabajan en sincronía para proteger tu visión
          </p>
        </div>

        {/* 3 Módulos principales */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Módulo 1: IA */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-primary-100">
            <div className="bg-gradient-to-br from-primary-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <FaBrain className="text-white text-4xl" />
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Detección con IA</h3>
              <p className="text-primary-600 font-semibold">Inteligencia Artificial</p>
            </div>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">✓</div>
                <p className="text-gray-700">
                  <strong>Algoritmo de visión computacional</strong> que analiza tu rostro en tiempo real
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">✓</div>
                <p className="text-gray-700">
                  <strong>Detecta la frecuencia de parpadeo</strong> mediante análisis de movimientos oculares
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">✓</div>
                <p className="text-gray-700">
                  Identifica cuando bajas de <strong>10 parpadeos/minuto</strong> (umbral de riesgo)
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">✓</div>
                <p className="text-gray-700">
                  Funciona con cualquier <strong>webcam estándar</strong>, sin hardware adicional
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm">✓</div>
                <p className="text-gray-700">
                  <strong>100% privado:</strong> todo el procesamiento es local, sin enviar datos a la nube
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-primary-50 rounded-xl">
              <p className="text-sm text-primary-800 font-medium text-center">
                ⚡ Precisión del 95% en detección de parpadeo
              </p>
            </div>
          </div>

          {/* Módulo 2: IoT */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-purple-100">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <BsBellFill className="text-white text-4xl" />
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Recordatorio IoT</h3>
              <p className="text-purple-600 font-semibold">Dispositivo Háptico</p>
            </div>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">✓</div>
                <p className="text-gray-700">
                  <strong>Dispositivo wearable discreto</strong> que se coloca en tu escritorio o muñeca
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">✓</div>
                <p className="text-gray-700">
                  Recibe señal de la IA y emite <strong>vibración suave + luz LED</strong>
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">✓</div>
                <p className="text-gray-700">
                  <strong>Recordatorio háptico discreto</strong> que no interrumpe tu flujo de trabajo
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">✓</div>
                <p className="text-gray-700">
                  Pantalla <strong>OLED</strong> que muestra tu frecuencia de parpadeo actual
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">✓</div>
                <p className="text-gray-700">
                  <strong>Batería de 7 días</strong> con carga USB-C rápida
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 rounded-xl">
              <p className="text-sm text-purple-800 font-medium text-center">
                🔔 Motor háptico de alta calidad, silencioso
              </p>
            </div>
          </div>

          {/* Módulo 3: App */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-green-100">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <FaMobileAlt className="text-white text-4xl" />
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">3. App de Seguimiento</h3>
              <p className="text-green-600 font-semibold">Estadísticas Personalizadas</p>
            </div>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">✓</div>
                <p className="text-gray-700">
                  <strong>Dashboard personalizado</strong> con tu historial de parpadeo diario
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">✓</div>
                <p className="text-gray-700">
                  <strong>Gráficas en tiempo real</strong> de tu salud visual a lo largo del día
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">✓</div>
                <p className="text-gray-700">
                  Análisis de <strong>patrones y hábitos</strong>: cuándo parpadeas menos
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">✓</div>
                <p className="text-gray-700">
                  <strong>Recomendaciones personalizadas</strong> basadas en tu comportamiento
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">✓</div>
                <p className="text-gray-700">
                  Compatible con <strong>iOS y Android</strong> + versión web
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-green-50 rounded-xl">
              <p className="text-sm text-green-800 font-medium text-center">
                📊 Sincronización automática en la nube
              </p>
            </div>
          </div>
        </div>

        {/* Proceso paso a paso */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            El proceso completo en <span className="text-gradient">tiempo real</span>
          </h3>
          
          <div className="grid md:grid-cols-5 gap-6">
            {/* Paso 1 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Trabajas normal</h4>
              <p className="text-sm text-gray-600">Tu cámara detecta tu rostro de forma pasiva</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-3xl text-primary-300">→</div>
            </div>
            
            {/* Paso 2 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h4 className="font-bold text-gray-900 mb-2">IA analiza</h4>
              <p className="text-sm text-gray-600">Detecta que bajaste de 10 parpadeos/min</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-3xl text-primary-300">→</div>
            </div>
            
            {/* Paso 3 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Recordatorio</h4>
              <p className="text-sm text-gray-600">El dispositivo vibra suavemente</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-3xl text-primary-300">→</div>
            </div>
            
            {/* Paso 4 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Parpadeas</h4>
              <p className="text-sm text-gray-600">Recuperas lubricación natural</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-3xl text-primary-300">→</div>
            </div>
            
            {/* Paso 5 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                5
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Se registra</h4>
              <p className="text-sm text-gray-600">La app guarda tus estadísticas</p>
            </div>
          </div>
        </div>

        {/* Beneficio clave */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl">
            <MdRemoveRedEye className="text-2xl" />
            <span>Todo sucede en <strong>milisegundos</strong>, sin interrumpir tu trabajo</span>
          </div>
        </div>

        {/* Sugerencia de imagen */}
        <div className="mt-12 text-center text-sm text-gray-500 italic">
          💡 Sugerencias de imágenes: Diagrama de flujo del sistema, mockup de la app mostrando gráficas, foto del dispositivo IoT con pantalla OLED encendida, ilustración del proceso de detección IA
        </div>
      </div>
    </section>
  )
}
