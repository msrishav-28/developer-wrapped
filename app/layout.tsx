import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Instrument_Serif, Inter_Tight, Space_Mono } from 'next/font/google'
import { SessionProvider } from '@/components/providers/SessionProvider'
import { ThemeProvider } from '@/context/ThemeContext'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-serif',
})

const interTight = Inter_Tight({
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gitstory.pankajk.tech'),
  title: 'Developer Wrapped 2025 - Your Year in Code | GitHub Wrapped',
  description: 'Relive your coding journey with Developer Wrapped 2025. Transform your GitHub contributions into a stunning cinematic experience with beautiful animations and personalized insights. Your GitHub Wrapped for 2025!',
  keywords: [
    'Developer Wrapped',
    'Developer Wrapped 2025',
    'GitStory',
    'Git Story',
    'GitHub Wrapped',
    'GitHub Wrapped 2025',
    'Git Wrapped',
    'Git Wrapped 2025',
    'GitHub Year in Review',
    'GitHub Stats',
    'GitHub Statistics',
    'GitHub Contributions',
    'GitHub Analytics',
    'GitHub Profile Stats',
    'GitHub Activity',
    'GitHub Summary',
    'Spotify Wrapped for GitHub',
    'GitHub Recap',
    'GitHub Rewind',
    'Coder Wrapped',
    'Code Wrapped',
    'Coding Year Review',
    'GitHub Visualization',
    'Code Visualization',
    'Contribution Graph',
    'Commit History',
    'Programming Stats',
    'Year in Code 2025',
    'Developer Year Review',
    'GitHub Profile Wrapped',
    'GitHub Contribution Summary',
    'Open Source Stats',
    'Developer Statistics 2025',
    'Coding Journey 2025',
    'GitHub Cinematic Experience',
  ],
  authors: [{ name: 'Developer Wrapped Community', url: 'https://github.com/msrishav-28/developer-wrapped' }],
  creator: 'Developer Wrapped Community',
  publisher: 'Developer Wrapped',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://gitstory.pankajk.tech',
    title: 'Developer Wrapped 2025 - Your Year in Code | GitHub Wrapped',
    description: 'Relive your coding journey with Developer Wrapped 2025. Transform your GitHub contributions into a stunning cinematic experience. Your GitHub Wrapped for 2025!',
    siteName: 'Developer Wrapped',
    locale: 'en_US',
    images: [
      {
        url: 'https://gitstory.pankajk.tech/card.png',
        secureUrl: 'https://gitstory.pankajk.tech/card.png',
        width: 1200,
        height: 630,
        alt: 'Developer Wrapped 2025 - GitHub Wrapped Preview',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Wrapped 2025 - Your Year in Code | GitHub Wrapped',
    description: 'Relive your coding journey with Developer Wrapped 2025. Transform your GitHub contributions into a stunning cinematic experience. Your GitHub Wrapped for 2025!',
    images: ['/card.png'],
    creator: '@developerwrapped',
    site: '@developerwrapped',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Developer Wrapped',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/card.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: [
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
  alternates: {
    canonical: 'https://gitstory.pankajk.tech',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0a0a0a',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Developer Wrapped 2025',
  description: 'Transform your GitHub contributions into a stunning cinematic experience. Your GitHub Wrapped for 2025!',
  url: 'https://gitstory.pankajk.tech',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  author: {
    '@type': 'Organization',
    name: 'Developer Wrapped Community',
    url: 'https://github.com/msrishav-28/developer-wrapped',
  },
  screenshot: 'https://gitstory.pankajk.tech/card.png',
  image: 'https://gitstory.pankajk.tech/card.png',
  featureList: [
    'GitHub Year in Review',
    'Contribution Statistics',
    'Language Analytics',
    'Repository Insights',
    'Cinematic Animations',
    'Downloadable Poster',
  ],
  keywords: 'GitStory, GitHub Wrapped, GitHub Wrapped 2025, Git Wrapped, Developer Stats, Code Visualization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${instrumentSerif.variable} ${interTight.variable} ${spaceMono.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('gitstory-theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <SessionProvider>
          <ThemeProvider>
            <Analytics />
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
