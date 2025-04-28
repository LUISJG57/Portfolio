import Link from 'next/link';

export default function navbar() {
  return (
    <header className="flex justify-between items-center py-6 px-8 md:px-16">
      <div className="flex items-center gap-4">
        <div className="w-6 h-6 rounded-full bg-accent"></div>
        <span className="text-[var(--color-secondary)]" style={{ fontFamily: 'Monocraft',  fontSize: '1.5rem'}}>Luis Juárez</span>
      </div>
      
      <nav className="md:flex items-center justify-between gap-20" style={{ fontFamily: 'InriaSans-Light', fontSize: '1.3rem'}}>
        <Link className="text-[var(--color-secondary)]" href="/experience" >
          Experience
        </Link>
        <Link className="text-[var(--color-secondary)]" href="/projects" >
          Projects
        </Link>
        <div className="px-4 py-1 bg-primary rounded-full">
          <Link className="text-[#203731]" href="/contact" >
            Contact Me!
          </Link>
        </div>
      </nav>
    </header>
  );
}