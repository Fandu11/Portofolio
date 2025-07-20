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
      <div className="text-white">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl sm:text-2xl mb-8">
          {t('hero.subtitle')}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
        >
          {t('hero.cta')}
        </a>
      </div>
    </motion.div>
  );
};

export default HeroSection;
