"use client"
import Link from 'next/link';
import Image from 'next/image';

export default function Presentation() {
  return (
    <div className="flex flex-col justify-center">
        <h1 className="text-[var(--color-text)]" style={{ fontFamily: 'Monocraft', fontSize: '4.5rem', whiteSpace: 'nowrap', overflow: 'hidden', borderRight: '2px solid', animation: 'typing 2s steps(20) infinite alternate, blink .7s infinite' 
        }}>
          Hello,
          <br />
          I&apos;m Luis!
        </h1>
        <style jsx>{`
          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
          @keyframes blink-caret {
            from, to {
              border-color: transparent;
            }
            50% {
              border-color: var(--color-text);
            }
          }
        `}</style>
      <p className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Light',  fontSize: '2rem'}}>
        I&apos;m a computer science student<br />
        at the Tecnológico de Monterrey.<br />
        I&apos;m in my sixth semester and I&apos;m<br />
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
          <p className="text-[#F0E8DF]" style={{ fontFamily: 'InriaSans-Regular',  fontSize: '1.1rem'}}>
            linkedin.com/in/luisjuarezg
          </p>
        </div>
      </Link>
    </div>
  );
}