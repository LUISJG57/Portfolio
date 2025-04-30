"use client";
import SocialTag from "@/app/_components/shared/socialTag";

export default function Hero () {
    return (
        <main className="flex flex-col items-center justify-center bg-secondary min-h-screen min-w-screen">
            <h1 className="text-[var(--color-background)]" style={{ fontFamily: 'Monocraft',  fontSize: '8rem'}}>
            PORTFOLIO
            </h1>
            
            <div className="flex flex-col justify-center items-center mx-10 gap-y-1">
                
                <h1 className="text-[var(--color-primary)]" style={{ fontFamily: 'Monocraft', fontSize: '8rem', opacity: 0.8 }}>
                PORTFOLIO
                </h1>
                <h1 className="text-[var(--color-primary)]" style={{ fontFamily: 'Monocraft', fontSize: '8rem', opacity: 0.5 }}>
                PORTFOLIO
                </h1>
                <h1 className="text-[var(--color-primary)]" style={{ fontFamily: 'Monocraft', fontSize: '8rem', opacity: 0.2 }}>
                PORTFOLIO
                </h1>  
                <div className="flex flex-row justify-center items-center gap-60 position absolute">
                    <div className="flex justify-center items-center w-120 h-150 bg-[var(--color-accent)]">
                        <img 
                            src="/images/logos/pera.png" 
                            alt={'Luis Juarez image'} 
                            className="h-full" 
                            style={{ mixBlendMode: 'hard-light' }} 
                        />
                    </div>
                    <div className="flex flex-col justify-center p-20 gap-y-5 bg-[var(--color-secondary)]" >
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