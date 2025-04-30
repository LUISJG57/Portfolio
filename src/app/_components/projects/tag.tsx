"use client";
import Image from 'next/image';
import SvgIcon from "../svgIcon";
import Link from 'next/link';

interface TagProps {
  title?: string;
  content?: string;
  image?: string;
  repo?: string; 
}

export default function Tag({ title, content, image, repo }: TagProps) {
  return (
    <div className="flex flex-col justify-between bg-background p-4 rounded h-full intersect:motion-preset-slide-left-lg">
      <div> {/* Agrupamos el título y contenido en un div */}
        <h1 className="text-[var(--color-secondary)]" style={{ fontFamily: 'InriaSans-Bold', fontSize: '2.5rem' }}>
          {title}
        </h1>
        <span className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Light' }}>
          {content}
        </span>
      </div>

      <div className="flex flex-row items-end justify-between mt-auto"> {/* Añadido mt-auto */}
        {repo && ( 
          <Link href={repo} className="gap-4" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'InriaSans-Regular', fontSize: '1rem'}}>
            <div className="flex flex-row items-center gap-4 hover:opacity-80 transition-opacity">
              <SvgIcon 
                src={'/images/logos/GITHUB.svg'} 
                alt={"GITHUB Logo"} 
                color='var(--color-text)'
                size={35}
              /> 
              <span className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Regular', textAlign: 'center' }}>
                Github Repo
              </span>
            </div>
          </Link>
        )}
        {image && (
          <Image 
            src={image} 
            alt={title || 'Tag image'} 
            height={100} 
            width={100}
            style={{ opacity: 0.5 }} 
          />
        )}
      </div>
    </div>
  );
}