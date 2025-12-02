'use client'

import { FaCheckCircle, FaHeart, FaBrain, FaRocket, FaShieldAlt, FaClock } from 'react-icons/fa'
import { BsGraphUpArrow, BsEmojiSmile } from 'react-icons/bs'

export default function Beneficios() {
  const funcionales = [
    {
      icon: <FaShieldAlt />,
      title: 'Prevención de ojos secos',
      description: 'Mantén la lubricación natural de tus ojos durante toda la jornada laboral sin gotas ni interrupciones.',
    },
    {
      icon: <FaClock />,
      title: 'Reduce fatiga ocular en 95%',
      description: 'Elimina la sensación de cansancio, ardor y visión borrosa después de horas frente a la pantalla.',
    },
    {
      icon: <BsGraphUpArrow />,
      title: 'Mejora productividad',
      description: 'Concentración sostenida sin molestias. Trabaja hasta 40% más tiempo sin fatiga visual.',
    },
    {
      icon: <FaRocket />,
      title: 'Sin interrupciones de flujo',
      description: 'Recordatorios discretos que no rompen tu concentración. Sigue trabajando sin pausas forzadas.',
    },
    {
      icon: <FaBrain />,
      title: 'Entrena hábitos saludables',
      description: 'Crea un nuevo patrón neurológico de parpadeo consciente que perdura incluso sin el dispositivo.',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Datos personalizados',
      description: 'Conoce exactamente cuándo y por qué tu parpadeo disminuye. Estadísticas accionables.',
    },
  ]

  const emocionales = [
    {
      icon: <BsEmojiSmile />,
      title: 'Tranquilidad visual',
      description: 'Termina tu día sin esa sensación de ojos "quemados" o cansados.',
      color: 'blue',
    },
    {
      icon: <FaHeart />,
      title: 'Cuida tu salud a largo plazo',
      description: 'Previene problemas crónicos como síndrome de ojo seco severo.',
      color: 'red',
    },
    {
      icon: <FaBrain />,
      title: 'Menos dolores de cabeza',
      description: 'Reduce la cefalea tensional causada por esfuerzo visual extremo.',
      color: 'purple',
    },
    {
      icon: <FaRocket />,
      title: 'Mayor confianza en tu trabajo',
      description: 'Concéntrate en tus tareas sin preocuparte por la incomodidad visual.',
      color: 'green',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaCheckCircle />
            <span>Beneficios Comprobados</span>
          </div>
          
          <h2 className="section-title">
            Beneficios de <span className="text-gradient">BlinkCare</span>
          </h2>
          
          <p className="section-subtitle mt-6">
            Más allá de prevenir fatiga visual, BlinkCare <strong>transforma tu experiencia digital</strong>
          </p>
        </div>

        {/* Beneficios Funcionales */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
            <span className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center">⚙️</span>
            Beneficios Funcionales
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funcionales.map((beneficio, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
                    {beneficio.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                      {beneficio.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {beneficio.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Beneficios Emocionales */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
            <span className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center">❤️</span>
            Beneficios Emocionales
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emocionales.map((beneficio, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all text-center transform hover:scale-105"
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${
                  beneficio.color === 'blue' ? 'from-blue-400 to-blue-600' :
                  beneficio.color === 'red' ? 'from-red-400 to-red-600' :
                  beneficio.color === 'purple' ? 'from-purple-400 to-purple-600' :
                  'from-green-400 to-green-600'
                } rounded-full flex items-center justify-center text-white text-3xl shadow-lg`}>
                  {beneficio.icon}
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">
                  {beneficio.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {beneficio.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonio de impacto */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">💡</div>
            <blockquote className="text-2xl text-gray-800 font-medium italic mb-6 leading-relaxed">
              "BlinkCare no es solo un dispositivo, es un <strong className="text-primary-600">cambio de hábitos</strong>. 
              Después de 3 semanas usándolo, mi parpadeo mejoró incluso cuando no lo llevo puesto. 
              Mis ojos se sienten <strong className="text-green-600">naturalmente hidratados</strong> todo el día."
            </blockquote>
            <p className="text-gray-600 font-semibold">
              — Usuario beta de BlinkCare, desarrollador de software con 10+ horas diarias frente a pantallas
            </p>
          </div>
        </div>

        {/* Beneficio a largo plazo */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 text-white text-center">
            <div className="text-5xl font-bold mb-2">30 días</div>
            <p className="text-lg opacity-90">Formación de hábito permanente</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
            <div className="text-5xl font-bold mb-2">90%</div>
            <p className="text-lg opacity-90">Reducción de síntomas reportados</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white text-center">
            <div className="text-5xl font-bold mb-2">$0</div>
            <p className="text-lg opacity-90">Sin suscripciones ni consumibles</p>
          </div>
        </div>

        {/* Sugerencia de imagen */}
        <div className="mt-12 text-center text-sm text-gray-500 italic">
          💡 Sugerencias de imágenes: Iconos de beneficios, antes/después de ojos (ilustración médica), gráfico de mejora de productividad, persona sonriendo frente a computadora
        </div>
      </div>
    </section>
  )
}
