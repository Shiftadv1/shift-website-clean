import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Services } from "@/components/vision"
import { Values } from "@/components/values"
import { Vision } from "@/components/vision"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Marquee />
      <About />
<div className="my-16">
  <img
    src="/images/our-services.png"
    alt="Our Services"
    className="w-full h-64 object-cover rounded-2xl"
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
