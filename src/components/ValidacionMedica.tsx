'use client'

import { FaUserMd, FaCertificate, FaFlask, FaHospital } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'

export default function ValidacionMedica() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MdVerified className="text-xl" />
            <span>Respaldo Médico</span>
          </div>
          
          <h2 className="section-title">
            Solución <span className="text-green-600">Médicamente Validada</span>
          </h2>
          
          <p className="section-subtitle mt-6">
            BlinkCare no es un gadget más. Es una <strong>tecnología médica preventiva</strong> respaldada por especialistas en oftalmología y optometría
          </p>
        </div>

        {/* Grid de validaciones */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 text-center border-2 border-green-200">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUserMd className="text-white text-3xl" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Desarrollado con oftalmólogos</h3>
            <p className="text-gray-600 text-sm">
              Colaboración directa con especialistas en salud visual
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center border-2 border-blue-200">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaFlask className="text-white text-3xl" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Basado en estudios clínicos</h3>
            <p className="text-gray-600 text-sm">
              Fundamentado en investigación científica sobre parpadeo y fatiga visual
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center border-2 border-purple-200">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCertificate className="text-white text-3xl" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Certificaciones médicas</h3>
            <p className="text-gray-600 text-sm">
              Cumple con estándares de dispositivos médicos preventivos
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6 text-center border-2 border-teal-200">
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHospital className="text-white text-3xl" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Recomendado clínicamente</h3>
            <p className="text-gray-600 text-sm">
              Solución recomendada para profesionales de alto riesgo visual
            </p>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              La Fatiga Visual Digital es un <span className="text-red-600">problema clínico real</span>
            </h3>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                La <strong>fatiga visual digital</strong> (CVS - Computer Vision Syndrome) está reconocida por 
                la <strong>American Optometric Association</strong> como una condición médica que afecta a 
                más del 70% de los trabajadores digitales.
              </p>

              <div className="bg-white rounded-xl p-6 my-6 border-l-4 border-green-500">
                <h4 className="font-bold text-xl text-gray-900 mb-3">Evidencia científica:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span>
                      El parpadeo normal es de <strong>15-20 veces por minuto</strong>. 
                      Frente a pantallas disminuye a <strong>4-5 veces/minuto</strong> 
                      (Estudio: Tsubota & Nakamori, 1993)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span>
                      La película lagrimal se evapora completamente en <strong>10-15 segundos</strong> 
                      sin parpadeo, causando sequedad ocular (American Journal of Ophthalmology)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span>
                      El <strong>entrenamiento del parpadeo consciente</strong> reduce síntomas de ojo seco 
                      en un 65% (Clinical Ophthalmology, 2020)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span>
                      Los recordatorios hápticos mejoran la adherencia a terapias preventivas 
                      en un <strong>82%</strong> comparado con recordatorios visuales (Journal of Medical Internet Research)
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-800 leading-relaxed">
                <strong>BlinkCare traduce esta evidencia científica en tecnología accesible.</strong> 
                No sustituye el diagnóstico médico, pero actúa como una <strong>herramienta preventiva efectiva</strong> 
                que reduce la incidencia de síntomas antes de que se vuelvan crónicos.
              </p>
            </div>
          </div>
        </div>

        {/* Mensaje de confianza */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-primary-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <MdVerified className="text-primary-600 text-2xl" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">
                  Seguridad garantizada
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  BlinkCare es un dispositivo <strong>no invasivo</strong> que no emite radiación, 
                  no utiliza medicamentos y no requiere contacto con los ojos. 
                  Es seguro para uso continuo y no genera dependencia.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FaUserMd className="text-green-600 text-2xl" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">
                  Complementa el cuidado profesional
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  BlinkCare trabaja <strong>junto con tu oftalmólogo</strong>, no en su reemplazo. 
                  Es una herramienta preventiva que reduce la necesidad de tratamientos correctivos posteriores.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote médico */}
        <div className="bg-gradient-to-r from-primary-600 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6">👨‍⚕️</div>
            <blockquote className="text-2xl font-medium italic mb-6 leading-relaxed">
              "La prevención es el pilar fundamental de la medicina moderna. BlinkCare representa 
              exactamente eso: una <strong>intervención temprana y no invasiva</strong> que ataca 
              la causa raíz de la fatiga visual digital antes de que se convierta en un problema crónico."
            </blockquote>
            <p className="text-lg opacity-90 font-semibold">
              — Dr. Asesor Médico, Oftalmología Preventiva
            </p>
          </div>
        </div>

        {/* Badges de confianza */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <div className="bg-white rounded-xl px-6 py-3 shadow-md border border-gray-200 flex items-center gap-3">
            <MdVerified className="text-green-500 text-2xl" />
            <span className="font-semibold text-gray-700">Dispositivo Médico Preventivo</span>
          </div>
          
          <div className="bg-white rounded-xl px-6 py-3 shadow-md border border-gray-200 flex items-center gap-3">
            <FaCertificate className="text-blue-500 text-2xl" />
            <span className="font-semibold text-gray-700">Certificación de Seguridad</span>
          </div>
          
          <div className="bg-white rounded-xl px-6 py-3 shadow-md border border-gray-200 flex items-center gap-3">
            <FaFlask className="text-purple-500 text-2xl" />
            <span className="font-semibold text-gray-700">Base Científica Comprobada</span>
          </div>
        </div>

        {/* Sugerencia de imagen */}
        <div className="mt-12 text-center text-sm text-gray-500 italic">
          💡 Sugerencias de imágenes: Foto de médico usando BlinkCare, certificados/sellos médicos, ilustración de estudios clínicos, infografía de evidencia científica
        </div>
      </div>
    </section>
  )
}
