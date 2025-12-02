'use client'

import { FaEye, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FaEye className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold">BlinkCare</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Tecnología médica preventiva que protege tu visión digital. 
              Entrena tu parpadeo y previene la fatiga visual.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/blinkcare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/blinkcare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/company/blinkcare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://youtube.com/@blinkcare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-bold mb-4">Producto</h3>
            <ul className="space-y-3">
              <li>
                <a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#que-es-fatiga-visual" className="text-gray-400 hover:text-white transition-colors">
                  Fatiga visual digital
                </a>
              </li>
              <li>
                <a href="#perfiles" className="text-gray-400 hover:text-white transition-colors">
                  ¿Para quién es?
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#cta-section" className="text-gray-400 hover:text-white transition-colors">
                  Comprar ahora
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog de salud visual
                </a>
              </li>
              <li>
                <a href="/estudios-clinicos" className="text-gray-400 hover:text-white transition-colors">
                  Estudios clínicos
                </a>
              </li>
              <li>
                <a href="/guia-parpadeo" className="text-gray-400 hover:text-white transition-colors">
                  Guía del parpadeo saludable
                </a>
              </li>
              <li>
                <a href="/testimonios" className="text-gray-400 hover:text-white transition-colors">
                  Casos de éxito
                </a>
              </li>
              <li>
                <a href="/soporte" className="text-gray-400 hover:text-white transition-colors">
                  Centro de ayuda
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <FaEnvelope className="mt-1 flex-shrink-0" />
                <a href="mailto:hola@blinkcare.com" className="hover:text-white transition-colors">
                  hola@blinkcare.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FaPhone className="mt-1 flex-shrink-0" />
                <a href="tel:+34600123456" className="hover:text-white transition-colors">
                  +34 600 123 456
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>
                  Barcelona, España<br />
                  Zona horaria: CET (GMT+1)
                </span>
              </li>
            </ul>
            
            <div className="mt-6 bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-300 mb-2 font-semibold">
                Horario de atención:
              </p>
              <p className="text-xs text-gray-400">
                Lunes a Viernes: 9:00 - 18:00<br />
                Sábados: 10:00 - 14:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} BlinkCare. Todos los derechos reservados.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="/privacidad" className="text-gray-400 hover:text-white transition-colors">
                Política de privacidad
              </a>
              <a href="/terminos" className="text-gray-400 hover:text-white transition-colors">
                Términos de uso
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>

          {/* Medical disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center max-w-4xl mx-auto leading-relaxed">
              <strong>Aviso médico:</strong> BlinkCare es un dispositivo de bienestar y prevención. 
              No sustituye el diagnóstico, tratamiento o consejo de un profesional médico. 
              Si experimentas problemas visuales persistentes, consulta con un oftalmólogo. 
              Los resultados pueden variar según el usuario.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
