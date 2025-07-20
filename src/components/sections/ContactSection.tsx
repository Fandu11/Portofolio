// src/components/ContactSection.tsx
import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [formValid, setFormValid] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [captchaValue, setCaptchaValue] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const generateCaptcha = () => {
    // Utiliser uniquement des caractères alphanumériques non ambigus
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    setCaptchaValue('');
    setFormValid(false);
    setMessageSent(false);
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log('Valeur du captcha saisie:', value);
    console.log('Valeur attendue:', captchaText);
    const isValid = value === captchaText;
    console.log('Captcha valide?', isValid);
    setCaptchaValue(value);
    setFormValid(isValid);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formValid) {
      console.log('Formulaire non valide');
      return;
    }

    setIsSending(true);
    
    try {
      const result = await emailjs.send(
        'service_vfa1plh',
        'template_5lpmk7e',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'hoareaufaniry@gmail.com'
        },
        'FO2ZCde4sddr5MKY-'
      );
      
      if (result.status === 200) {
        setMessageSent(true);
        setFormData({ name: '', email: '', message: '' });
        generateCaptcha();
      } else {
        console.error('Erreur lors de l\'envoi du message:', result.text);
        alert(t('contact.form.errorMessage'));
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      alert(t('contact.form.errorMessage'));
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    try {
      emailjs.init('FO2ZCde4sddr5MKY-');
      console.log('EmailJS initialisé avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'initialisation d\'EmailJS:', error);
    }
    generateCaptcha();
  }, [t]); // Ajout de t comme dépendance pour régénérer le captcha lors du changement de langue

  return (
    <section id="contact" className="bg-gray-900 py-16 px-4 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-500 mb-10">
          {t('contact.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-20">
          {/* Formulaire de contact */}
          <form onSubmit={handleSubmit} className="bg-neutral-900 rounded-xl p-6 space-y-4 shadow-md md:pr-8">
            <div>
              <label className="block text-sm font-medium text-gray-300">{t('contact.form.name')}</label>
              <input
                type="text"
                placeholder={t('contact.form.namePlaceholder')}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full mt-1 bg-black border border-gray-700 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">{t('contact.form.email')}</label>
              <input
                type="email"
                placeholder={t('contact.form.emailPlaceholder')}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full mt-1 bg-black border border-gray-700 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">{t('contact.form.message')}</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t('contact.form.messagePlaceholder')}
                className="w-full mt-1 bg-black border border-gray-700 text-white rounded-md p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex flex-col">
                <label className="text-sm text-gray-300">{t('contact.form.captchaLabel')}</label>
                <div className="flex items-center space-x-2">
                  <span className="text-indigo-500 text-2xl font-mono tracking-widest">{captchaText}</span>
                  <input
                    type="text"
                    value={captchaValue}
                    onChange={handleCaptchaChange}
                    className="w-32 bg-black border border-gray-700 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder={t('contact.form.captchaPlaceholder')}
                    aria-label={t('contact.form.captchaLabel')}
                  />
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-black border border-gray-700 text-gray-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 ease-in-out"
                    aria-label={t('contact.form.captchaRegenerate')}
                    title={t('contact.form.captchaRegenerate')}
                  >
                    <span className="text-lg">🔁</span>
                  </button>
                </div>
              </div>
              {captchaValue && !formValid && (
                <p className="text-red-500 text-sm">{t('contact.form.captchaIncorrect')}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={!formValid || isSending}
              className={`w-full py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center ${
                formValid && !isSending
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isSending ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t('contact.form.sending')}
                </>
              ) : (
                t('contact.form.sendButton')
              )}
            </button>
            {messageSent && (
              <p className="text-green-500 text-sm text-center mt-2">
                {t('contact.form.successMessage')}
              </p>
            )}
          </form>

          {/* Coordonnées */}
          <div className="space-y-6 text-gray-300 md:pl-8">
            <div className="flex items-center space-x-3">
              <Phone className="text-indigo-500" />
              <span>{t('contact.info.phone')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-indigo-500" />
              <a href={`mailto:${t('contact.info.email')}`} className="hover:underline text-indigo-400">
                {t('contact.info.email')}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Linkedin className="text-indigo-500" />
              <a
                href={t('contact.info.linkedinUrl')}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-indigo-400"
              >
                {t('contact.info.linkedin')}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-indigo-500" />
              <span>{t('contact.info.location')}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-12 text-center text-gray-400 text-sm space-y-1">
        <p>© {new Date().getFullYear()} Faniry Hoareau. {t('footer.copyright')}</p>
        <p>{t('footer.madeWith', { tech: 'React, Vite et Tailwind CSS' })}</p>
      </div>
    </section>
  );
};

export default ContactSection;
