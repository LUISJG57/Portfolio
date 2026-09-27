"use client";
import SvgIcon from '../svgIcon';

interface Job {
  company: string;
  role: string;
  logo: string;
  dates: string;
  type: string;
  bullets: string[];
}

const jobs: Job[] = [
  {
    company: 'Tijerina Legal Group',
    role: 'AI Specialist',
    logo: '/images/logos/tijerina.svg',
    dates: 'Jul 2026 - Present',
    type: 'Full Time',
    bullets: [
      'Architecting and deploying a full-stack automated intake platform (React, Vite, Node.js) integrating Litify (Salesforce), DocuSign and Docrio APIs, saving ~12.5 hours per week of manual client onboarding.',
      'Building cloud infrastructure on Azure (Functions, Blob Storage, Key Vault) with GitHub Actions CI/CD and Zero-Trust authentication via Microsoft Entra ID, handling PII and attorney-client confidentiality requirements.',
      'Fine-tuning a sentiment analysis model for call transcripts to surface client sentiment signals from intake conversations.',
      'Managing IT infrastructure, network routing and device provisioning for a 40+ user branch, enforcing security policies with Datto, Duo and Microsoft Entra.',
    ],
  },
  {
    company: 'BAT',
    role: 'IDT Intern',
    logo: '/images/logos/bat-logo-black.svg',
    dates: 'Jun 2025 - Jun 2026',
    type: 'Internship',
    bullets: [
      'Embedded with LATAM business teams to find manual workflow bottlenecks and ship Python automation end-to-end, from scoping to production.',
      'Built Azure-connected ETL pipelines and a fuzzy matching and clustering algorithm to unify records across internal databases.',
      'Designed an agentic fraud detection system on Microsoft Fabric, orchestrating a Copilot agent for anomaly exploration with explainability outputs for non-technical stakeholders.',
      'Built Power Apps and maintained Power BI dashboards tracking logistics and operational KPIs across Latin America.',
    ],
  },
  {
    company: 'TEC',
    role: 'Data Analyst / Developer',
    logo: '/images/logos/TEC.svg',
    dates: 'Feb 2025 - Jun 2026',
    type: 'Part Time',
    bullets: [
      'Engineered a mobile-first assessment platform with Next.js and Supabase for real-time data collection and quadrant-based analysis.',
      'Built clustering pipelines with pandas, regex and similarity scoring, reducing duplicate IDs by 90%.',
      'Created Azure-connected ETL processes with Python and APIs, and interactive Power BI dashboards for sales and marketing stakeholders.',
    ],
  },
  {
    company: 'DiDi',
    role: 'DRV Onboarding & Data Intern',
    logo: '/images/logos/DIDI.svg',
    dates: 'Jul 2024 - Dec 2024',
    type: 'Internship',
    bullets: [
      'Monitored background check performance across 9 Latin American countries with SQL queries and dashboards of weekly trends.',
      'Designed and deployed a Python script using graph structures and clustering to group users on shared variables, improving data integrity.',
      'Automated compliance monitoring with SQL dashboards, cutting result delivery time from 7 business days to 1.',
    ],
  },
];

export default function Experience() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-10">
      <h1 className="text-[var(--color-text)] text-4xl md:text-[3rem] intersect:motion-preset-slide-down-md" style={{ fontFamily: 'Monocraft' }}>
        Experience
      </h1>
      {jobs.map((job) => (
        <div key={job.company} className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-12 w-full">
          <div className='flex flex-col items-center shrink-0 whitespace-nowrap md:w-44 intersect:motion-preset-pop'>
            <SvgIcon
              src={job.logo}
              alt={`${job.company} Logo`}
              color='var(--color-text)'
              size={120}
            />
            <span className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Light', fontSize: '1rem', opacity: 0.8, textAlign: 'center' }}>
              {job.dates}
              <br />
              {job.type}
            </span>
          </div>
          <div className='flex flex-col flex-1'>
            <h2 className="text-[var(--color-text)] text-xl md:text-2xl" style={{ fontFamily: 'InriaSans-Bold' }}>
              {job.company} - {job.role}
            </h2>
            <ul className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Light', listStyleType: 'disc', paddingLeft: '1rem' }}>
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
