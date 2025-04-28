import Link from 'next/link';
import Image from 'next/image';

export default function Presentation() {
  return (
    <div className="flex flex-col justify-center">
        <h1 className="text-[var(--color-text)]" style={{ fontFamily: 'Monocraft',  fontSize: '4.5rem'}}>
        Hello,
        <br />
        I'm Luis!
        </h1>
      <p className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Regular',  fontSize: '1.5rem'}}>
        I'm a computer science student<br />
        at the Tecnológico de Monterrey.<br />
        I'm in my sixth semester and I'm<br />
        currently living in Monterrey.
      </p>
      
      <Link href="https://linkedin.com/in/luisjuarezg" className="gap-4" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'InriaSans-Regular',  fontSize: '1rem'}}>
        <div className="w-5 h-5 mr-2 relative">
          
        </div>
        <div className="flex flex-row items-center mb-6 px-4 py-0.5 gap-4 bg-accent rounded-full">
          <Image 
            src="/images/logos/Search.svg" 
            alt="Search" 
            width={20} 
            height={20} 
          />
          <p className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Regular',  fontSize: '1.1rem'}}>
            linkedin.com/in/luisjuarezg
          </p>
        </div>
      </Link>
    </div>
  );
}