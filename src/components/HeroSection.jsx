import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";
import image from "../My-Img/1764258597815.png";
import Typewriter from "typewriter-effect";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.fromTo(
        textRef.current?.children || [],
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0, rotation: 10 },
        {
          scale: 1,
          opacity: 1,
          rotation: 2,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating badge animation
      gsap.to(badgeRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary-light/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div ref={textRef} className="flex-1 order-2 lg:order-1 space-y-8 z-10">
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-white dark:bg-[#1A1A35] border border-slate-200 dark:border-white/10 rounded-full px-4 py-2 shadow-sm"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 25px rgba(124, 58, 237, 0.15)",
          }}
        >
          <motion.span
            className="text-lg"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            👨‍💻
          </motion.span>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Who I Am
          </span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="font-display font-bold text-4xl md:text-5xl leading-tight text-slate-900 dark:text-white space-y-4"
        >
          <div className="overflow-hidden">
            {/* <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: "power3.out" }}
            > */}
            Hi I'm
            <span className="text-primary bg-gradient-to-r from-primary to-primary-light bg-clip-text">
              <Typewriter
                options={{
                  strings: ["Jony Shagor"],
                  autoStart: true,
                  loop: true,
                  cursorStyle: "_",
                  typeSpeed: 70,
                  deleteSpeed: 70,
                  // delaySpeed: 1000,
                }}
              />
            </span>
            {/* </motion.div> */}
          </div>

          <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
            <motion.span
              className="text-primary px-4 py-2 border border-purple-500/20 rounded-xl text-xl hover:border-purple-500 transition-colors bg-white/10"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(124, 58, 237, 0.2)",
                borderColor: "rgba(124, 58, 237, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Frontend Developer
            </motion.span>
            <motion.span
              className="text-primary px-4 py-2 border border-purple-500/20 rounded-xl text-xl hover:border-purple-500 transition-colors bg-white/10"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(124, 58, 237, 0.2)",
                borderColor: "rgba(124, 58, 237, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Coding with Precision
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed"
        >
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm Jony Shagor, a passionate Full-Stack Developer specializing
            in Frontend Developer. I build high-performance web applications
            with cutting-edge technologies.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-4">
          <Button
            className="relative bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-primary/25 transition-all overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 35px rgba(124, 58, 237, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <a
              href="/resume.pdf"
              download="/resume.pdf"
              className="relative z-10 flex items-center gap-3"
            >
              Download Resume
              <motion.i
                className="ri-download-cloud-2-line text-xl"
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="flex-1 order-1 lg:order-2 w-full flex justify-center lg:justify-end relative z-10"
      >
        {/* Glow effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] glow-effect rounded-full blur-3xl opacity-60 z-0"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating badge */}
        <motion.div
          ref={badgeRef}
          className="absolute -bottom-6 -left-6 bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 p-4 rounded-xl shadow-xl z-20 flex items-center gap-3"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <motion.div
            className="bg-green-100 dark:bg-green-500/20 p-2 rounded-lg"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <i className="ri-check-double-line text-green-600 dark:text-green-400 text-xl" />
          </motion.div>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">
              Available for
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">
              Freelance Projects
            </div>
          </div>
        </motion.div>

        {/* Main image */}
        <motion.div
          ref={imageRef}
          className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl"
          initial={{ rotate: 10, scale: 0.8 }}
          whileInView={{ rotate: 2, scale: 1 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        >
          <motion.img
            alt="Jony Shagor - Frontend Developer"
            className="w-full max-w-[400px] h-auto object-cover"
            src={image}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <motion.div
            className="absolute bottom-6 left-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p className="font-bold text-xl">Jony Shagor</p>
            <p className="text-sm opacity-80">Frontend Engineer</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
