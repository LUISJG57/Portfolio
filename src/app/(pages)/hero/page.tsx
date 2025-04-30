"use client";
import SocialTag from "@/app/_components/shared/socialTag";
import Image from "next/image";

export default function Hero () {
    return (
        <main className="flex flex-col items-center justify-center bg-secondary min-h-screen min-w-screen p-5">
            <h1 className="text-[var(--color-background)] intersect:motion-preset-slide-down-lg motion-duration-500" style={{ fontFamily: 'Monocraft',  fontSize: '8rem'}}>
            PORTFOLIO
            </h1>
            
            <div className="flex flex-col justify-center items-center mx-10 gap-y-1">
                
                <h1 className="text-[var(--color-primary)] intersect:motion-preset-slide-down-lg motion-duration-1000" style={{ fontFamily: 'Monocraft', fontSize: '8rem', opacity: 0.8 }}>
                PORTFOLIO
                </h1>
                <h1 className="text-[var(--color-primary)] intersect:motion-preset-slide-down-lg motion-duration-1500" style={{ fontFamily: 'Monocraft', fontSize: '8rem', opacity: 0.6 }}>
                PORTFOLIO
                </h1>
                <h1 className="text-[var(--color-primary)] intersect:motion-preset-slide-down-lg motion-duration-2000" style={{ fontFamily: 'Monocraft', fontSize: '8rem', opacity: 0.4 }}>
                PORTFOLIO
                </h1>  
                <div className="flex flex-row justify-center items-center gap-60 position absolute">
                    <div className="flex justify-center items-center w-120 h-150 bg-[var(--color-accent)] 
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
                    <div className="flex flex-col justify-center p-20 gap-y-5 bg-[var(--color-secondary)] intersect:motion-preset-fade intersect:motion-duration-2000" >
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