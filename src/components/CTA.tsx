'use client'

import { useState } from 'react'
import { FaEye, FaWhatsapp, FaEnvelope, FaCheckCircle } from 'react-icons/fa'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hours: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la integración con tu backend/CRM
    console.log('Lead capturado:', formData)
    setSubmitted(true)
    
    // Opcional: Redireccionar a WhatsApp
    setTimeout(() => {
      const message = `Hola, soy ${formData.name}. Quiero proteger mi visión con BlinkCare. Paso ${formData.hours}h al día frente a pantallas.`
      window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank')
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 relative overflow-hidden" id="cta-section">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse delay-1000"></div>

      <div className="container-custom relative z-10">
        {!submitted ? (
          <>
            {/* Header */}
            <div className="text-center text-white mb-12">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <FaEye />
                <span>Únete a la revolución visual</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Protege tu visión HOY
              </h2>
              
              <p className="text-xl md:text-2xl mb-4 opacity-90 max-w-3xl mx-auto">
                Deja de sufrir fatiga visual digital. <strong>Empieza a cuidar tus ojos ahora.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaCheckCircle className="text-green-300" />
                  <span className="text-sm">30 días garantía</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaCheckCircle className="text-green-300" />
                  <span className="text-sm">Sin suscripciones</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <FaCheckCircle className="text-green-300" />
                  <span className="text-sm">Envío gratis</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Recibe tu diagnóstico visual personalizado
                </h3>
                <p className="text-gray-600">
                  Completa el formulario y te contactaremos en menos de 24 horas con un análisis de tu riesgo de fatiga visual
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-gray-900"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-gray-900"
                    placeholder="juan@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    WhatsApp (opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-gray-900"
                    placeholder="+34 600 123 456"
                  />
                </div>

                <div>
                  <label htmlFor="hours" className="block text-sm font-semibold text-gray-700 mb-2">
                    ¿Cuántas horas al día usas pantallas? *
                  </label>
                  <select
                    id="hours"
                    name="hours"
                    required
                    value={formData.hours}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-gray-900"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="4-6">4-6 horas (Riesgo moderado)</option>
                    <option value="6-8">6-8 horas (Riesgo alto)</option>
                    <option value="8-10">8-10 horas (Riesgo muy alto)</option>
                    <option value="10+">Más de 10 horas (Riesgo crítico)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-5 rounded-lg font-bold text-xl hover:from-primary-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <FaEye className="text-2xl" />
                  Quiero proteger mi visión
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Al enviar este formulario aceptas nuestra política de privacidad. 
                  No compartiremos tu información con terceros.
                </p>
              </form>

              {/* Alternativas de contacto */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-600 mb-4 font-semibold">
                  O contáctanos directamente:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/1234567890?text=Hola,%20quiero%20información%20sobre%20BlinkCare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all"
                  >
                    <FaWhatsapp className="text-xl" />
                    WhatsApp
                  </a>
                  
                  <a
                    href="mailto:hola@blinkcare.com"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                  >
                    <FaEnvelope className="text-xl" />
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Urgencia suave */}
            <div className="text-center mt-12 text-white">
              <p className="text-lg opacity-90 mb-2">
                🎁 <strong>Promoción de lanzamiento:</strong> Los primeros 100 usuarios obtienen 20% de descuento
              </p>
              <p className="text-sm opacity-75">
                Quedan <strong className="text-yellow-300">37 unidades</strong> disponibles a precio especial
              </p>
            </div>
          </>
        ) : (
          // Success message
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-green-600 text-5xl" />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¡Gracias por tu interés!
            </h3>
            
            <p className="text-lg text-gray-700 mb-6">
              Hemos recibido tu solicitud. Nuestro equipo te contactará en las próximas 24 horas 
              con tu <strong>diagnóstico visual personalizado</strong>.
            </p>

            <div className="bg-primary-50 rounded-xl p-6 mb-6">
              <p className="text-gray-800 font-medium">
                📧 Te hemos enviado un email de confirmación a:<br />
                <strong className="text-primary-600">{formData.email}</strong>
              </p>
            </div>

            <p className="text-gray-600 mb-6">
              Mientras tanto, síguenos en redes sociales para conocer más sobre salud visual
            </p>

            <div className="flex gap-4 justify-center">
              <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all">
                Ir a Instagram
              </button>
              <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                Ver más casos de éxito
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
