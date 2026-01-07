import React from 'react';
import { Button } from './ui/button';

const Services = () => {
  const services = [
    {
      icon: 'ri-code-s-slash-line',
      title: 'Web Development',
      description: 'I build high-performance, responsive websites using modern frameworks like React.js. My code is clean, maintainable, and Next.js optimized for search engines.',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: 'ri-layout-2-line',
      title: 'UI/UX To CODE',
      description: 'Designing intuitive interfaces that users love. I focus on usability, accessibility, and creating a seamless visual language for your brand.',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      iconColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: 'ri-database-2-line',
      title: 'API Integration',
      description: 'Seamlessly connecting your frontend to backends. I have basic experience integrating payment gateways, CMS, and third-party APIs.',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Maintenance & Support',
      description: 'Ensuring your application stays secure and bug-free. I offer ongoing support packages to handle updates, performance monitoring, and quick fixes.',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      iconColor: 'text-orange-600 dark:text-orange-400'
    }
  ];

  return (
    <section className="relative" id="services">
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-900 dark:text-white mb-6">
          Services I <span className="text-primary">Offer</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Helping you build digital products that are user-friendly, scalable,
          and secure. I bring technical expertise to help your business grow.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              <i className={`${service.icon} text-9xl text-primary`}></i>
            </div>
            <div className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 ${service.iconColor} group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110`}>
              <i className={`${service.icon} text-3xl`}></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              {service.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Button className="bg-primary hover:bg-primary-light text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-primary/30 transition-transform hover:-translate-y-1 flex items-center gap-3 mx-auto">
          Get a Free Quote <i className="ri-arrow-right-line"></i>
        </Button>
      </div>
    </section>
  );
};

export default Services;