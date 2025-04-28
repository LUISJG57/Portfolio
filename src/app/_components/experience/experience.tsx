"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// A reusable SVG component that can take a color and size prop
interface SvgIconProps {
  src: string;
  alt: string;
  color?: string;
  size?: number; // New size prop
}

const SvgIcon: React.FC<SvgIconProps> = ({ src, alt, color = "var(--color-text)", size = 150 }) => {
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


export default function Experience() {
  return (
    <div className="flex flex-col justify-center items-center  gap-y-10">
        <h1 className="text-[var(--color-text)]" style={{ fontFamily: 'Monocraft',  fontSize: '3rem'}}>
        Experience
        </h1>
        <div className="flex flex-row justify-center gap-20">
            <div className='flex flex-col items-center'>
                  <SvgIcon 
                    src={'/images/logos/DIDI.svg'} 
                    alt={"Didi Logo"} 
                  />
                  <span className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Light',  fontSize: '1rem', opacity: 0.5, textAlign: 'center' }}>
                  Jun 2024 - Dec 2024
                  <br />
                  Internship
                  </span>

            </div>
            <div className='flex flex-col'>
                <h2 className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Bold',  fontSize: '1.5rem'}}>
                DIDI - DRV Onboarding and Data Intern
                </h2>
                <ul className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Light', listStyleType: 'disc', paddingLeft: '1rem' }}>
                  <li>Data Analysis and Reporting: Monitored background check performance, analyzed data trends, and developed dashboards for visualization and communication.</li>
                  <li>Security Enhancement: Designed and deployed a Python script using graph structures and clustering algorithms to improve data integrity and user classification accuracy.</li>
                  <li>Compliance and Efficiency: Automated compliance monitoring with SQL queries and dashboards, optimizing query performance and reducing result delivery time.</li>
                </ul>
            </div>
        </div>



        <div className="flex flex-row justify-center gap-20">
            <div className='flex flex-col items-center'>
                  <SvgIcon 
                    src={'/images/logos/TEC.svg'} 
                    alt={"TEC Logo"} 
                  />
                  <span className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Light',  fontSize: '1rem', opacity: 0.5, textAlign: 'center' }}>
                  Feb 2025 - Present
                  <br />
                  Part Time
                  </span>

            </div>
            <div className='flex flex-col'>
                <h2 className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Bold',  fontSize: '1.5rem'}}>
                TEC - Data Analyst / Developer                
                </h2>
                <ul className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Light', listStyleType: 'disc', paddingLeft: '1rem' }}>
                  <li>Data Integration: Developing automated data pipelines using Python and APIs to connect Excel sources to Azure databases.</li>
                  <li>Dashboard Development: Building interactive Power BI dashboards with custom visualizations, conducting testing and refinement, and presenting to stakeholders.</li>
                  <li>Stakeholder Collaboration: Collaborating with sales and marketing stakeholders to gather dashboard requirements, define KPIs, and create documentation and user guides.</li>
                </ul>
            </div>
            
        </div>

    </div>
  );
}
