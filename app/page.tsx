import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Services } from "@/components/vision"
<div className="my-16">
  <img
    src="/images/our-services.png"
    alt="Our Services"
    className="w-full h-64 object-cover rounded-2xl"
  />
</div>
import { Values } from "@/components/services"
import { Vision } from "@/components/about"
import { About } from "@/components/values"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <Values />
      <Vision />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
