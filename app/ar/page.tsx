import { HeaderAr } from "@/components/header-ar"
import { HeroAr } from "@/components/hero-ar"
import { Marquee } from "@/components/marquee"
import { AboutAr } from "@/components/about-ar"
import { ServicesAr } from "@/components/services-ar"
import { VisionAr } from "@/components/vision-ar"
import { ValuesAr } from "@/components/values-ar"
import { ContactAr } from "@/components/contact-ar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen">
      <HeaderAr />
      <HeroAr />
      <Marquee />
      <AboutAr />
      <ServicesAr />
      <VisionAr />
      <ValuesAr />
      <ContactAr />
      <Footer />
    </main>
  )
}
