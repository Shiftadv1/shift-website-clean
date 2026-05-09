import type { Metadata } from "next"
import { Montserrat, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: "400",
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

  authors: [{ name: "SHIFT Advertising Agency" }],

  openGraph: {
    title: "SHIFT | We Shift Brands Forward",
    description:
      "Creative ideas. Smart strategy. Real impact. Full-service advertising agency in Riyadh, KSA.",
    url: "https://www.shiftadv.net",
    siteName: "SHIFT",
    type: "website",
    images: [
      {
        url: "https://www.shiftadv.net/icon.png",
        width: 512,
        height: 512,
        alt: "SHIFT Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SHIFT | We Shift Brands Forward",
    description:
      "Creative ideas. Smart strategy. Real impact. Full-service advertising agency in Riyadh, KSA.",
    images: ["https://www.shiftadv.net/icon.png"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${montserrat.variable} ${bebasNeue.variable} font-sans antialiased`}
      >
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SHIFT Advertising Agency",
              url: "https://www.shiftadv.net",
              logo: "https://www.shiftadv.net/icon.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Riyadh",
                addressCountry: "SA",
              },
            }),
          }}
        />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
