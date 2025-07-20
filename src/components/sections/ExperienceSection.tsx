// src/components/ParcoursSection.tsx
import React from 'react';
import { GraduationCap, Briefcase, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();
  const timelineData = t('experience.items', { returnObjects: true }) as Array<{
    type: string;
    title: string;
    subtitle: string;
    date: string;
    description: string;
  }>;

  return (
    <section id="experience" className="bg-black py-20 px-4 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-20">
          {t('experience.title')}
        </h2>

        <div className="relative border-l-2 border-indigo-500 pl-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="mb-16 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {/* Point bleu */}
              <div className="absolute -left-[0.65rem] top-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white shadow-lg" />

              {/* Contenu */}
              <div className="bg-neutral-900 rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-indigo-500/20 rounded-lg">
                    {item.type === "experience" && index === 0 ? (
                      <Trophy className="text-indigo-500 w-5 h-5" />
                    ) : item.type === "education" ? (
                      <GraduationCap className="text-indigo-500 w-5 h-5" />
                    ) : (
                      <Briefcase className="text-indigo-500 w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-indigo-300">{item.subtitle}</p>
                  </div>
                  <div className="ml-auto bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">
                    {item.date}
                  </div>
                </div>
                <p className="text-gray-300 whitespace-pre-line">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
