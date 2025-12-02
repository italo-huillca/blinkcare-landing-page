'use client'

import { FaStar } from 'react-icons/fa'

export default function Testimonios() {
  const testimonios = [
    {
      name: 'Carlos M.',
      role: 'Desarrollador Full Stack',
      hours: '10-12h diarias programando',
      before: {
        title: 'Antes de BlinkCare',
        symptoms: [
          'Ojos extremadamente secos al final del día',
          'Necesitaba gotas lubricantes cada 2 horas',
          'Visión borrosa después de las 6pm',
          'Dolor de cabeza frecuente los viernes',
        ],
      },
      after: {
        title: 'Después de 4 semanas con BlinkCare',
        improvements: [
          'Parpadeo natural mejoró 300%',
          'Ya no necesito gotas lubricantes',
          'Visión clara todo el día',
          'Cero dolores de cabeza relacionados con pantallas',
        ],
      },
      quote: 'Es increíble cómo algo tan simple como recordarme parpadear cambió completamente mi salud visual. Ahora parpadeo conscientemente incluso sin el dispositivo.',
      rating: 5,
    },
    {
      name: 'Ana R.',
      role: 'Diseñadora UX/UI',
      hours: '8-10h diarias en Figma/Adobe',
      before: {
        title: 'Antes de BlinkCare',
        symptoms: [
          'Ardor intenso después de proyectos largos',
          'Sensación de "ojos quemados" constante',
          'Dificultad para distinguir colores al final del día',
          'Reducción de productividad por molestias',
        ],
      },
      after: {
        title: 'Después de 3 semanas con BlinkCare',
        improvements: [
          'Cero sensación de ardor',
          'Percepción de colores consistente todo el día',
          'Aumento de 40% en tiempo de concentración',
          'Trabajo en proyectos complejos sin molestias',
        ],
      },
      quote: 'Como diseñadora, mi visión es mi herramienta de trabajo. BlinkCare me permitió proteger mi activo más valioso mientras mantengo mi productividad al máximo.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaStar />
            <span>Resultados Reales</span>
          </div>
          
          <h2 className="section-title">
            Casos de <span className="text-gradient">éxito</span>
          </h2>
          
          <p className="section-subtitle mt-6">
            Testimonios de usuarios que <strong>transformaron su salud visual</strong> con BlinkCare
          </p>
        </div>

        {/* Testimonios */}
        <div className="space-y-12">
          {testimonios.map((testimonio, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-primary-100"
            >
              {/* Header del testimonio */}
              <div className="bg-gradient-to-r from-primary-600 to-purple-600 p-6 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{testimonio.name}</h3>
                    <p className="text-lg opacity-90">{testimonio.role}</p>
                    <p className="text-sm opacity-75 mt-1">📊 {testimonio.hours}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonio.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-300 text-2xl" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                {/* Antes / Después */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Antes */}
                  <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-500">
                    <h4 className="font-bold text-lg text-red-800 mb-4 flex items-center gap-2">
                      <span>❌</span> {testimonio.before.title}
                    </h4>
                    <ul className="space-y-3">
                      {testimonio.before.symptoms.map((symptom, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-red-500 font-bold mt-0.5">•</span>
                          <span className="text-sm">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Después */}
                  <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-500">
                    <h4 className="font-bold text-lg text-green-800 mb-4 flex items-center gap-2">
                      <span>✅</span> {testimonio.after.title}
                    </h4>
                    <ul className="space-y-3">
                      {testimonio.after.improvements.map((improvement, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-green-500 font-bold mt-0.5">✓</span>
                          <span className="text-sm font-medium">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-6 border-l-4 border-primary-500">
                  <div className="text-4xl text-primary-600 mb-3">"</div>
                  <blockquote className="text-lg text-gray-800 italic leading-relaxed mb-3">
                    {testimonio.quote}
                  </blockquote>
                  <p className="text-right text-gray-600 font-semibold">
                    — {testimonio.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Métrica general */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Resultados promedio de usuarios
            </h3>
            <p className="text-gray-600">Basado en 200+ usuarios beta en las primeras 4 semanas</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">90%</div>
              <p className="text-gray-700 font-medium">Reducción de síntomas</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">3x</div>
              <p className="text-gray-700 font-medium">Mejora en frecuencia de parpadeo</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">40%</div>
              <p className="text-gray-700 font-medium">Aumento de productividad</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">95%</div>
              <p className="text-gray-700 font-medium">Lo recomendarían</p>
            </div>
          </div>
        </div>

        {/* Sugerencia de imagen */}
        <div className="mt-12 text-center text-sm text-gray-500 italic">
          💡 Sugerencias de imágenes: Fotos reales de usuarios (con permiso), gráficas de antes/después del parpadeo, screenshots de la app mostrando mejoras, video testimonial
        </div>
      </div>
    </section>
  )
}
