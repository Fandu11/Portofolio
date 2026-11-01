import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Carousel from '../Carousel';

// Import des images
import brico1 from '../../assets/images/bricolage/brico1.webp';
import res1 from '../../assets/images/resolution/res1.webp';
import res2 from '../../assets/images/resolution/res2.webp';
import res3 from '../../assets/images/resolution/res3.webp';
import res4 from '../../assets/images/resolution/res4.webp';
import dec0 from '../../assets/images/decouverte/dec0.webp';
import dec1 from '../../assets/images/decouverte/dec1.webp';
import dec2 from '../../assets/images/decouverte/dec2.webp';
import dec3 from '../../assets/images/decouverte/dec3.webp';
import dec4 from '../../assets/images/decouverte/dec4.webp';
import dec5 from '../../assets/images/decouverte/dec5.webp';
import dec6 from '../../assets/images/decouverte/dec6.webp';
import volley0 from '../../assets/images/volley/v0.webp';
/*import volley1 from '../../assets/images/volley/v1.webp';
import volley2 from '../../assets/images/volley/v2.webp';
import volley3 from '../../assets/images/volley/v3.webp';
import volley4 from '../../assets/images/volley/v4.webp'; */
import volley6 from '../../assets/images/volley/v6.webp';
import volley7 from '../../assets/images/volley/v7.webp';
import volley8 from '../../assets/images/volley/v8.webp';
import volley9 from '../../assets/images/volley/v9.webp';
import volley10 from '../../assets/images/volley/v10.webp';
import volley11 from '../../assets/images/volley/v11.webp';
import volley12 from '../../assets/images/volley/v12.webp';
import volley13 from '../../assets/images/volley/v13.webp';
import basket1 from '../../assets/images/basket/basket1.webp';
import basket2 from '../../assets/images/basket/basket2.webp';
import rando1 from '../../assets/images/randonnee/rando1.webp';
import rando2 from '../../assets/images/randonnee/rando2.webp';
import rando3 from '../../assets/images/randonnee/rando3.webp';
import rando4 from '../../assets/images/randonnee/rando4.webp';
import rando5 from '../../assets/images/randonnee/rando5.webp';
import rando6 from '../../assets/images/randonnee/rando6.webp';
import rando7 from '../../assets/images/randonnee/rando7.webp';
import rando8 from '../../assets/images/randonnee/rando8.webp';
import rando9 from '../../assets/images/randonnee/rando9.webp';
import rando10 from '../../assets/images/randonnee/rando10.webp';
import rando11 from '../../assets/images/randonnee/rando11.webp';
import rando12 from '../../assets/images/randonnee/rando12.webp';
import rando13 from '../../assets/images/randonnee/rando13.webp';

const PassionsSection: React.FC = () => {
  const { t } = useTranslation();
  const passions = t('passions.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    icon: string;
  }>;

  // Mappage des images par titre de passion
  const getPassionImages = (title: string): string[] => {
    const imageMap: { [key: string]: string[] } = {
      'Bricolage': [brico1],
      'DIY & Handicrafts': [brico1],
      'Asa Tanana sy Fanamboarana': [brico1],
      'Résolution de Problèmes': [res1, res2, res3, res4],
      'Problem Solving': [res1, res2, res3, res4],
      'Fahavahaovana sy Vahaolana': [res1, res2, res3, res4],
      'Découverte de Nouvelles Choses': [dec1, dec0, dec2, dec3, dec4, dec5, dec6],
      'Discovering New Things': [dec1, dec0, dec2, dec3, dec4, dec5, dec6],
      'Fikarohana Zavavao': [dec1, dec0, dec2, dec3, dec4, dec5, dec6],

      /* 'Volley-Ball': [volley0, volley1, volley2, volley3, volley4, volley6, volley7, volley8, volley9, volley10, volley11, volley12, volley13],
      'Volleyball': [volley0, volley1, volley2, volley3, volley4, volley6, volley7, volley8, volley9, volley10, volley11, volley12, volley13],
      */
      'Volley-Ball': [volley0, volley6, volley7, volley8, volley9, volley10, volley11, volley12, volley13],
      'Volleyball': [volley0,  volley6, volley7, volley8, volley9, volley10, volley11, volley12, volley13],
      'Basket-Ball': [basket1, basket2],
      'Basketball': [basket1, basket2],
      'Randonnée': [rando1, rando2, rando3, rando4, rando5, rando6, rando7, rando8, rando9, rando10, rando11, rando12, rando13],
      'Hiking': [rando1, rando2, rando3, rando4, rando5, rando6, rando7, rando8, rando9, rando10, rando11, rando12, rando13],
      'Fitsangatsanganana': [rando1, rando2, rando3, rando4, rando5, rando6, rando7, rando8, rando9, rando10, rando11, rando12, rando13]
    };
    
    return imageMap[title] || [];
  };

  return (
    <section id="passions" className="py-20">
      <div className="w-full px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          {t('passions.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {passions.map((passion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-4xl text-indigo-500">{passion.icon}</span>
                <h3 className="text-xl font-semibold text-white">{passion.title}</h3>
              </div>
              <div className="mb-4">
                <Carousel images={getPassionImages(passion.title)} />
              </div>
              <p className="text-gray-300">{passion.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassionsSection;
