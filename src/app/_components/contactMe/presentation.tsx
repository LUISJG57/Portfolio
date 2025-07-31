"use client"
import SvgIcon from '../svgIcon';

export default function Presentation() {
  return (
    <div className="flex flex-col justify-center gap-5">
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
        I&apos;m in my seventh semester and I&apos;m<br />
        currently living in Monterrey.
      </p>
      
      <button 
        onClick={() => {
          const link = document.createElement('a');
          link.href = '/files/Resume_LuisJuarez_07:2025.pdf';
          link.download = 'LuisJuarezCV.pdf';
          link.click();
        }} 
        className="flex flex-row items-center mb-6 px-4 py-0.5 gap-4 bg-accent rounded-full hover:opacity-80 transition-opacity"
        style={{ fontFamily: 'InriaSans-Regular', fontSize: '1rem' }}
      >
        <SvgIcon 
          src={'/images/logos/CV_icon.svg'} 
          alt={"CV Logo"} 
          size={20}
        />
        <p className="text-[#F0E8DF]" style={{ fontFamily: 'InriaSans-Regular', fontSize: '1.1rem' }}>
          Download my CV
        </p>
      </button>
    </div>
  );
}