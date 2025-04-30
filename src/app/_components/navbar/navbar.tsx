"use client";
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const router = useRouter();

  // 1. Efecto para el scroll del navbar (fondo al hacer scroll)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Efecto para detectar la sección visible con IntersectionObserver
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1,
    });

    const sections = ['home', 'experience', 'projects', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  // 3. Función para scroll suave
  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // 4. Estilos dinámicos
  const getNavLinkStyle = (section: string) => {
    const isActive = activeSection === section;
    return `transition-all ${
      isActive
        ? "font-bold underline underline-offset-4 decoration-2"
        : "font-light"
    } ${
      isScrolled ? "text-text" : "text-[var(--color-background)]"
    } hover:opacity-80`;
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 md:px-16 ${
      isScrolled ? "bg-background/50 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="flex justify-between items-center mx-auto">
        <div 
          className="flex items-center gap-4 cursor-pointer" 
          onClick={() => handleScrollTo('home')}
        >
          <div className="w-6 h-6 rounded-full bg-accent"></div>
          <span 
            className={`transition-colors ${isScrolled ? "text-text" : "text-[var(--color-background)]"}`} 
            style={{ fontFamily: "Monocraft", fontSize: "1.5rem" }}
          >
            Luis Juárez
          </span>
        </div>

        {/* Links de navegación */}
        <nav 
          className="md:flex items-center justify-between gap-20" 
          style={{ fontSize: "1.3rem" }}
        >
          {['experience', 'projects'].map((section) => (
            <button
              key={section}
              onClick={() => handleScrollTo(section)}
              className={getNavLinkStyle(section)}
              style={{
                fontFamily: activeSection === section 
                  ? "InriaSans-Bold" 
                  : "InriaSans-Light",
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          
          {/* Botón de Contacto */}
          <div className={`px-2 py-1 rounded-full transition-all ${
            isScrolled ? "bg-primary/90" : "bg-primary"
          }`}>
            <button
              onClick={() => handleScrollTo('contact')}
              className="text-[#282F3C] hover:opacity-80 transition-opacity"
              style={{
                fontFamily: activeSection === "contact" 
                  ? "InriaSans-Bold" 
                  : "InriaSans-Light",
              }}
            >
              Contact Me!
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}