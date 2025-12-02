import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BlinkCare - Previene la Fatiga Visual Digital | Dispositivo Inteligente para Ojos Secos',
  description: 'BlinkCare es el primer dispositivo inteligente que detecta la reducción del parpadeo y previene fatiga visual digital, ojos secos y cansancio ocular. Tecnología médica preventiva para profesionales, estudiantes y gamers.',
  keywords: [
    'fatiga visual digital',
    'ojos secos computadora',
    'cómo evitar cansancio ocular',
    'parpadeo bajo',
    'visión borrosa pantalla',
    'entrenar parpadeo',
    'dispositivo para fatiga visual',
    'salud visual',
    'prevención fatiga ocular',
    'tecnología médica preventiva'
  ],
  authors: [{ name: 'BlinkCare' }],
  creator: 'BlinkCare',
  publisher: 'BlinkCare',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://blinkcare.com',
    title: 'BlinkCare - Previene la Fatiga Visual Digital',
    description: 'Primer dispositivo inteligente que detecta la reducción del parpadeo y previene fatiga visual digital. Tecnología médica preventiva.',
    siteName: 'BlinkCare',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BlinkCare - Dispositivo para prevenir fatiga visual',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlinkCare - Previene la Fatiga Visual Digital',
    description: 'Primer dispositivo inteligente que detecta la reducción del parpadeo y previene fatiga visual digital.',
    images: ['/images/twitter-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1890ff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://blinkcare.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
