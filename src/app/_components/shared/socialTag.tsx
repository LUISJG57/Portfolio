import Link from 'next/link';
import SvgIcon from '@/app/_components/svgIcon';

interface SocialsProps {
  title?: string;
  link?: string;
  image?: string;
  color?: string;
  size?: number;
}

export default function SocialTag({ 
  title, 
  link = '', 
  image = '', 
  color = 'var(--color-background)', 
  size = 50 
}: SocialsProps) {
  return (
    <Link
      href={link}
      className="flex flex-row items-center gap-4 hover:opacity-80 transition-opacity"
      target="_blank"
      rel="noopener noreferrer"
      style={{ fontFamily: 'InriaSans-Regular', fontSize: '1rem' }}
    >
      <SvgIcon
        src={image}
        alt={`${title || 'Social'} Logo`}
        color={color}
        size={size}
      />
      <span 
        className="text-[var(--color-background)]" 
        style={{ 
          fontFamily: 'InriaSans-Regular', 
          textAlign: 'center', 
          fontSize: '2rem' 
        }}
      >
        {title}
      </span>
    </Link>
  );
}