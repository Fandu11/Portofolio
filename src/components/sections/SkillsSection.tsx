// src/components/sections/SkillsSection.tsx
import React from 'react';
import { Server, Wrench, Star, Brain, BookOpen, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SkillsSection: React.FC = () => {
  const { t } = useTranslation();
  
  const competences = [
    {
      id: 'qualities',
      icon: <Star className="text-indigo-500 w-5 h-5" />,
    },
    {
      id: 'skills',
      icon: <Brain className="text-indigo-500 w-5 h-5" />,
    },
    {
      id: 'languages',
      icon: <BookOpen className="text-indigo-500 w-5 h-5" />,
    },
    {
      id: 'frontend',
      icon: <Terminal className="text-indigo-500 w-5 h-5" />,
    },
    {
      id: 'backend',
      icon: <Server className="text-indigo-500 w-5 h-5" />,
    },
    {
      id: 'tools',
      icon: <Wrench className="text-indigo-500 w-5 h-5" />,
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">{t('skills.title')}</h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{ willChange: 'opacity, transform' }}
        >
          {competences.map((competence, index) => {
            const category = t(`skills.categories.${competence.id}`) as string;
            const items = t(`skills.items.${competence.id}`, { returnObjects: true }) as string[];
            
            return (
              <motion.div
                key={competence.id}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  {competence.icon}
                  <h3 className="text-xl font-semibold text-white">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {items?.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
