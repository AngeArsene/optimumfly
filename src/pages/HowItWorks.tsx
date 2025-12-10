import { Link } from 'react-router-dom';
import {
  FileText,
  Video,
  Search,
  FileCheck,
  Send,
  Bell,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function HowItWorks() {
  const { language } = useLanguage();

  const workflow = [
    {
      step: 1,
      icon: FileText,
      title: language === 'fr' ? 'Première prise de contact' : 'First contact',
      description:
        language === 'fr'
          ? 'Remplissez notre formulaire en ligne avec vos informations de base : pays visé, type de projet, situation familiale, budget.'
          : 'Fill out our online form with your basic information: target country, project type, family situation, budget.',
      features: [
        language === 'fr' ? 'Formulaire rapide et sécurisé' : 'Fast and secure form',
        language === 'fr' ? 'Évaluation initiale gratuite' : 'Free initial assessment',
        language === 'fr' ? 'Réponse sous 24h ouvrées' : 'Response within 24 business hours',
      ],
    },
    {
      step: 2,
      icon: Video,
      title: language === 'fr' ? 'Consultation' : 'Consultation',
      description:
        language === 'fr'
          ? 'Réservez un rendez-vous en présentiel dans nos bureaux ou en ligne par vidéo pour discuter de votre projet en détail.'
          : 'Book an in-person appointment at our offices or online by video to discuss your project in detail.',
      features: [
        language === 'fr' ? 'Bureau à Douala et Yaoundé' : 'Office in Douala and Yaoundé',
        language === 'fr' ? 'Consultation vidéo disponible' : 'Video consultation available',
        language === 'fr' ? 'Agenda en ligne intégré' : 'Integrated online calendar',
      ],
    },
    {
      step: 3,
      icon: Search,
      title: language === 'fr' ? 'Analyse du profil' : 'Profile analysis',
      description:
        language === 'fr'
          ? 'Nous analysons votre profil selon les critères publiquement accessibles du pays visé et vous proposons la meilleure stratégie.'
          : 'We analyze your profile according to publicly accessible criteria of the target country and propose the best strategy.',
      features: [
        language === 'fr' ? 'Vérification des critères' : 'Criteria verification',
        language === 'fr' ? 'Recommandations personnalisées' : 'Personalized recommendations',
        language === 'fr' ? 'Plan d\'action clair' : 'Clear action plan',
      ],
    },
    {
      step: 4,
      icon: FileCheck,
      title: language === 'fr' ? 'Préparation des documents' : 'Document preparation',
      description:
        language === 'fr'
          ? 'Accédez à votre tableau de bord personnel avec checklist complète. Nous vérifions chaque document avant soumission.'
          : 'Access your personal dashboard with complete checklist. We verify each document before submission.',
      features: [
        language === 'fr' ? 'Tableau de bord client' : 'Client dashboard',
        language === 'fr' ? 'Checklist détaillée' : 'Detailed checklist',
        language === 'fr' ? 'Suivi en temps réel' : 'Real-time tracking',
      ],
    },
    {
      step: 5,
      icon: Send,
      title: language === 'fr' ? 'Vérification et dépôt' : 'Verification and submission',
      description:
        language === 'fr'
          ? 'Vérification finale de cohérence et complétude. Guidance pour la soumission sur les portails officiels.'
          : 'Final consistency and completeness check. Guidance for submission on official portals.',
      features: [
        language === 'fr' ? 'Vérification complète' : 'Complete verification',
        language === 'fr' ? 'Support pour soumission' : 'Submission support',
        language === 'fr' ? 'Confirmation de dépôt' : 'Filing confirmation',
      ],
    },
    {
      step: 6,
      icon: Bell,
      title: language === 'fr' ? 'Suivi et support' : 'Follow-up and support',
      description:
        language === 'fr'
          ? 'Suivi des notifications, conseils pour visite médicale, biométrie et préparation au départ.'
          : 'Notification tracking, advice for medical visit, biometrics and departure preparation.',
      features: [
        language === 'fr' ? 'Suivi des mises à jour' : 'Update tracking',
        language === 'fr' ? 'Support continu' : 'Continuous support',
        language === 'fr' ? 'Préparation au voyage' : 'Travel preparation',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'fr' ? 'Comment ça marche' : 'How it works'}
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl leading-relaxed">
            {language === 'fr'
              ? 'Notre processus en 6 étapes pour vous accompagner du début à la fin de votre projet de visa ou immigration.'
              : 'Our 6-step process to support you from start to finish of your visa or immigration project.'}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {workflow.map((item, index) => (
              <div
                key={item.step}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center space-x-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-gray-200">
                      {item.step.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <ul className="space-y-3">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-secondary-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl transform rotate-3"></div>
                    <div className="relative bg-white rounded-2xl shadow-xl p-8">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                        <item.icon className="w-16 h-16 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'fr' ? 'Prêt à commencer votre projet ?' : 'Ready to start your project?'}
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            {language === 'fr'
              ? 'Contactez-nous dès aujourd\'hui pour une évaluation gratuite de votre dossier.'
              : 'Contact us today for a free evaluation of your file.'}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {language === 'fr' ? 'Démarrer maintenant' : 'Start now'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
