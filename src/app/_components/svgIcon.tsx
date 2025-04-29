import React, { useState, useEffect } from 'react';

// A reusable SVG component that can take a color and size prop
interface SvgIconProps {
  src: string;
  alt: string;
  color?: string;
  size?: number;
}

const SvgIcon: React.FC<SvgIconProps> = ({ 
  src, 
  alt, 
  color = "var(--color-background)", 
  size = 50 
}) => {
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

export default SvgIcon;