import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { Button } from './ui/button';

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // GSAP animations for initial load
    const tl = gsap.timeline();
    
    tl.fromTo(logoRef.current, 
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(navRef.current?.children || [], 
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(ctaRef.current, 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
      "-=0.3"
    );

    // Floating animation for logo
    gsap.to(logoRef.current, {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    
    // GSAP animation for theme toggle
    gsap.to(headerRef.current, {
      scale: 0.98,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });
  };

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Connect', href: '#connect' }
  ];
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
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.header
      ref={headerRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-slate-200/20 dark:border-white/10 shadow-lg shadow-slate-900/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full py-4 px-4 md:px-12 lg:px-20 flex justify-between items-center">
        {/* Logo Section */}
        <motion.div 
          ref={logoRef}
          variants={itemVariants}
          className="flex items-center gap-3 group cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <motion.div
              className="font-display font-bold text-2xl tracking-tight leading-none text-slate-900 dark:text-white 
              p-4  border border-purple-500/20 rounded-full hover:border-purple-500 transition-colors
              "
              whileHover={{ 
                textShadow: "0 0 20px rgba(124, 58, 237, 0.5)",
                transition: { duration: 0.3 }
              }}
            >
              J
              <span className="text-primary bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                S
              </span>
            </motion.div>
            
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-light"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Bangladesh Flag with animation */}
          {/* <motion.div
            aria-label="Bangladesh Flag"
            className="w-6 h-4 bg-green-700 relative ml-2 rounded-sm shadow-lg overflow-hidden"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              className="absolute w-2 h-2 bg-red-600 rounded-full top-1 left-1.5"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div> */}
        </motion.div>
        {/* Desktop Navigation */}
        <motion.nav
          ref={navRef}
          variants={itemVariants}
          className="hidden md:flex items-center gap-8 bg-white/60 dark:bg-white/5 backdrop-blur-xl px-8 py-3 rounded-full border border-slate-200/50 dark:border-white/10 shadow-lg shadow-slate-900/5"
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors py-2 px-1"
              href={item.href}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onHoverStart={() => {
                gsap.to(`.nav-item-${index}`, {
                  scale: 1.1,
                  duration: 0.2,
                  ease: "power2.out"
                });
              }}
              onHoverEnd={() => {
                gsap.to(`.nav-item-${index}`, {
                  scale: 1,
                  duration: 0.2,
                  ease: "power2.out"
                });
              }}
            >
              <span className={`nav-item-${index}`}>{item.name}</span>
              
              {/* Hover effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary-light rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.nav>

        {/* Right Section */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-4"
        >
          {/* Theme Toggle */}
          <motion.button
            aria-label="Toggle Dark Mode"
            className="relative p-3 rounded-full bg-slate-200/80 dark:bg-white/10 text-slate-600 dark:text-slate-300  transition-colors backdrop-blur-sm border px-4 py-2 border-purple-500/20 text-sm hover:border-purple-500 "
            onClick={toggleDarkMode}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 4px 20px rgba(124, 58, 237, 0.2)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.i
                  key="sun"
                  className="ri-sun-line text-lg"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <motion.i
                  key="moon"
                  className="ri-moon-line text-lg"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          {/* CTA Button */}
          <motion.div ref={ctaRef}>
            <Button
              className="relative bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-semibold px-6 py-2.5 rounded-full transition-all shadow-lg shadow-primary/30 overflow-hidden group"
              onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(124, 58, 237, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Hire Me</span>
              
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Sparkle effect */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  x: [0, 20, 40],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            </Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden p-2 rounded-full bg-slate-200/80 dark:bg-white/10 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.i
                  key="close"
                  className="ri-close-line text-lg"
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                />
              ) : (
                <motion.i
                  key="menu"
                  className="ri-menu-line text-lg"
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: -90 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl border-b border-slate-200/20 dark:border-white/10 shadow-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors py-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;