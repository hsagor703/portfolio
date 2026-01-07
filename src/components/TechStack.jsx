import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import html from '../Skill-Image/html.png';
import css from '../Skill-Image/css.png';
import tailwind from '../Skill-Image/tailwind.png';
import javascript from '../Skill-Image/javascript.png';
import react from '../Skill-Image/react.png';
import node from '../Skill-Image/node.png';
import ex from '../Skill-Image/ex.png';
import next from '../Skill-Image/nextjs.png';
import mongoDB from '../Skill-Image/mongodb.png';
import firebase from '../Skill-Image/firebase.png';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  const myTech = [
    { id: 1, Name: "HTML5", img: html },
    { id: 2, Name: "CSS3", img: css },
    { id: 3, Name: "Tailwind", img: tailwind },
    { id: 4, Name: "JavaScript", img: javascript },
    { id: 5, Name: "React", img: react },
    { id: 6, Name: "Node.js", img: node },
    { id: 7, Name: "Express.js", img: ex, size: "w-20 h-20" },
    { id: 8, Name: "Next.js", img: next },
    { id: 9, Name: "MongoDB", img: mongoDB },
    { id: 10, Name: "Firebase", img: firebase },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Grid items animation
      gsap.fromTo(gridRef.current?.children || [],
        { y: 80, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 bg-primary-light/5 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div ref={titleRef} className="text-center mb-12">
        <motion.h2
          variants={itemVariants}
          className="font-display font-bold text-3xl md:text-4xl text-slate-900 dark:text-white mb-4"
        >
          My{' '}
          <span className="text-primary bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Tech Stack
          </span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
        >
          I constantly update my toolkit to include the best modern technologies
          for building scalable and maintainable applications.
        </motion.p>
      </div>

      <motion.div
        ref={gridRef}
        variants={containerVariants}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {myTech.map((tech, index) => (
          <motion.div
            key={tech.id}
            variants={itemVariants}
            className="group relative bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 p-6 rounded-2xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 flex flex-col items-center gap-3 overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 40px rgba(124, 58, 237, 0.15)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Hover background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5"
              initial={{ opacity: 0, scale: 0 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Floating particles */}
            <motion.div
              className="absolute top-2 right-2 w-1 h-1 bg-primary rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, 10, 20],
                y: [0, -10, -20]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />

            <motion.img
              className={`${tech.size || 'w-16 h-16'} relative z-10`}
              src={tech.img}
              alt={tech.Name}
              whileHover={{ 
                rotate: [0, -10, 10, 0],
                scale: 1.1
              }}
              transition={{ duration: 0.5 }}
            />
            
            <motion.span
              className="font-semibold text-slate-700 dark:text-slate-200 relative z-10"
              whileHover={{ color: "#7C3AED" }}
              transition={{ duration: 0.2 }}
            >
              {tech.Name}
            </motion.span>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Floating tech icons */}
      <motion.div
        className="absolute top-20 left-20 opacity-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-8 h-8 border-2 border-primary rounded-lg" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-20 opacity-10"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-6 h-6 bg-primary-light rounded-full" />
      </motion.div>
    </motion.section>
  );
};

export default TechStack;