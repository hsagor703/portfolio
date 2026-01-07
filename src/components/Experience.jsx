import React from 'react';

const Experience = () => {
  const experiences = [
    // {
    //   period: '2021 - Present',
    //   title: 'Senior Frontend Developer',
    //   company: 'TechSolutions Inc.',
    //   description: 'Leading a team of 5 developers to rebuild the legacy dashboard using React and Tailwind. Improved performance by 40%.',
    //   current: true
    // },
    // {
    //   period: '2018 - 2021',
    //   title: 'Web Developer',
    //   company: 'Creative Agency X',
    //   description: 'Collaborated with designers to deliver over 30 responsive websites for international clients. Specialized in animation and interactivity.',
    //   current: false
    // },
    {
      period: '2025',
      title: 'Junior Frontend Developer (Fresher)',
      company: 'Continuous Learning ',
      description: 'Started my career designing UI mockups and converting them into clean Code.',
      current: true
    }
  ];

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        <div className="md:w-1/3 space-y-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 dark:text-white">
            Career<br />Highlights
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            A summary of my professional growth
             {/* and the key roles I've held in
            the tech industry. */}
          </p>
          <div className="hidden md:block w-20 h-1 bg-primary rounded-full mt-4"></div>
        </div>
        
        <div className="md:w-2/3">
          <div className="space-y-8 border-l-2 border-slate-200 dark:border-white/10 ml-3 pl-8 md:pl-12 relative">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                <span className="absolute -left-[43px] md:-left-[59px] top-1 w-6 h-6 rounded-full bg-slate-200 dark:bg-surface-dark border-4 border-white dark:border-background-dark group-hover:bg-primary group-hover:scale-110 transition-all duration-300"></span>
                <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm group-hover:shadow-md transition-all">
                  <span className={`inline-block py-1 px-3 rounded-full text-xs font-bold mb-3 ${
                    exp.current 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300'
                  }`}>
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                    {exp.company}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;