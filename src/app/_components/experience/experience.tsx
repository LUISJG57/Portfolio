"use client";
import SvgIcon from '../svgIcon';

export default function Experience() {
  return (
    <div className="flex flex-col justify-center items-center  gap-y-10">
        <h1 className="text-[var(--color-text)] intersect:motion-preset-slide-down-md" style={{ fontFamily: 'Monocraft',  fontSize: '3rem'}}>
        Experience
        </h1>
        <div className="flex flex-row justify-center gap-20">
            <div className='flex flex-col items-center intersect:motion-preset-pop'>
                  <SvgIcon 
                    src={'/images/logos/DIDI.svg'} 
                    alt={"Didi Logo"} 
                    color='var(--color-text)'
                    size={150}
                  />
                  <span className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Light',  fontSize: '1rem', opacity: 0.8, textAlign: 'center' }}>
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
          <div className='flex flex-col items-center intersect:motion-preset-pop'>
                <SvgIcon 
                  src={'/images/logos/TEC.svg'} 
                  alt={"TEC Logo"} 
                  color='var(--color-text)'
                  size={150}
                />
                <span className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Light',  fontSize: '1rem', opacity: 0.8, textAlign: 'center' }}>
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

        <div className="flex flex-row justify-center gap-20">
          <div className='flex flex-col items-center intersect:motion-preset-pop'>
                <SvgIcon 
                  src={'/images/logos/bat-logo-black.svg'} 
                  alt={"BAT Logo"} 
                  color='var(--color-text)'
                  size={150}
                />
                <span className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Light',  fontSize: '1rem', opacity: 0.8, textAlign: 'center' }}>
                Jun 2025 - Present
                <br />
                Internship
                </span>
          </div>
          <div className='flex flex-col'>
              <h2 className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Bold',  fontSize: '1.5rem'}}>
              BAT - SWE Intern              
              </h2>
              <ul className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Light', listStyleType: 'disc', paddingLeft: '1rem' }}>
                <li>Developed custom Python automation tools to replace manual workflows, including file processing, data cleaning, and report generation, reducing hours long tasks to seconds.</li>
                <li>Created a fuzzy matching and clustering algorithm to unify similar records (names, locations, owners), enhancing data accuracy across internal databases.</li>
                <li>Developed apps with Power Apps to integrate these tools into a user-friendly internal platform used by non-technical staff.</li>
                <li>Maintain and enhance Power BI dashboards used for tracking logistics and operational KPIs across Latin America, ensuring timely and accurate reporting for regional managers</li>
              </ul>
          </div>
        </div>

    </div>
  );
}
