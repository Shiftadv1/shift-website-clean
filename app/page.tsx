import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Vision } from "@/components/vision"
import { Values } from "@/components/values"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Marquee />
      <About />
<div className="my-16 overflow-hidden rounded-2xl">
  <img
    src="/images/our-services.png"
    alt="Our Services"
    className="w-full h-auto"
  />
</div>
      <Services />
      <Vision />
      <Values />
      <Contact />
      <Footer />
    </main>
  )
}
