import { Link } from 'react-router-dom';
import {
  Target,
  Users,
  Shield,
  Award,
  Heart,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { language } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: language === 'fr' ? 'Transparence' : 'Transparency',
      description:
        language === 'fr'
          ? 'Tarifs clairs, processus transparent, aucune fausse promesse.'
          : 'Clear pricing, transparent process, no false promises.',
    },
    {
      icon: Award,
      title: language === 'fr' ? 'Excellence' : 'Excellence',
      description:
        language === 'fr'
          ? 'Respect strict des exigences officielles et vérification méticuleuse.'
          : 'Strict adherence to official requirements and meticulous verification.',
    },
    {
      icon: Heart,
      title: language === 'fr' ? 'Accompagnement' : 'Support',
      description:
        language === 'fr'
          ? 'Écoute, disponibilité et support personnalisé tout au long du processus.'
          : 'Listening, availability and personalized support throughout the process.',
    },
  ];

  const team = [
    {
      name: 'Marie Kamga',
      role:
        language === 'fr'
          ? 'Conseillère principale'
          : 'Senior advisor',
      experience:
        language === 'fr'
          ? '8 ans d\'expérience en immigration canadienne'
          : '8 years of experience in Canadian immigration',
      image: 'https://images.pexels.com/photos/1576482/pexels-photo-1576482.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Jean-Paul Ndi',
      role:
        language === 'fr'
          ? 'Spécialiste visas étudiants'
          : 'Student visa specialist',
      experience:
        language === 'fr'
          ? '6 ans d\'accompagnement d\'étudiants'
          : '6 years supporting students',
      image: 'https://images.pexels.com/photos/2033447/pexels-photo-2033447.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Françoise Mbida',
      role:
        language === 'fr'
          ? 'Coordinatrice administrative'
          : 'Administrative coordinator',
      experience:
        language === 'fr'
          ? '5 ans de gestion de dossiers'
          : '5 years of file management',
      image: 'https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Emmanuel Fon',
      role:
        language === 'fr'
          ? 'Conseiller travailleurs qualifiés'
          : 'Skilled worker advisor',
      experience:
        language === 'fr'
          ? '7 ans en programmes d\'immigration économique'
          : '7 years in economic immigration programs',
      image: 'https://images.pexels.com/photos/3664444/pexels-photo-3664444.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const commitments = [
    language === 'fr' ? 'Transparence des tarifs' : 'Transparent pricing',
    language === 'fr' ? 'Confidentialité des données' : 'Data confidentiality',
    language === 'fr'
      ? 'Respect strict des informations officielles'
      : 'Strict adherence to official information',
    language === 'fr'
      ? 'Aucune promesse de garantie d\'approbation'
      : 'No guarantee of approval promise',
    language === 'fr'
      ? 'Support continu jusqu\'à la décision'
      : 'Continuous support until decision',
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'fr' ? 'À propos de nous' : 'About us'}
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl leading-relaxed">
            {language === 'fr'
              ? 'Optimum Fly Votre partenaire de confiance pour l\'immigration et les documents de voyage depuis 2018.'
              : 'Optimum Fly Your trusted partner for immigration and travel documents since 2018.'}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2 mb-6">
                <Target className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700">
                  {language === 'fr' ? 'Notre mission' : 'Our mission'}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === 'fr'
                  ? 'Faciliter et sécuriser vos démarches d\'immigration'
                  : 'Facilitate and secure your immigration procedures'}
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="leading-relaxed mb-4">
                  {language === 'fr'
                    ? 'Nous accompagnons les résidents du Cameroun dans leurs projets d\'immigration, d\'études et de voyage. Notre équipe expérimentée vous guide à travers chaque étape du processus en vous aidant à préparer des dossiers complets et conformes aux exigences officielles.'
                    : 'We support Cameroon residents in their immigration, study and travel projects. Our experienced team guides you through each step of the process, helping you prepare complete files that comply with official requirements.'}
                </p>
                <p className="leading-relaxed">
                  {language === 'fr'
                    ? 'Nous croyons en la transparence totale : nous ne promettons jamais de résultats garantis car les décisions appartiennent exclusivement aux autorités gouvernementales. Notre rôle est de maximiser vos chances de succès en optimisant la qualité de votre dossier.'
                    : 'We believe in total transparency: we never promise guaranteed results because decisions belong exclusively to government authorities. Our role is to maximize your chances of success by optimizing the quality of your file.'}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6694919/pexels-photo-6694919.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2 mb-6">
              <Users className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">
                {language === 'fr' ? 'Notre équipe' : 'Our team'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'fr'
                ? 'Des professionnels à votre écoute'
                : 'Professionals at your service'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'fr' ? 'Nos engagements' : 'Our commitments'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-secondary-50 rounded-lg p-4"
              >
                <CheckCircle className="w-6 h-6 text-secondary-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{commitment}</span>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {language === 'fr' ? 'Encadré légal' : 'Legal notice'}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {language === 'fr'
                    ? 'Nous ne sommes pas une ambassade ni un service d\'immigration gouvernemental. Les décisions d\'acceptation ou de refus de visa appartiennent exclusivement aux autorités compétentes (IRCC, ambassades, consulats). Notre service consiste à vous accompagner dans la préparation administrative de votre dossier.'
                    : 'We are not an embassy or government immigration service. Visa acceptance or refusal decisions belong exclusively to the competent authorities (IRCC, embassies, consulates). Our service consists of supporting you in the administrative preparation of your file.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'fr'
              ? 'Prêt à démarrer votre projet ?'
              : 'Ready to start your project?'}
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            {language === 'fr'
              ? 'Contactez-nous pour une évaluation gratuite et découvrez comment nous pouvons vous aider.'
              : 'Contact us for a free evaluation and discover how we can help you.'}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {language === 'fr' ? 'Nous contacter' : 'Contact us'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
