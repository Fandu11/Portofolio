// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Download, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ProtectedImage from './common/ProtectedImage';
import pdp1 from '../assets/images/pdp1.jpg';


const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLanguageChange = async (lng: string) => {
    setIsChangingLanguage(true);
    try {
      await i18n.changeLanguage(lng);
      localStorage.setItem('i18nextLng', lng);
    } catch (error) {
      console.error('Error changing language:', error);
    } finally {
      setIsChangingLanguage(false);
      setIsLanguageMenuOpen(false);
    }
  };

  useEffect(() => {
    // Fermer le menu de langue quand on clique ailleurs
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-selector')) {
        setIsLanguageMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const links = [
    { name: t('navbar.home'), to: 'home' },
    { name: t('navbar.about'), to: 'about' },
    { name: t('navbar.skills'), to: 'skills' },
    { name: t('navbar.experience'), to: 'experience' },
    { name: t('navbar.passions'), to: 'passions' },
    { name: t('navbar.projects'), to: 'projects' },
    { name: t('navbar.contact'), to: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800/50 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <ProtectedImage 
            src={pdp1} 
            alt="Photo de profil" 
            className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
          />
          <a href="#" className="text-2xl font-bold text-indigo-600 hover:text-indigo-500 transition-colors duration-300">
            HFaniry
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-1">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  className="text-white hover:text-indigo-500 transition-colors duration-300 px-3 py-2 rounded-md hover:bg-white/10"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Selector */}
          <div className="relative language-selector">
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="flex items-center space-x-1 text-black hover:text-indigo-500 transition-colors duration-300 px-3 py-2 rounded-md hover:bg-white/10"
              aria-label="Change language"
            >
              <Globe size={18} />
              <span className="text-sm">{i18n.language?.toUpperCase?.() || 'FR'}</span>
            </button>
            
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                <p className="px-4 py-2 text-sm text-gray-300 border-b border-gray-700">
                  {t('language.switch')}
                </p>
                {isChangingLanguage ? (
                  <div className="px-4 py-2 text-sm text-center text-gray-400">
                    {t('loading')}
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => handleLanguageChange('fr')}
                      className={`block w-full text-left px-4 py-2 text-sm ${i18n.language?.startsWith('fr') ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                    >
                      {t('language.fr')}
                    </button>
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`block w-full text-left px-4 py-2 text-sm ${i18n.language?.startsWith('en') ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                    >
                      {t('language.en')}
                    </button>
                    <button
                      onClick={() => handleLanguageChange('mg')}
                      className={`block w-full text-left px-4 py-2 text-sm ${i18n.language?.startsWith('mg') ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                    >
                      {t('language.mg')}
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          <li>
            <a 
              href="fichiers/CV_Job.pdf" 
              download="cv.pdf" 
              className="text-white hover:text-indigo-500 transition-colors duration-300 px-3 py-2 rounded-md hover:bg-white/10"
            >
              <Download className="w-4 h-4 mr-2 inline-block align-middle" />
              CV
            </a>
          </li>
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          {/* Mobile Language Selector */}
          <div className="relative language-selector">
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="text-white hover:text-indigo-500 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
              aria-label="Change language"
            >
              <Globe size={20} />
            </button>
            
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                <p className="px-4 py-2 text-sm text-gray-300 border-b border-gray-700">
                  {t('language.switch')}
                </p>
                {isChangingLanguage ? (
                  <div className="px-4 py-2 text-sm text-center text-gray-400">
                    {t('loading')}
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => handleLanguageChange('fr')}
                      className={`block w-full text-left px-4 py-2 text-sm ${i18n.language?.startsWith('fr') ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                    >
                      {t('language.fr')}
                    </button>
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`block w-full text-left px-4 py-2 text-sm ${i18n.language?.startsWith('en') ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                    >
                      {t('language.en')}
                    </button>
                    <button
                      onClick={() => handleLanguageChange('mg')}
                      className={`block w-full text-left px-4 py-2 text-sm ${i18n.language?.startsWith('mg') ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                    >
                      {t('language.mg')}
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="text-white hover:text-indigo-500 focus:outline-none p-2 rounded-full hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-neutral-900/30 backdrop-blur-md px-4 pb-4 space-y-4 shadow-lg">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                className="text-white hover:text-indigo-500 transition-colors duration-300 px-4 py-3 rounded-lg hover:bg-indigo-500/20 w-full text-center"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <a 
              href="/cv.pdf" 
              download="cv.pdf" 
              className="flex items-center justify-center px-4 py-3 rounded-lg text-white hover:bg-indigo-500/20 transition-colors duration-300 w-full"
              onClick={closeMenu}
            >
              <Download className="w-4 h-4 mr-2" />
              Télécharger CV
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
