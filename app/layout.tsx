import type { Metadata } from 'next'
import { Montserrat, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800']
})

const bebasNeue = Bebas_Neue({ 
  subsets: ["latin"],
  variable: '--font-bebas-neue',
  weight: '400'
})

export const metadata: Metadata = {
  title: "SHIFT Advertising Agency",
  description:
    "SHIFT is a creative advertising agency in Riyadh specializing in branding, printing, uniforms, event booths, photography, and marketing solutions.",
  keywords: [
    "Advertising Agency Riyadh",
    "Branding Saudi Arabia",
    "Printing Services",
    "Uniform Supplier",
    "Event Booths",
    "Photography",
    "Marketing Agency",
    "SHIFT",
  ],
  authors: [{ name: 'SHIFT Advertisement Agency' }],
  openGraph: {
    title: 'SHIFT | We Shift Brands Forward',
    description: 'Creative ideas. Smart strategy. Real impact. Full-service advertising agency in Riyadh, KSA.',
    url: 'https://www.shiftadv.net',
    siteName: 'SHIFT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHIFT | We Shift Brands Forward',
    description: 'Creative ideas. Smart strategy. Real impact. Full-service advertising agency in Riyadh, KSA.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${montserrat.variable} ${bebasNeue.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
