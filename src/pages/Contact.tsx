import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    phone: '',
    email: '',
    projectType: '',
    targetCountry: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        city: '',
        phone: '',
        email: '',
        projectType: '',
        targetCountry: '',
        description: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const projectTypes = [
    { value: '', label: language === 'fr' ? 'Sélectionnez un type' : 'Select a type' },
    {
      value: 'student',
      label: language === 'fr' ? 'Visa étudiant' : 'Student visa',
    },
    {
      value: 'visitor',
      label: language === 'fr' ? 'Visa visiteur/tourisme' : 'Visitor/tourism visa',
    },
    {
      value: 'worker',
      label: language === 'fr' ? 'Travailleur qualifié' : 'Skilled worker',
    },
    {
      value: 'family',
      label: language === 'fr' ? 'Regroupement familial' : 'Family reunification',
    },
    {
      value: 'passport',
      label: language === 'fr' ? 'Passeport camerounais' : 'Cameroonian passport',
    },
    { value: 'other', label: language === 'fr' ? 'Autre' : 'Other' },
  ];

  const countries = [
    { value: '', label: language === 'fr' ? 'Sélectionnez un pays' : 'Select a country' },
    { value: 'canada', label: 'Canada' },
    { value: 'france', label: 'France' },
    { value: 'uk', label: language === 'fr' ? 'Royaume-Uni' : 'United Kingdom' },
    { value: 'usa', label: language === 'fr' ? 'États-Unis' : 'United States' },
    { value: 'other', label: language === 'fr' ? 'Autre' : 'Other' },
  ];

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
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === 'fr'
                    ? 'Décrivez-nous votre projet'
                    : 'Describe your project'}
                </h2>

                {submitted ? (
                  <div className="bg-secondary-50 border border-secondary-200 rounded-xl p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4">
                      <CheckCircle className="w-8 h-8 text-secondary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {language === 'fr' ? 'Message envoyé !' : 'Message sent!'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'fr'
                        ? 'Nous vous répondrons dans les 24h ouvrées.'
                        : 'We will respond within 24 business hours.'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          {language === 'fr' ? 'Prénom' : 'First name'} *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          {language === 'fr' ? 'Nom' : 'Last name'} *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {language === 'fr' ? 'Ville au Cameroun' : 'City in Cameroon'} *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          WhatsApp / {language === 'fr' ? 'Téléphone' : 'Phone'} *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          {language === 'fr' ? 'Type de projet' : 'Project type'} *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        >
                          {projectTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          {language === 'fr' ? 'Pays visé' : 'Target country'} *
                        </label>
                        <select
                          name="targetCountry"
                          value={formData.targetCountry}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        >
                          {countries.map((country) => (
                            <option key={country.value} value={country.value}>
                              {country.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {language === 'fr'
                          ? 'Décrivez votre projet'
                          : 'Describe your project'}{' '}
                        *
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      {language === 'fr'
                        ? 'Envoyer & recevoir mon diagnostic'
                        : 'Send & receive my assessment'}
                    </button>

                    <p className="text-sm text-gray-600 text-center">
                      {language === 'fr'
                        ? 'Réponse sous 24h ouvrées'
                        : 'Response within 24 business hours'}
                    </p>
                  </form>
                )}
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
