"use client"

export default function Presentation() {
  return (
    <div className="flex flex-col justify-center gap-5">
        <h1 className="text-[var(--color-text)] text-4xl sm:text-5xl md:text-[4.5rem]" style={{ fontFamily: 'Monocraft', whiteSpace: 'nowrap', overflow: 'hidden', borderRight: '2px solid', animation: 'typing 2s steps(20) infinite alternate, blink .7s infinite' 
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
      <p className="text-[var(--color-text)] text-xl md:text-[1.75rem] max-w-xl mb-6" style={{ fontFamily: 'InriaSans-Light'}}>
        Computer Science grad from Tecnológico de Monterrey, based in Monterrey.
        I love building with AI and the cloud, from LLM pipelines to the
        infrastructure that keeps them running.
      </p>
    </div>
  );
}