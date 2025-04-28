"use client";
import React, { useEffect, useState } from 'react';
interface Skill {
  name: string;
  logo: string;
  alt: string;
}

const programmingLanguages: Skill[] = [
  { name: 'C++', logo: '/images/logos/c++.svg', alt: 'C++ logo' },
  { name: 'Swift', logo: '/images/logos/SWFIT.svg', alt: 'Swift logo' },
  { name: 'JavaScript', logo: '/images/logos/JavaScript.svg', alt: 'JavaScript logo' },
  { name: 'Python', logo: '/images/logos/python.svg', alt: 'Python logo' },
];

const tools: Skill[] = [
  { name: 'Firebase', logo: '/images/logos/firebase.svg', alt: 'Firebase logo' },
  { name: 'Git', logo: '/images/logos/git.svg', alt: 'Git logo' },
  { name: 'PostgreSQL', logo: '/images/logos/postgresql.svg', alt: 'PostgreSQL logo' },
  { name: 'MySQL', logo: '/images/logos/mysql.svg', alt: 'MySql logo' },
  { name: 'Next.js', logo: '/images/logos/nextjs.svg', alt: 'Next.js logo' },
  { name: 'React', logo: '/images/logos/react.svg', alt: 'React logo' },
  { name: 'OpenAI', logo: '/images/logos/OpenAi.svg', alt: 'OpenAI logo' },
  { name: 'Oracle', logo: '/images/logos/Oracle.svg', alt: 'Oracle logo' },
  { name: 'Azure', logo: '/images/logos/AZURE.svg', alt: 'Azure logo' },
  { name: 'Unity', logo: '/images/logos/UNITY.svg', alt: 'Unity logo' },
  { name: 'Figma', logo: '/images/logos/FIGMA.svg', alt: 'Figma logo' },
  { name: 'PowerBi', logo: '/images/logos/PowerBi.svg', alt: 'PowerBi logo' },
];

// A reusable SVG component that can take a color and size prop
interface SvgIconProps {
  src: string;
  alt: string;
  color?: string;
  size?: number; // New size prop
}

const SvgIcon: React.FC<SvgIconProps> = ({ src, alt, color = "var(--color-background)", size = 50 }) => {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    // Fetch the SVG content
    fetch(src)
      .then(response => response.text())
      .then(text => {
        // Add viewBox if it doesn't exist and modify the SVG to ensure it scales properly
        let modifiedSvg = text;
        
        // Replace the fill with our color
        modifiedSvg = modifiedSvg.replace(/fill="([^"]*)"/g, `fill="${color}"`);
        
        // Add/modify width and height attributes to ensure proper scaling
        // First, check if the SVG has a viewBox
        if (!modifiedSvg.includes('viewBox')) {
          // If no viewBox, try to extract width and height
          const widthMatch = modifiedSvg.match(/width="([^"]*)"/);
          const heightMatch = modifiedSvg.match(/height="([^"]*)"/);
          
          if (widthMatch && heightMatch) {
            const width = widthMatch[1];
            const height = heightMatch[1];
            // Add a viewBox based on the original dimensions
            modifiedSvg = modifiedSvg.replace(/<svg/, `<svg viewBox="0 0 ${width} ${height}"`);
          } else {
            // If no width/height, add a default viewBox
            modifiedSvg = modifiedSvg.replace(/<svg/, '<svg viewBox="0 0 24 24"');
          }
        }
        
        // Ensure the SVG has width and height attributes set to 100%
        modifiedSvg = modifiedSvg.replace(/<svg([^>]*)>/, (match, attributes) => {
          // Remove existing width and height attributes
          const cleanedAttributes = attributes
            .replace(/\s*width="[^"]*"/g, '')
            .replace(/\s*height="[^"]*"/g, '');
          
          // Add width="100%" and height="100%" attributes
          return `<svg${cleanedAttributes} width="100%" height="100%">`;
        });
        
        setSvgContent(modifiedSvg);
      })
      .catch(error => console.error(`Error loading SVG: ${src}`, error));
  }, [src, color]);

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: svgContent }} 
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden' // Prevent SVG from overflowing
      }}
      aria-label={alt}
      role="img"
    />
  );
};

export default function Tech() {
  return (
    <div className="flex flex-col justify-center items-center bg-secondary rounded-md p-10 gap-y-4">
      <div className="mb-8 flex flex-col justify-center items-center">
        <div className="mb-6 px-4 py-0 bg-primary rounded-full">
            <h2 
            className="text-center text-[#203731]" 
            style={{ fontFamily: 'Monocraft', fontSize: '1.5rem' }}
            >
            Programming Languages
            </h2>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {programmingLanguages.map((skill) => (
            <div key={skill.name} className="flex justify-center">
                <div className="flex items-center justify-center">
                  <SvgIcon 
                    src={skill.logo} 
                    alt={skill.alt} 
                  />
                </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className='flex flex-col justify-center items-center'>
        <div className="mb-6 px-4 py-0 bg-primary rounded-full">
            <h2 
            className="text-center text-[#203731]" 
            style={{ fontFamily: 'Monocraft', fontSize: '1.5rem' }}
            >
            Tools & Technologies
            </h2>
        </div>
        <div className="grid grid-cols-6 gap-6 gap-y-8">
          {tools.slice(0, 12).map((tool) => (
            <div key={tool.name} className="flex justify-center">
              <div className="flex items-center justify-center">
                <SvgIcon 
                  src={tool.logo} 
                  alt={tool.alt} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}