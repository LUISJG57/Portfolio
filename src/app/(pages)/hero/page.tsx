"use client";
import SocialTag from "@/app/_components/shared/socialTag";
import Image from "next/image";

export default function Hero () {
    return (
        <main className="flex flex-col items-center justify-center bg-secondary min-h-screen w-full p-5 pt-20 lg:pt-5">
            <h1 className="text-[var(--color-background)] text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] intersect:motion-preset-slide-down-lg motion-duration-500" style={{ fontFamily: 'Monocraft'}}>
            PORTFOLIO
            </h1>
            
            <div className="flex flex-col justify-center items-center mx-4 md:mx-10 gap-y-1">
                
                <h1 className="text-[var(--color-primary)] text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] hidden sm:block intersect:motion-preset-slide-down-lg motion-duration-1000" style={{ fontFamily: 'Monocraft', opacity: 0.8 }}>
                PORTFOLIO
                </h1>
                <h1 className="text-[var(--color-primary)] text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] hidden sm:block intersect:motion-preset-slide-down-lg motion-duration-1500" style={{ fontFamily: 'Monocraft', opacity: 0.6 }}>
                PORTFOLIO
                </h1>
                <h1 className="text-[var(--color-primary)] text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] hidden sm:block intersect:motion-preset-slide-down-lg motion-duration-2000" style={{ fontFamily: 'Monocraft', opacity: 0.4 }}>
                PORTFOLIO
                </h1>  
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-60 mt-6 lg:mt-0 lg:absolute">
                    <div className="flex justify-center items-center w-60 h-72 md:w-80 md:h-96 lg:w-120 lg:h-150 bg-[var(--color-accent)] 
                    intersect:motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[2.35s] motion-duration-[0.53*2s]/scale motion-duration-[0.53*2s]/translate motion-duration-[0.63*2s]/rotate
                    ">
                        <Image 
                            src="/images/logos/Me.png" 
                            alt={'Luis Juarez image'} 
                            className="h-full" 
                            style={{ mixBlendMode: 'hard-light' }} 
                            height={594} 
                            width={447}
                        />
                    </div>
                    <div className="flex flex-col justify-center p-6 lg:p-20 gap-y-5 bg-[var(--color-secondary)] intersect:motion-preset-fade intersect:motion-duration-2000" >
                        <SocialTag 
                            title="Github" 
                            link="https://github.com/LUISJG57"
                            image="/images/logos/GITHUB.svg"
                        />
                        <SocialTag 
                            title="LinkedIn" 
                            link="https://www.linkedin.com/in/luisjuarezg/"
                            image="/images/logos/Linkedin.svg"
                        />
                        <SocialTag 
                            title="Email" 
                            link="mailto:luisgerardojuarezgarcia@gmail.com"
                            image="/images/logos/Email.svg"
                        />
                    </div>
                </div>
                
            </div>
        </main>
    );
}