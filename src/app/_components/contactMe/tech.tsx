"use client";
import SvgIcon from '../svgIcon';

interface Skill {
  name: string;
  logo: string;
}

interface SkillRow {
  title: string;
  skills: Skill[];
  reverse?: boolean;
}

const L = (file: string) => `/images/logos/${file}`;

const rows: SkillRow[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: L('python.svg') },
      { name: 'TypeScript', logo: L('typescript.svg') },
      { name: 'JavaScript', logo: L('JavaScript.svg') },
      { name: 'SQL', logo: L('Postgresql.svg') },
      { name: 'C++', logo: L('c++.svg') },
      { name: 'Swift', logo: L('SWFIT.svg') },
    ],
  },
  {
    title: 'AI / ML',
    reverse: true,
    skills: [
      { name: 'OpenAI', logo: L('OpenAi.svg') },
      { name: 'Claude', logo: L('claude.svg') },
      { name: 'Gemini', logo: L('googlegemini.svg') },
      { name: 'Scikit-learn', logo: L('scikitlearn.svg') },
      { name: 'Pandas', logo: L('pandas.svg') },
      { name: 'NumPy', logo: L('numpy.svg') },
      { name: 'Jupyter', logo: L('jupyter.svg') },
    ],
  },
  {
    title: 'Data & Backend',
    skills: [
      { name: 'Next.js', logo: L('nextjs.svg') },
      { name: 'React', logo: L('React.svg') },
      { name: 'Node.js', logo: L('nodedotjs.svg') },
      { name: 'FastAPI', logo: L('fastapi.svg') },
      { name: 'PostgreSQL', logo: L('Postgresql.svg') },
      { name: 'Supabase', logo: L('supabase.svg') },
      { name: 'MySQL', logo: L('mysql.svg') },
      { name: 'Power BI', logo: L('PowerBi.svg') },
      { name: 'Streamlit', logo: L('streamlit.svg') },
    ],
  },
  {
    title: 'Cloud & DevOps',
    reverse: true,
    skills: [
      { name: 'Azure', logo: L('AZURE.svg') },
      { name: 'Google Cloud', logo: L('googlecloud.svg') },
      { name: 'Oracle', logo: L('Oracle.svg') },
      { name: 'Docker', logo: L('docker.svg') },
      { name: 'Git', logo: L('git.svg') },
      { name: 'Postman', logo: L('postman.svg') },
      { name: 'Firebase', logo: L('firebase.svg') },
    ],
  },
];

function Marquee({ skills, reverse }: { skills: Skill[]; reverse?: boolean }) {
  // The list is rendered twice so the -50% translate loops seamlessly.
  return (
    <div className="marquee w-full overflow-hidden">
      <div className={`marquee-track flex w-max ${reverse ? 'marquee-reverse' : ''}`}>
        {[...skills, ...skills].map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="flex flex-col items-center gap-2 px-4 md:px-6"
            aria-hidden={i >= skills.length}
          >
            <SvgIcon src={skill.logo} alt={`${skill.name} logo`} size={44} />
            <span className="text-[var(--color-background)] text-xs md:text-sm whitespace-nowrap" style={{ fontFamily: 'InriaSans-Regular' }}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Tech() {
  return (
    <div className="flex flex-col justify-center items-center bg-secondary rounded-md py-6 md:py-10 gap-y-6 w-[calc(100vw-2rem)] max-w-xl lg:max-w-md xl:max-w-lg">
      {rows.map((row) => (
        <div key={row.title} className="flex flex-col items-center gap-4 w-full">
          <div className="px-4 bg-primary rounded-full">
            <h2 className="text-center text-[#203731] text-lg md:text-2xl" style={{ fontFamily: 'Monocraft' }}>
              {row.title}
            </h2>
          </div>
          <Marquee skills={row.skills} reverse={row.reverse} />
        </div>
      ))}
    </div>
  );
}
