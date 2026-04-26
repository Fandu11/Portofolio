// src/components/ProjetsSection.tsx
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Chemins des images (dans public/images/projet/)
const portfolioImg = '/images/projet/portofolio_v1.png';
const watermineImg = '/images/projet/watermine.png';
const aideEcoImg = '/images/projet/aide-eco.png';
const preteMoiImg = '/images/projet/prete_moi.png';
const champoloveImg = '/images/projet/Champolove.png';
const labyrintheImg = '/images/labyrinthe-led.png';
const batailleNavaleImg = '/images/projet/bataille-navale.png';

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const projetsData = t('projects.items', { returnObjects: true }) as Array<{
    titre: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
    imageKey: string;
    date: string;
  }>;

  // Mappage des clés d'images aux imports réels
  const imageMap: { [key: string]: string } = {
    'portfolio': portfolioImg,
    'watermine': watermineImg,
    'aide-eco': aideEcoImg,
    'prete-moi': preteMoiImg,
    'labyrinthe': labyrintheImg,
    'champolove': champoloveImg,
    'bataille-navale': batailleNavaleImg
  };

  // Fusion des données de traduction avec les chemins d'images
  const projets = projetsData.map(projet => ({
    ...projet,
    image: imageMap[projet.imageKey] || ''
  }));

  return (
    <section id="projects" className="py-16 px-4 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          {t('projects.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map((projet, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={projet.image} 
                  alt={projet.titre}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="text-xl font-bold text-white">{projet.titre}</h3>
                  <p className="text-sm text-gray-300">{projet.date}</p>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-300 mb-4 flex-1">{projet.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-indigo-900/50 text-indigo-200 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-auto pt-4">
                  {projet.github && (
                    <a 
                      href={projet.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                      aria-label={t('projects.viewCode')}
                    >
                      <Github className="w-5 h-5 mr-1" />
                      <span>{t('projects.viewCode')}</span>
                    </a>
                  )}
                  
                  {projet.demo && (
                    <a 
                      href={projet.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                      aria-label={t('projects.viewProject')}
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      <span>{t('projects.viewProject')}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
