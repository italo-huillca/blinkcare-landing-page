'use client'

import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: '¿Es seguro usar BlinkCare? ¿Tiene efectos secundarios?',
      answer: 'BlinkCare es 100% seguro y no invasivo. No emite radiación, no utiliza medicamentos y no requiere contacto con los ojos. Es un dispositivo de entrenamiento conductual que simplemente te recuerda parpadear. Ha sido desarrollado con asesoría de oftalmólogos y cumple con estándares de dispositivos médicos preventivos. No genera dependencia y no tiene efectos secundarios conocidos.',
    },
    {
      question: '¿Funciona sin conexión a internet?',
      answer: 'Sí, BlinkCare funciona completamente offline. El algoritmo de IA procesa tu imagen de forma local en tu computadora, sin enviar ningún dato a internet. Solo necesitas conexión para sincronizar tus estadísticas con la app móvil o dashboard web, pero esto es opcional. La funcionalidad principal de detección y recordatorios funciona sin internet.',
    },
    {
      question: '¿Se necesita una cámara web? ¿Graba mi video?',
      answer: 'Sí, necesitas una cámara web (integrada o USB). El software analiza tu rostro en tiempo real para detectar el parpadeo, pero NO graba ni almacena imágenes. Todo el procesamiento es instantáneo y local. Las imágenes se descartan inmediatamente después de ser analizadas. Solo se guardan datos estadísticos (número de parpadeos, timestamps), nunca fotos o videos.',
    },
    {
      question: '¿Sirve para gamers? ¿No me va a distraer en partidas competitivas?',
      answer: 'Absolutamente. De hecho, los gamers son uno de los grupos que más se benefician porque tienen las tasas de parpadeo más bajas (2-3 veces/min durante juego intenso). El recordatorio háptico es extremadamente discreto - una vibración suave de 0.3 segundos que no interrumpe tu concentración. Muchos gamers beta reportan mejor rendimiento sostenido al evitar la fatiga visual que afecta los reflejos.',
    },
    {
      question: '¿BlinkCare bloquea la luz azul como los lentes especiales?',
      answer: 'No, y esa es precisamente nuestra ventaja. Los filtros de luz azul no previenen la fatiga visual porque el problema real no es la luz azul, sino la FALTA DE PARPADEO. BlinkCare ataca la causa raíz del problema (parpadeo reducido), no solo un síntoma. De hecho, la evidencia científica sobre filtros de luz azul es mixta, mientras que el entrenamiento del parpadeo tiene respaldo clínico sólido.',
    },
    {
      question: '¿En cuánto tiempo veo resultados o cambios?',
      answer: 'Los resultados varían, pero el patrón típico es: Semana 1: Reducción inmediata de síntomas agudos (ardor, ojos secos) en un 40-50%. Semanas 2-3: Mejora del parpadeo consciente incluso sin recordatorios, reducción de síntomas del 70%. Semana 4+: Formación de hábito permanente, el parpadeo mejorado se mantiene incluso sin el dispositivo. La mayoría de usuarios reportan mejoras significativas en los primeros 3-5 días.',
    },
    {
      question: '¿Puedo usarlo con lentes de contacto o anteojos?',
      answer: 'Sí, BlinkCare funciona perfectamente con lentes de contacto, anteojos (incluyendo lentes con filtro azul) o cirugía refractiva previa. El sistema de IA detecta el parpadeo independientemente de estos factores. De hecho, usuarios con lentes de contacto suelen beneficiarse aún más porque el parpadeo frecuente mejora la lubricación de las lentillas.',
    },
    {
      question: '¿Qué pasa si trabajo en un espacio con poca luz?',
      answer: 'El algoritmo de IA funciona en condiciones de luz baja gracias a técnicas de mejora de imagen. Solo necesitas la luz mínima que te permita ver tu pantalla. Si trabajas en total oscuridad (muy poco común), el sistema puede tener dificultades, pero en 99% de escenarios de trabajo reales funciona sin problemas.',
    },
    {
      question: '¿Tiene garantía? ¿Qué pasa si no me funciona?',
      answer: 'BlinkCare incluye garantía de 30 días de devolución de dinero sin preguntas. Si en las primeras 4 semanas no ves mejoras en tus síntomas, te devolvemos el 100% del dinero. Además, el dispositivo tiene garantía de fábrica de 1 año contra defectos. Actualizaciones de software gratuitas de por vida.',
    },
  ]

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>❓</span>
            <span>Preguntas Frecuentes</span>
          </div>
          
          <h2 className="section-title">
            ¿Tienes <span className="text-gradient">dudas</span>?
          </h2>
          
          <p className="section-subtitle mt-6">
            Respondemos las <strong>preguntas más comunes</strong> sobre BlinkCare
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <FaChevronUp className="text-primary-600" />
                  ) : (
                    <FaChevronDown className="text-primary-600" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="mt-16 bg-gradient-to-br from-primary-50 to-purple-50 rounded-3xl p-8 md:p-12 text-center border-2 border-primary-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Tienes más preguntas?
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Nuestro equipo de soporte está disponible para resolver cualquier duda sobre BlinkCare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/1234567890?text=Hola,%20tengo%20preguntas%20sobre%20BlinkCare"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all duration-300 shadow-lg"
            >
              <span>💬</span>
              Contactar por WhatsApp
            </a>
            
            <a
              href="mailto:soporte@blinkcare.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300"
            >
              <span>📧</span>
              Enviar email
            </a>
          </div>
        </div>

        {/* Sugerencia de imagen */}
        <div className="mt-12 text-center text-sm text-gray-500 italic">
          💡 Sugerencias de imágenes: Iconos de preguntas, ilustración de persona pensando, screenshot de chat de soporte
        </div>
      </div>
    </section>
  )
}
