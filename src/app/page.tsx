import Navbar from "./_components/navbar/navbar";
import Projects from "./(pages)/projects/page";
import Contact from "./(pages)/contact/page";
import Work from "./(pages)/experience/page";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col justify-center items-center">
        <section id="home">{/* Hero section (opcional) */}</section>
        <section id="experience">
          <Work />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}
