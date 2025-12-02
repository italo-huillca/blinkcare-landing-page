export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Deja de sufrir fatiga visual digital
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          BlinkCare te ayuda a recuperar tu parpadeo natural mientras trabajas. 
          Previene ojos secos, visión borrosa y dolor de cabeza.
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700">
          Probar BlinkCare
        </button>
      </section>

      {/* Problema */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">¿Qué es la fatiga visual digital?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Cuando usas pantallas, tu parpadeo baja de <strong>15-20 veces/minuto a solo 4-5</strong>. 
              Esto genera ojos secos, ardor, visión borrosa y dolor de cabeza.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-2">😫</div>
                <p className="font-semibold">Ojos secos y ardor</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-2">🤕</div>
                <p className="font-semibold">Dolor de cabeza</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-2">😵</div>
                <p className="font-semibold">Visión borrosa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cómo funciona BlinkCare</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="font-bold text-xl mb-2">IA detecta tu parpadeo</h3>
              <p className="text-gray-600">Analiza cuándo parpadeas menos de lo normal</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📳</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Recordatorio discreto</h3>
              <p className="text-gray-600">Vibración suave o luz visual para que parpadees</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold text-xl mb-2">App con estadísticas</h3>
              <p className="text-gray-600">Mide tu progreso y mejora tus hábitos visuales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciación */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Más efectivo que filtros azules o gotas
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
              <h3 className="font-bold mb-2">❌ Lentes con filtro azul</h3>
              <p className="text-gray-600">No aumentan tu parpadeo. Solo filtran luz.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
              <h3 className="font-bold mb-2">❌ Gotas lubricantes</h3>
              <p className="text-gray-600">Alivio temporal. No previene la causa.</p>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
              <h3 className="font-bold mb-2">✅ BlinkCare</h3>
              <p className="text-gray-700">Entrena tu parpadeo natural y previene el problema desde la raíz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Beneficios</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-xl mb-4">Funcionales</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Reduces ojos secos y ardor</li>
                <li>✓ Mejoras tu enfoque visual</li>
                <li>✓ Menos dolores de cabeza</li>
                <li>✓ Mayor productividad</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Emocionales</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Trabajas sin molestias</li>
                <li>✓ Cuidas tu salud visual</li>
                <li>✓ Te sientes más descansado</li>
                <li>✓ Previenes problemas futuros</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Validación */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Respaldado por especialistas</h2>
          <p className="text-lg mb-4">
            La fatiga visual digital es un problema clínico reconocido por oftalmólogos. 
          </p>
          <p className="text-lg">
            BlinkCare aplica tecnología médica preventiva para cuidar tu visión de manera efectiva.
          </p>
        </div>
      </section>

      {/* Perfiles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ideal para ti si eres...</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {['Programador', 'Estudiante', 'Diseñador', 'Gamer', 'Oficinista', 'Call center'].map(perfil => (
              <div key={perfil} className="bg-gray-50 p-6 rounded-lg text-center">
                <p className="font-semibold text-lg">{perfil}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonios</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4">
                "Después de 2 semanas usando BlinkCare, mis ojos ya no arden al final del día. 
                Puedo trabajar sin molestias."
              </p>
              <p className="font-semibold">— Ana, desarrolladora</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4">
                "Antes tenía visión borrosa después de 4 horas frente a la pantalla. 
                Ahora puedo estudiar sin cansancio visual."
              </p>
              <p className="font-semibold">— Carlos, estudiante de ingeniería</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas frecuentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">¿Es seguro?</h3>
              <p className="text-gray-700">Sí, es un dispositivo no invasivo que solo te recuerda parpadear.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">¿Funciona sin internet?</h3>
              <p className="text-gray-700">Sí, el dispositivo funciona de manera independiente.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">¿Se necesita cámara web?</h3>
              <p className="text-gray-700">Sí, para que la IA detecte tu parpadeo en tiempo real.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">¿Sirve para gamers?</h3>
              <p className="text-gray-700">Totalmente. Los gamers son de los más afectados por fatiga visual.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">¿Bloquea luz azul?</h3>
              <p className="text-gray-700">No, actúa en la causa real: el parpadeo reducido.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">¿En cuánto tiempo veo cambios?</h3>
              <p className="text-gray-700">La mayoría nota mejoría en 1-2 semanas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Protege tu visión hoy</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            No esperes a que los síntomas empeoren. Cuida tus ojos mientras trabajas.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100">
            Recibe tu diagnóstico visual
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 BlinkCare. Cuida tu visión digital.</p>
        </div>
      </footer>
    </main>
  )
}
