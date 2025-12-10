import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Plane,
  Briefcase,
  Users,
  ArrowRight,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Countries() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'canada' | 'europe'>('canada');

  const tabs = [
    { id: 'canada' as const, label: 'Canada', flag: '🇨🇦' },
    { id: 'europe' as const, label: language === 'fr' ? 'France / Europe' : 'France / Europe', flag: '🇫🇷' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'fr' ? 'Pays & Programmes' : 'Countries & Programs'}
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl leading-relaxed">
            {language === 'fr'
              ? 'Découvrez les différents programmes disponibles selon votre projet et pays visé.'
              : 'Discover the different programs available according to your project and target country.'}
          </p>
        </div>
      </section>

      <section className="py-12 border-b border-gray-200 bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-2xl">{tab.flag}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeTab === 'canada' && (
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {language === 'fr' ? 'Étudier au Canada' : 'Study in Canada'}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="leading-relaxed mb-4">
                    {language === 'fr'
                      ? 'Pour obtenir un permis d\'études au Canada, vous devez d\'abord être admis dans un établissement d\'enseignement désigné (EED). Nous vous accompagnons dans la préparation complète de votre dossier.'
                      : 'To obtain a study permit in Canada, you must first be admitted to a designated learning institution (DLI). We support you in the complete preparation of your file.'}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                    {language === 'fr' ? 'Critères principaux' : 'Main criteria'}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3"></div>
                      <span>
                        {language === 'fr'
                          ? 'Lettre d\'admission d\'un EED canadien'
                          : 'Letter of admission from a Canadian DLI'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3"></div>
                      <span>
                        {language === 'fr'
                          ? 'Preuve de fonds suffisants (frais de scolarité + subsistance)'
                          : 'Proof of sufficient funds (tuition + living expenses)'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3"></div>
                      <span>
                        {language === 'fr'
                          ? 'Lettre d\'explication claire du projet d\'études'
                          : 'Clear explanation letter of study project'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3"></div>
                      <span>
                        {language === 'fr'
                          ? 'Liens avec le pays d\'origine'
                          : 'Ties to country of origin'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3"></div>
                      <span>
                        {language === 'fr'
                          ? 'Certificat d\'acceptation du Québec (CAQ) si applicable'
                          : 'Quebec Acceptance Certificate (CAQ) if applicable'}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-primary-50 rounded-xl p-6 sticky top-36">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {language === 'fr' ? 'Préparer mon dossier d\'études' : 'Prepare my study file'}
                  </h3>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    {language === 'fr' ? 'Commencer' : 'Start'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <a
                    href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full inline-flex items-center justify-center text-primary-700 hover:text-primary-800 font-medium text-sm"
                  >
                    {language === 'fr' ? 'Site officiel IRCC' : 'Official IRCC site'}
                    <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {language === 'fr' ? 'Visa visiteur / Tourisme' : 'Visitor visa / Tourism'}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="leading-relaxed mb-4">
                    {language === 'fr'
                      ? 'Le visa de visiteur permet de séjourner au Canada pour le tourisme, des visites familiales ou des voyages d\'affaires. Nous vous aidons à préparer un dossier solide.'
                      : 'A visitor visa allows you to stay in Canada for tourism, family visits or business trips. We help you prepare a strong file.'}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                    {language === 'fr' ? 'Éléments essentiels' : 'Essential elements'}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3"></div>
                      <span>
                        {language === 'fr'
                          ? 'But du séjour clairement défini'
                          : 'Clearly defined purpose of stay'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3"></div>
                      <span>
                        {language === 'fr'
                          ? 'Preuve de fonds suffisants pour le séjour'
                          : 'Proof of sufficient funds for stay'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3"></div>
                      <span>
                        {language === 'fr'
                          ? 'Liens solides avec le Cameroun (emploi, famille, propriété)'
                          : 'Strong ties to Cameroon (employment, family, property)'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3"></div>
                      <span>
                        {language === 'fr'
                          ? 'Lettre d\'invitation si visite familiale'
                          : 'Invitation letter if family visit'}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-accent-50 rounded-xl p-6 sticky top-36">
                  <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-4">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {language === 'fr' ? 'Simuler ma demande' : 'Simulate my application'}
                  </h3>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    {language === 'fr' ? 'Commencer' : 'Start'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {language === 'fr' ? 'Travailleur qualifié' : 'Skilled worker'}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="leading-relaxed mb-4">
                    {language === 'fr'
                      ? 'Le Programme fédéral des travailleurs qualifiés utilise un système de points basé sur plusieurs critères. Nous vous aidons à comprendre les grandes lignes, mais seule l\'évaluation gouvernementale est déterminante.'
                      : 'The Federal Skilled Worker Program uses a points system based on several criteria. We help you understand the main points, but only the government assessment is decisive.'}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                    {language === 'fr' ? 'Critères évalués' : 'Assessed criteria'}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3"></div>
                      <span>
                        {language === 'fr'
                          ? 'Âge (maximum de points entre 20-29 ans)'
                          : 'Age (maximum points between 20-29 years)'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3"></div>
                      <span>
                        {language === 'fr'
                          ? 'Niveau d\'études (diplômes reconnus)'
                          : 'Education level (recognized degrees)'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3"></div>
                      <span>
                        {language === 'fr'
                          ? 'Expérience professionnelle qualifiée'
                          : 'Skilled work experience'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3"></div>
                      <span>
                        {language === 'fr'
                          ? 'Compétences linguistiques (français et/ou anglais)'
                          : 'Language skills (French and/or English)'}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-secondary-50 rounded-xl p-6 sticky top-36">
                  <div className="w-12 h-12 bg-secondary-600 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {language === 'fr' ? 'Vérifier mon admissibilité' : 'Check my eligibility'}
                  </h3>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    {language === 'fr' ? 'Commencer' : 'Start'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {language === 'fr' ? 'Avertissement important' : 'Important notice'}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {language === 'fr'
                      ? 'Ce site n\'est pas un site gouvernemental. Les informations proviennent de sources officielles (sites gouvernementaux) mais peuvent changer. Il faut toujours vérifier sur les portails officiels comme Canada.ca pour les informations les plus récentes.'
                      : 'This site is not a government site. Information comes from official sources (government sites) but may change. Always verify on official portals like Canada.ca for the most recent information.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'europe' && (
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'France et Europe' : 'France and Europe'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {language === 'fr'
                  ? 'Nous offrons également un accompagnement pour les demandes vers la France et d\'autres pays européens.'
                  : 'We also offer support for applications to France and other European countries.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {language === 'fr' ? 'Études en France' : 'Studies in France'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'fr'
                    ? 'Accompagnement pour visa étudiant français.'
                    : 'Support for French student visa.'}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center mb-4">
                  <Plane className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {language === 'fr' ? 'Visa Schengen' : 'Schengen visa'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'fr'
                    ? 'Préparation pour visa court séjour Schengen.'
                    : 'Preparation for short-stay Schengen visa.'}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary-100 text-secondary-600 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {language === 'fr' ? 'Visa de travail' : 'Work visa'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'fr'
                    ? 'Support pour demandes de permis de travail.'
                    : 'Support for work permit applications.'}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {language === 'fr' ? 'Regroupement familial' : 'Family reunification'}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'fr'
                    ? 'Orientation pour regroupement familial.'
                    : 'Guidance for family reunification.'}
                </p>
              </div>
            </div>

            <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Besoin d\'informations ?' : 'Need information?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'fr'
                  ? 'Contactez-nous pour discuter de votre projet vers l\'Europe.'
                  : 'Contact us to discuss your project to Europe.'}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {language === 'fr' ? 'Nous contacter' : 'Contact us'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
