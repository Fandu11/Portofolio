import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Carousel from '../Carousel';

// Import des images
import brico1 from '../../assets/images/bricolage/brico1.jpg';
import res1 from '../../assets/images/resolution/res1.jpg';
import res2 from '../../assets/images/resolution/res2.jpg';
import res3 from '../../assets/images/resolution/res3.jpg';
import res4 from '../../assets/images/resolution/res4.jpg';
import dec0 from '../../assets/images/decouverte/dec0.jpg';
import dec1 from '../../assets/images/decouverte/dec1.jpg';
import dec2 from '../../assets/images/decouverte/dec2.jpg';
import dec3 from '../../assets/images/decouverte/dec3.jpg';
import dec4 from '../../assets/images/decouverte/dec4.jpg';
import dec5 from '../../assets/images/decouverte/dec5.jpg';
import dec6 from '../../assets/images/decouverte/dec6.jpg';
import volley0 from '../../assets/images/volley/v0.jpg';
import volley1 from '../../assets/images/volley/v1.jpg';
import volley2 from '../../assets/images/volley/v2.jpg';
import volley3 from '../../assets/images/volley/v3.jpg';
import volley4 from '../../assets/images/volley/v4.jpg';
import volley6 from '../../assets/images/volley/v6.jpg';
import volley7 from '../../assets/images/volley/v7.jpg';
import volley8 from '../../assets/images/volley/v8.jpg';
import volley9 from '../../assets/images/volley/v9.jpg';
import volley10 from '../../assets/images/volley/v10.jpg';
import volley11 from '../../assets/images/volley/v11.jpg';
import volley12 from '../../assets/images/volley/v12.jpg';
import volley13 from '../../assets/images/volley/v13.jpg';
import basket1 from '../../assets/images/basket/basket1.png';
import basket2 from '../../assets/images/basket/basket2.png';
import rando1 from '../../assets/images/randonnee/rando1.jpg';
import rando2 from '../../assets/images/randonnee/rando2.jpg';
import rando3 from '../../assets/images/randonnee/rando3.jpg';
import rando4 from '../../assets/images/randonnee/rando4.jpg';
import rando5 from '../../assets/images/randonnee/rando5.jpg';
import rando6 from '../../assets/images/randonnee/rando6.jpg';
import rando7 from '../../assets/images/randonnee/rando7.jpg';
import rando8 from '../../assets/images/randonnee/rando8.jpg';
import rando9 from '../../assets/images/randonnee/rando9.jpg';
import rando10 from '../../assets/images/randonnee/rando10.jpg';
import rando11 from '../../assets/images/randonnee/rando11.jpg';
import rando12 from '../../assets/images/randonnee/rando12.jpg';
import rando13 from '../../assets/images/randonnee/rando13.jpg';

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
      'Volley-Ball': [volley0, volley1, volley2, volley3, volley4, volley6, volley7, volley8, volley9, volley10, volley11, volley12, volley13],
      'Volleyball': [volley0, volley1, volley2, volley3, volley4, volley6, volley7, volley8, volley9, volley10, volley11, volley12, volley13],
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
