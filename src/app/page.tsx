import Projects from "./(pages)/projects/page"
import Contact from "./(pages)/contact/page"
import Work from "./(pages)/experience/page"
import Hero from "./(pages)/hero/page"

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <section id="home" className="w-full">
          <Hero />
        </section>
      </div>
      
      <div className="flex flex-col items-center justify-center">
        <section id="experience" className="w-full">
          <Work />
        </section>
      </div>
      
      <div className="flex flex-col items-center justify-center">
        <section id="projects" className="w-full">
          <Projects />
        </section>
      </div>
      
      <div className="flex flex-col items-center justify-center">
        <section id="contact" className="w-full">
          <Contact />
        </section>
      </div>
    </main>
  )
}