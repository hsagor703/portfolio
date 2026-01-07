import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import AboutSection from "./components/AboutSection";
import LoadingPage from "./components/LoadingPage";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
    //for loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-body custom-bg-gradient min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-20 pt-24 py-10 space-y-24">
            <HeroSection />
            <AboutSection />
            <TechStack />
            <Services />
            <Portfolio />
            <Experience />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
