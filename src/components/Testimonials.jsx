import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jessica Parker',
      role: 'Marketing Director, SassyInc',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdUEE1K_qYlrxneNws7f_7gSPbkhSpV9NnNcxEB12TD-QqzZQFQhIph_GDZUb1SMCjE51r7EPu40S1bBc8_IpluQofsxm4mtERVCQEr-Jeh6QMMMI9roUPbEJgbDO6vKuElxN8Uc-eEKtAjuw2VVQUNA4WVaO9C5Ugi4olkdivB0Zk7pSL5-w900BUjqav2sZEOtHlkiZjYl0agZT5SrRga6JzABs63lMynn_Ez4K_ojBsDSoLorjqbMIDhTohvKF-AfB35vxXvVI',
      testimonial: "Kawsar is a rare find. He has a keen eye for design and the technical skills to back it up. He completely revamped our landing page, increasing conversion by 150%."
    },
    {
      name: 'David Chen',
      role: 'Senior Engineer, TechFlow',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg3svQZwr6Z0OKwGf-9ARPBgoCnitxonibBaxu9zInoNJi7y9I_uZdPISXf3wUObhx91xFIUFsILqcDW2FItkzSVvAtsxPQXvSg-o1EdOHogDacemeP2KfI0SNjj0LzaxXa64YH54Agdie9_gCl4W96bLzQNXbenpmPz1rG9qlIPhT0yRu0wRGOC29uUyRt9uejr_EC5qkRob3hsqMlOVL4IdrFiYBioJLyu6fro2dymyNuDVqeIcg_aZu_uwS5QaTYsa0hB2h0qg',
      testimonial: "The project was complex, involving real-time data and intricate visualizations. Kawsar handled it with ease, delivering clean, maintainable code on time."
    },
    {
      name: 'Emily Wong',
      role: 'Founder, Bloom Digital',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKFkKHGX3TcjOuqqZV5zgVDLnEzBBwb54MswfK0vRPInUbPgMdUNSMLpi-xJ9RLsUhI0VsFwGSDHXNrkbK2EPF_hcZNoOE7G2HbjkRHdupJd3OKNtItJ1E7nFVwUcq8zyQrGUhp8fsXIB9dVfPvo314wo0q__3vkEm0hePypawdJMTvTQdC6FUvoEy1QpvDzCow6cf6bVl-QJY-V8QHNrC2BXg9L74ZQo4xGDe3uI3gyQt2tbHS49fEO6mjFLgtWB1IlXGjeLCKGI',
      testimonial: "Professional, communicative, and skilled. Kawsar didn't just write code; he contributed ideas that improved the overall user experience significantly."
    }
  ];

  return (
    <section className="py-10">
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
          <i className="ri-chat-smile-2-line"></i> Testimonials
        </div>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-900 dark:text-white mb-6">
          Words from <span className="text-primary">Clients</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Feedback from teams and clients I've had the pleasure of working
          with on various projects.
        </p>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-primary/5 blur-3xl rounded-full -z-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-surface-dark p-8 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300 shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <i className="ri-double-quotes-r text-8xl text-primary"></i>
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400"></i>
                ))}
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.testimonial}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-white/10 mt-auto">
                <img
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  src={testimonial.image}
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;