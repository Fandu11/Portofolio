import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <motion.div 
      id="home"
      initial={{ 
        opacity: 0, 
        scale: 0.8, 
        y: 50 
      }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0 
      }}
      transition={{ 
        duration: 2, 
        ease: "easeInOut", 
        delay: 0.5
      }}
      className="min-h-screen relative flex items-center justify-center text-center px-4 sm:px-6 lg:px-8"
    >
      <div className="hero-content text-white">
        <div className="terminal-prompt mb-5 text-left text-sm">
          <span className="terminal-dot" />
          <span>faniry@portfolio:~$ ./welcome.sh</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl sm:text-2xl mb-8">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8 text-xs sm:text-sm">
          <span className="hero-badge">{"<"} Java / JavaFX {"/>"}</span>
          <span className="hero-badge">{"<"} Python {"/>"}</span>
          <span className="hero-badge">{"<"} React / TypeScript {"/>"}</span>
          <span className="hero-badge">{"<"} Full Stack {"/>"}</span>
        </div>
        <a
          href="#contact"
          className="hero-cta inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
        >
          <span className="mr-2">$</span>
          {t('hero.cta')}
        </a>
      </div>
    </motion.div>
  );
};

export default HeroSection;
