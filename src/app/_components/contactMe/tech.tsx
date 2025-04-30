"use client";
import SvgIcon from '../svgIcon';
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
  { name: 'PostgreSQL', logo: '/images/logos/Postgresql.svg', alt: 'PostgreSQL logo' },
  { name: 'MySQL', logo: '/images/logos/mysql.svg', alt: 'MySql logo' },
  { name: 'Next.js', logo: '/images/logos/nextjs.svg', alt: 'Next.js logo' },
  { name: 'React', logo: '/images/logos/React.svg', alt: 'React logo' },
  { name: 'OpenAI', logo: '/images/logos/OpenAi.svg', alt: 'OpenAI logo' },
  { name: 'Oracle', logo: '/images/logos/Oracle.svg', alt: 'Oracle logo' },
  { name: 'Azure', logo: '/images/logos/AZURE.svg', alt: 'Azure logo' },
  { name: 'Unity', logo: '/images/logos/UNITY.svg', alt: 'Unity logo' },
  { name: 'Figma', logo: '/images/logos/FIGMA.svg', alt: 'Figma logo' },
  { name: 'PowerBi', logo: '/images/logos/PowerBi.svg', alt: 'PowerBi logo' },
];



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
            <div key={skill.name} className="flex justify-center intersect:motion-preset-slide-left-lg">
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
        <div className="grid grid-cols-6 gap-6 gap-y-8 intersect:motion-preset-slide-right-lg">
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