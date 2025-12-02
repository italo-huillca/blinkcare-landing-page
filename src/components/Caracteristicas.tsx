'use client'

import { FaMicrochip, FaBatteryFull, FaWifi, FaShieldAlt } from 'react-icons/fa'
import { MdPhoneAndroid, MdLaptop } from 'react-icons/md'
import { BsDisplay } from 'react-icons/bs'

export default function Caracteristicas() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaMicrochip />
            <span>Especificaciones Técnicas</span>
          </div>
          
          <h2 className="section-title">
            Tecnología de <span className="text-gradient">última generación</span>
          </h2>
          
          <p className="section-subtitle mt-6">
            Hardware y software diseñados para <strong>máxima eficiencia y discreción</strong>
          </p>
        </div>

        {/* Tabs de categorías */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Hardware */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <FaMicrochip className="text-white text-3xl" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Hardware</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Microcontrolador ESP32</p>
                  <p className="text-sm text-gray-600">Procesamiento rápido y eficiente</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Motor háptico de alta calidad</p>
                  <p className="text-sm text-gray-600">Vibración suave y discreta</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Pantalla OLED 0.96"</p>
                  <p className="text-sm text-gray-600">Información clara en tiempo real</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Batería Li-Po 500mAh</p>
                  <p className="text-sm text-gray-600">Autonomía de 7 días</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Carga USB-C</p>
                  <p className="text-sm text-gray-600">Carga rápida en 1.5 horas</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Bluetooth 5.0</p>
                  <p className="text-sm text-gray-600">Conexión estable de bajo consumo</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">LED RGB personalizable</p>
                  <p className="text-sm text-gray-600">Notificaciones visuales opcionales</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Software */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <MdLaptop className="text-white text-3xl" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Software</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Modelo de IA propietario</p>
                  <p className="text-sm text-gray-600">Detección de parpadeo con 95% precisión</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Compatible Windows, Mac, Linux</p>
                  <p className="text-sm text-gray-600">Aplicación nativa para todos los OS</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">App móvil iOS y Android</p>
                  <p className="text-sm text-gray-600">Sincronización automática</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Procesamiento local</p>
                  <p className="text-sm text-gray-600">100% privacidad, no usa internet</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Dashboard web</p>
                  <p className="text-sm text-gray-600">Acceso desde cualquier navegador</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Actualizaciones OTA</p>
                  <p className="text-sm text-gray-600">Mejoras automáticas sin cables</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">API abierta</p>
                  <p className="text-sm text-gray-600">Integración con otras apps de salud</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Diseño y Seguridad */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <FaShieldAlt className="text-white text-3xl" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Diseño y Seguridad</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Diseño minimalista</p>
                  <p className="text-sm text-gray-600">Estético y discreto para oficina</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Dimensiones compactas</p>
                  <p className="text-sm text-gray-600">4.5cm × 3cm × 1.2cm, solo 25g</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Materiales hipoalergénicos</p>
                  <p className="text-sm text-gray-600">Seguro para contacto prolongado</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Encriptación end-to-end</p>
                  <p className="text-sm text-gray-600">Datos protegidos con AES-256</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">No almacena imágenes</p>
                  <p className="text-sm text-gray-600">Solo procesa, no guarda video</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">GDPR y HIPAA compliant</p>
                  <p className="text-sm text-gray-600">Cumple regulaciones de privacidad</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-gray-900">Resistente al agua IPX4</p>
                  <p className="text-sm text-gray-600">Protección contra salpicaduras</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Características destacadas en iconos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <FaBatteryFull className="text-5xl text-green-500 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-1">7 días</h4>
            <p className="text-sm text-gray-600">de batería</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <FaWifi className="text-5xl text-blue-500 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-1">Bluetooth 5.0</h4>
            <p className="text-sm text-gray-600">Conexión estable</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <BsDisplay className="text-5xl text-purple-500 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-1">OLED</h4>
            <p className="text-sm text-gray-600">Pantalla nítida</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <FaShieldAlt className="text-5xl text-red-500 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-1">100% privado</h4>
            <p className="text-sm text-gray-600">Sin cámara en nube</p>
          </div>
        </div>

        {/* Compatibilidad */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Compatibilidad universal
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MdLaptop className="text-white text-4xl" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Sistema Operativo</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>✓ Windows 10/11</li>
                <li>✓ macOS Catalina o superior</li>
                <li>✓ Linux (Ubuntu, Fedora)</li>
                <li>✓ Chrome OS</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MdPhoneAndroid className="text-white text-4xl" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Dispositivos Móviles</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>✓ iPhone (iOS 14+)</li>
                <li>✓ iPad (iPadOS 14+)</li>
                <li>✓ Android 9.0 o superior</li>
                <li>✓ Tablets Android</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaMicrochip className="text-white text-4xl" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Requisitos mínimos</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>✓ Webcam integrada o USB</li>
                <li>✓ 2GB RAM disponible</li>
                <li>✓ Bluetooth 4.0 o superior</li>
                <li>✓ 100MB de almacenamiento</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sugerencia de imagen */}
        <div className="mt-12 text-center text-sm text-gray-500 italic">
          💡 Sugerencias de imágenes: Diagrama técnico del dispositivo, foto del interior (componentes), mockup de la app en diferentes dispositivos, comparativa de tamaño con objetos comunes
        </div>
      </div>
    </section>
  )
}
