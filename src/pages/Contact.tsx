import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { language, t } = useLanguage();
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const handleIframeLoad = () => {
    setIsIframeLoaded(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'fr' ? 'Contactez-nous' : 'Contact us'}
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl leading-relaxed">
            {language === 'fr'
              ? 'Commencez votre projet dès aujourd\'hui chez Optimum Fly. Remplissez le formulaire et recevez votre premier diagnostic sous 24h.'
              : 'Start your project today at Optimum Fly. Fill out the form and receive your first assessment within 24 business hours.'}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === 'fr'
                    ? 'Décrivez-nous votre projet'
                    : 'Describe your project'}
                </h2>

                {/* Loading indicator */}
                {!isIframeLoaded && (
                  <div className="flex items-center justify-center py-12">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">
                        {language === 'fr' ? 'Chargement du formulaire...' : 'Loading form...'}
                      </p>
                    </div>
                  </div>
                )}

                {/* Google Form Embed - Made responsive */}
                <div className={`relative w-full ${isIframeLoaded ? 'block' : 'hidden'}`}>
                  <div className="relative pb-[140%] md:pb-[70%] lg:pb-[90%]"> {/* Aspect ratio container */}
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSfHSqtVIz7McSNr6epLNOaf2SStGiT4pop2nQ1YBonIf7QXkg/viewform?embedded=true"
                      className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
                      onLoad={handleIframeLoad}
                    >
                      Loading…
                    </iframe>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    {language === 'fr'
                      ? 'Si le formulaire ne s\'affiche pas, '
                      : 'If the form doesn\'t appear, '}
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfHSqtVIz7McSNr6epLNOaf2SStGiT4pop2nQ1YBonIf7QXkg/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      {language === 'fr' ? 'cliquez ici' : 'click here'}
                    </a>
                  </p>
                </div>

                {/* Alternative: Direct link button */}
                <div className="mt-6 text-center">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfHSqtVIz7McSNr6epLNOaf2SStGiT4pop2nQ1YBonIf7QXkg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                  >
                    {language === 'fr'
                      ? 'Ouvrir le formulaire dans un nouvel onglet'
                      : 'Open form in new tab'}
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-primary-50 rounded-2xl p-8 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {language === 'fr' ? 'Coordonnées' : 'Contact information'}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Douala</h4>
                      <p className="text-gray-600 text-sm">
                        Nyalla, entrée école
                        <br />
                        2QMM+3C Douala, Cameroun
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">
                        <a href={`tel:${t('contact.phone_number')}`} className='hover:underline'>
                          {t('contact.phone_number')}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">
                        <a href={`mailto:${t('contact.email')}`} className='hover:underline'>
                          {t('contact.email')}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary-50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-secondary-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {language === 'fr' ? 'Horaires' : 'Hours'}
                  </h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      {language === 'fr' ? 'Lundi - Vendredi' : 'Monday - Friday'}
                    </span>
                    <span className="text-gray-900 font-medium">8:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      {language === 'fr' ? 'Samedi' : 'Saturday'}
                    </span>
                    <span className="text-gray-900 font-medium">9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      {language === 'fr' ? 'Dimanche' : 'Sunday'}
                    </span>
                    <span className="text-gray-900 font-medium">
                      {language === 'fr' ? 'Fermé' : 'Closed'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Additional Info Box */}
              <div className="mt-6 bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">
                  {language === 'fr' ? 'À propos du formulaire' : 'About the form'}
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    {language === 'fr' 
                      ? 'Formulaire Google sécurisé' 
                      : 'Secure Google Form'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    {language === 'fr'
                      ? 'Réponse garantie sous 24h'
                      : 'Guaranteed response within 24h'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    {language === 'fr'
                      ? 'Données confidentielles'
                      : 'Confidential data'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            {language === 'fr'
              ? 'Vous préférez WhatsApp ? Cliquez ici pour nous contacter directement.'
              : 'Prefer WhatsApp? Click here to contact us directly.'}
          </p>
          <a
            href={t('hero.ctaSecondaryLink')}
            className="inline-flex items-center mt-4 text-secondary-600 hover:text-secondary-700 font-semibold"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            {language === 'fr' ? 'Ouvrir WhatsApp' : 'Open WhatsApp'}
          </a>
        </div>
      </section>
    </div>
  );
}