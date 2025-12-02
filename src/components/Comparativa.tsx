'use client'

import { FaCheck, FaTimes } from 'react-icons/fa'

export default function Comparativa() {
  const solutions = [
    {
      name: 'BlinkCare',
      features: {
        'Actúa en la causa raíz': true,
        'Entrena el parpadeo': true,
        'Prevención activa': true,
        'Recordatorios en tiempo real': true,
        'Estadísticas personalizadas': true,
        'No requiere consumibles': true,
        'Tecnología médica': true,
        'Uso continuo sin molestias': true,
        'Mejora permanente de hábitos': true,
        'Respaldo científico': true,
      },
      color: 'primary',
      highlight: true,
    },
    {
      name: 'Lentes con filtro azul',
      features: {
        'Actúa en la causa raíz': false,
        'Entrena el parpadeo': false,
        'Prevención activa': false,
        'Recordatorios en tiempo real': false,
        'Estadísticas personalizadas': false,
        'No requiere consumibles': true,
        'Tecnología médica': false,
        'Uso continuo sin molestias': false,
        'Mejora permanente de hábitos': false,
        'Respaldo científico': false,
      },
      color: 'gray',
      note: 'Solo filtran luz, no previenen sequedad',
    },
    {
      name: 'Gotas lubricantes',
      features: {
        'Actúa en la causa raíz': false,
        'Entrena el parpadeo': false,
        'Prevención activa': false,
        'Recordatorios en tiempo real': false,
        'Estadísticas personalizadas': false,
        'No requiere consumibles': false,
        'Tecnología médica': false,
        'Uso continuo sin molestias': false,
        'Mejora permanente de hábitos': false,
        'Respaldo científico': true,
      },
      color: 'gray',
      note: 'Tratan síntomas, requieren uso constante',
    },
    {
      name: 'Pausas activas / Ejercicios',
      features: {
        'Actúa en la causa raíz': false,
        'Entrena el parpadeo': false,
        'Prevención activa': true,
        'Recordatorios en tiempo real': false,
        'Estadísticas personalizadas': false,
        'No requiere consumibles': true,
        'Tecnología médica': false,
        'Uso continuo sin molestias': false,
        'Mejora permanente de hábitos': false,
        'Respaldo científico': true,
      },
      color: 'gray',
      note: 'Requieren disciplina y interrumpen el trabajo',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>⚖️</span>
            <span>Diferenciación Health-Tech</span>
          </div>
          
          <h2 className="section-title">
            ¿Por qué BlinkCare es <span className="text-gradient">diferente</span>?
          </h2>
          
          <p className="section-subtitle mt-6">
            Comparamos BlinkCare con las soluciones tradicionales. <strong>Descubre por qué actuamos en la causa real</strong>
          </p>
        </div>

        {/* Tabla comparativa - Desktop */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-6 text-left font-bold text-gray-900 text-lg w-1/4">
                  Característica
                </th>
                {solutions.map((solution, idx) => (
                  <th
                    key={idx}
                    className={`px-6 py-6 text-center font-bold text-lg ${
                      solution.highlight
                        ? 'bg-gradient-to-br from-primary-500 to-purple-600 text-white'
                        : 'text-gray-700'
                    }`}
                  >
                    {solution.name}
                    {solution.highlight && (
                      <div className="text-xs font-normal mt-1 opacity-90">
                        ⭐ Recomendado
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(solutions[0].features).map((feature, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="px-6 py-4 font-medium text-gray-900 border-b border-gray-200">
                    {feature}
                  </td>
                  {solutions.map((solution, sIdx) => (
                    <td
                      key={sIdx}
                      className={`px-6 py-4 text-center border-b border-gray-200 ${
                        solution.highlight ? 'bg-primary-50' : ''
                      }`}
                    >
                      {solution.features[feature as keyof typeof solution.features] ? (
                        <div className="flex items-center justify-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            solution.highlight ? 'bg-green-500' : 'bg-green-100'
                          }`}>
                            <FaCheck className={solution.highlight ? 'text-white' : 'text-green-600'} />
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                            <FaTimes className="text-red-600" />
                          </div>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards comparativas - Mobile */}
        <div className="lg:hidden space-y-6">
          {solutions.map((solution, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow-xl overflow-hidden ${
                solution.highlight
                  ? 'border-4 border-primary-500'
                  : 'border border-gray-200'
              }`}
            >
              <div
                className={`px-6 py-4 ${
                  solution.highlight
                    ? 'bg-gradient-to-br from-primary-500 to-purple-600 text-white'
                    : 'bg-gray-50 text-gray-900'
                }`}
              >
                <h3 className="font-bold text-xl">{solution.name}</h3>
                {solution.highlight && (
                  <p className="text-sm opacity-90 mt-1">⭐ Recomendado</p>
                )}
                {solution.note && (
                  <p className={`text-sm mt-2 ${solution.highlight ? 'opacity-90' : 'text-gray-600'}`}>
                    {solution.note}
                  </p>
                )}
              </div>
              
              <div className="p-6 space-y-3">
                {Object.entries(solution.features).map(([feature, value], fIdx) => (
                  <div key={fIdx} className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm">{feature}</span>
                    {value ? (
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        solution.highlight ? 'bg-green-500' : 'bg-green-100'
                      }`}>
                        <FaCheck className={solution.highlight ? 'text-white text-xs' : 'text-green-600 text-xs'} />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <FaTimes className="text-red-600 text-xs" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Explicación detallada */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">👓</span>
              Lentes con filtro azul
            </h4>
            <p className="text-gray-700 text-sm mb-3">
              <strong>Qué hacen:</strong> Filtran parte de la luz azul de las pantallas.
            </p>
            <p className="text-red-700 text-sm font-semibold">
              <strong>Por qué no es suficiente:</strong> La fatiga visual no es causada por la luz azul, 
              sino por la <strong>falta de parpadeo</strong>. Los lentes no previenen ojos secos.
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">💧</span>
              Gotas lubricantes
            </h4>
            <p className="text-gray-700 text-sm mb-3">
              <strong>Qué hacen:</strong> Hidratan temporalmente la superficie ocular.
            </p>
            <p className="text-orange-700 text-sm font-semibold">
              <strong>Por qué no es suficiente:</strong> Solo tratan los <strong>síntomas</strong>, 
              no la causa. Requieres aplicarlas cada 2-4 horas de forma continua.
            </p>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">⏸️</span>
              Pausas activas
            </h4>
            <p className="text-gray-700 text-sm mb-3">
              <strong>Qué hacen:</strong> Recordatorios manuales para descansar la vista.
            </p>
            <p className="text-yellow-700 text-sm font-semibold">
              <strong>Por qué no es suficiente:</strong> Requieren <strong>disciplina extrema</strong> 
              e interrumpen tu flujo de trabajo. Pocas personas las mantienen.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              BlinkCare
            </h4>
            <p className="text-gray-700 text-sm mb-3">
              <strong>Qué hace:</strong> Entrena tu parpadeo en tiempo real.
            </p>
            <p className="text-green-700 text-sm font-semibold">
              <strong>Por qué SÍ funciona:</strong> Ataca la <strong>causa raíz</strong> 
              (parpadeo reducido) de forma automática, sin interrumpir tu trabajo.
            </p>
          </div>
        </div>

        {/* Mensaje final */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            La diferencia está en la <strong>prevención activa</strong>
          </h3>
          <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
            Otras soluciones tratan síntomas o te piden cambiar tus hábitos manualmente. 
            <strong> BlinkCare entrena tu cerebro</strong> para que parpadees naturalmente, 
            incluso cuando estés concentrado.
          </p>
          <div className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-full font-semibold">
            <FaCheck className="text-green-500" />
            <span>Prevención &gt; Tratamiento</span>
          </div>
        </div>

        {/* Sugerencia de imagen */}
        <div className="mt-8 text-center text-sm text-gray-500 italic">
          💡 Sugerencias de imágenes: Iconos de cada solución (lentes, gotas, pausas, BlinkCare), infografía comparativa, diagrama de "causa vs síntoma"
        </div>
      </div>
    </section>
  )
}
