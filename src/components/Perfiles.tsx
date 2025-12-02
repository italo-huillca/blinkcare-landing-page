'use client'

import { FaCode, FaGraduationCap, FaPalette, FaGamepad, FaBriefcase, FaHeadset } from 'react-icons/fa'

export default function Perfiles() {
  const perfiles = [
    {
      icon: <FaCode />,
      title: 'Programador',
      description: 'Pasas 8-12 horas escribiendo código sin parpadear',
      symptoms: 'Ojos rojos al final del día, dificultad para enfocar objetos lejanos',
      benefit: 'Mantén tu productividad sin sacrificar tu visión',
      color: 'blue',
    },
    {
      icon: <FaGraduationCap />,
      title: 'Estudiante',
      description: 'Clases online, trabajos y estudios frente a la pantalla',
      symptoms: 'Dolor de cabeza frecuente, cansancio visual antes de exámenes',
      benefit: 'Estudia más tiempo con mayor concentración',
      color: 'purple',
    },
    {
      icon: <FaPalette />,
      title: 'Diseñador',
      description: 'Trabajo creativo que requiere atención al detalle visual',
      symptoms: 'Visión borrosa temporal, ardor después de proyectos largos',
      benefit: 'Preserva tu precisión visual para crear mejor',
      color: 'pink',
    },
    {
      icon: <FaGamepad />,
      title: 'Gamer',
      description: 'Sesiones intensas de juego sin descanso',
      symptoms: 'Ojos extremadamente secos, enrojecimiento severo',
      benefit: 'Mejora tu rendimiento con visión óptima',
      color: 'green',
    },
    {
      icon: <FaBriefcase />,
      title: 'Profesional de oficina',
      description: 'Emails, videollamadas, presentaciones todo el día',
      symptoms: 'Fatiga acumulativa, necesitas gotas constantemente',
      benefit: 'Llega al final del día sin molestias',
      color: 'orange',
    },
    {
      icon: <FaHeadset />,
      title: 'Call center / Atención al cliente',
      description: 'Múltiples pantallas simultáneas durante 6+ horas',
      symptoms: 'Dificultad de concentración por molestia ocular',
      benefit: 'Mantén la calidad de servicio todo el día',
      color: 'teal',
    },
  ]

  const colorMap: Record<string, { from: string; to: string; text: string; bg: string }> = {
    blue: { from: 'from-blue-500', to: 'to-blue-600', text: 'text-blue-600', bg: 'bg-blue-50' },
    purple: { from: 'from-purple-500', to: 'to-purple-600', text: 'text-purple-600', bg: 'bg-purple-50' },
    pink: { from: 'from-pink-500', to: 'to-pink-600', text: 'text-pink-600', bg: 'bg-pink-50' },
    green: { from: 'from-green-500', to: 'to-green-600', text: 'text-green-600', bg: 'bg-green-50' },
    orange: { from: 'from-orange-500', to: 'to-orange-600', text: 'text-orange-600', bg: 'bg-orange-50' },
    teal: { from: 'from-teal-500', to: 'to-teal-600', text: 'text-teal-600', bg: 'bg-teal-50' },
  }

  return (
    <section className="py-20 bg-white" id="perfiles">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>👥</span>
            <span>Para todo tipo de usuarios</span>
          </div>
          
          <h2 className="section-title">
            <span className="text-gradient">Ideal para ti si...</span>
          </h2>
          
          <p className="section-subtitle mt-6">
            BlinkCare está diseñado para <strong>cualquier persona</strong> que pase más de 4 horas diarias frente a pantallas
          </p>
        </div>

        {/* Grid de perfiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perfiles.map((perfil, idx) => {
            const colors = colorMap[perfil.color]
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-gray-100"
              >
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${colors.from} ${colors.to} rounded-2xl flex items-center justify-center mb-6 mx-auto text-white text-4xl`}>
                  {perfil.icon}
                </div>
                
                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 text-center ${colors.text}`}>
                  {perfil.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-700 text-center mb-6 leading-relaxed">
                  {perfil.description}
                </p>
                
                {/* Symptoms */}
                <div className={`${colors.bg} rounded-xl p-4 mb-4`}>
                  <h4 className="font-semibold text-sm text-gray-900 mb-2 flex items-center gap-2">
                    <span>⚠️</span> Síntomas comunes:
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {perfil.symptoms}
                  </p>
                </div>
                
                {/* Benefit */}
                <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-500">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2 flex items-center gap-2">
                    <span>✅</span> Con BlinkCare:
                  </h4>
                  <p className="text-green-700 text-sm font-medium">
                    {perfil.benefit}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mensaje universal */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            ¿No te identificas con ninguno?
          </h3>
          <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
            Si usas computadora, tablet o smartphone <strong>más de 4 horas al día</strong>, 
            tu parpadeo ya está comprometido. BlinkCare es para <strong>cualquier persona</strong> 
            que quiera prevenir problemas visuales antes de que aparezcan.
          </p>
          <div className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-full font-semibold">
            <span>💼</span>
            <span>Trabajo remoto • Freelance • Contenido digital • Investigación</span>
          </div>
        </div>

        {/* Estadística final */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-50 rounded-2xl p-8 shadow-lg">
            <div className="text-5xl font-bold text-primary-600 mb-2">87%</div>
            <p className="text-lg text-gray-700 font-medium max-w-md">
              de los usuarios de BlinkCare reportan mejora significativa en la primera semana, 
              <strong> sin importar su profesión</strong>
            </p>
          </div>
        </div>

        {/* Sugerencia de imagen */}
        <div className="mt-12 text-center text-sm text-gray-500 italic">
          💡 Sugerencias de imágenes: Fotos de personas reales de cada perfil usando BlinkCare, collage de diferentes profesiones, iconos personalizados para cada perfil
        </div>
      </div>
    </section>
  )
}
