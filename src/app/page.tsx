import Projects from "./(pages)/projects/page"
import Contact from "./(pages)/contact/page"
import Work from "./(pages)/experience/page"
import Hero from "./(pages)/hero/page"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="">
      <SpeedInsights />
      <div className="flex flex-col justify-center items-center min-h-screen">
        <section id="home">
          <Hero />
        </section>
      </div>
      
      <div className="flex flex-col items-center justify-center">
        <section id="experience">
          <Work />
        </section>
      </div>
      
      <div className="flex flex-col items-center justify-center">
        <section id="projects">
          <Projects />
        </section>
      </div>
      
      <div className="flex flex-col items-center justify-center">
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  )
}