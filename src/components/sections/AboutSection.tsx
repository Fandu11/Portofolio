import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProtectedImage from '../common/ProtectedImage';
import pdp1 from '../../assets/images/pdp.png';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {t('about.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image de profil */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="relative space-y-6"
          >
            <div className="relative w-full aspect-square">
              <ProtectedImage
                src={pdp1} 
                alt={t('about.profilePhotoAlt')}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 rounded-2xl" />
            </div>

            {/* Infos personnelles */}
            <div className="bg-gray-800 rounded-xl p-4 shadow-lg text-gray-300 space-y-2 text-sm">
              <p><span className="font-semibold text-white">{t('about.age')} :</span> 22 {t('about.years')}</p>
              <p><span className="font-semibold text-white">{t('about.location')} :</span> {t('about.city')}</p>
              <p><span className="font-semibold text-white">{t('about.status')} :</span> {t('about.education')}</p>
              <p><span className="font-semibold text-white">{t('about.languages')} :</span> {t('about.languageList')}</p>
            </div>
          </motion.div>


          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('about.paragraph1')}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('about.paragraph2')}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('about.paragraph3')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
