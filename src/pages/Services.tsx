import { Link } from 'react-router-dom';
import {
  FileCheck,
  Plane,
  GraduationCap,
  Briefcase,
  Languages,
  CheckCircle,
  XCircle,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Services() {
  const { language } = useLanguage();

  const services = [
    {
      id: 'passport',
      icon: FileCheck,
      title: language === 'fr' ? 'Passeport camerounais' : 'Cameroonian passport',
      description:
        language === 'fr'
          ? 'Nous vous aidons à comprendre les pièces, formulaires, rendez-vous et à préparer le dossier pour les services consulaires ou compétents.'
          : 'We help you understand the documents, forms, appointments and prepare the file for consular or competent services.',
      whatWeDo: language === 'fr' ? 'Ce que nous faisons' : 'What we do',
      doList: [
        language === 'fr' ? 'Explication des pièces requises' : 'Explanation of required documents',
        language === 'fr' ? 'Aide au remplissage des formulaires' : 'Help filling out forms',
        language === 'fr' ? 'Organisation des rendez-vous' : 'Appointment scheduling',
        language === 'fr' ? 'Vérification de complétude du dossier' : 'File completeness verification',
      ],
      whatWeDont: language === 'fr' ? 'Ce que nous ne faisons pas' : 'What we do not do',
      dontList: [
        language === 'fr'
          ? 'Nous ne délivrons pas de passeport'
          : 'We do not issue passports',
        language === 'fr'
          ? 'Nous ne garantissons pas les délais administratifs'
          : 'We do not guarantee administrative deadlines',
      ],
    },
    {
      id: 'visitors',
      icon: Plane,
      title: language === 'fr' ? 'Visas visiteur / tourisme' : 'Visitor / tourism visas',
      description:
        language === 'fr'
          ? 'Assistance pour préparer les demandes de visa de visiteur en respectant les exigences des sites officiels.'
          : 'Assistance in preparing visitor visa applications in accordance with official site requirements.',
      whatWeDo: language === 'fr' ? 'Ce que nous faisons' : 'What we do',
      doList: [
        language === 'fr' ? 'Préparation des formulaires officiels' : 'Preparation of official forms',
        language === 'fr' ? 'Aide aux preuves de fonds' : 'Help with proof of funds',
        language === 'fr' ? 'Préparation de l\'itinéraire' : 'Itinerary preparation',
        language === 'fr' ? 'Lettres d\'invitation et liens avec le pays' : 'Invitation letters and ties to country',
      ],
      whatWeDont: language === 'fr' ? 'Ce que nous ne faisons pas' : 'What we do not do',
      dontList: [
        language === 'fr'
          ? 'Nous ne promettons pas une approbation automatique'
          : 'We do not promise automatic approval',
        language === 'fr'
          ? 'La décision finale appartient aux autorités'
          : 'The final decision belongs to the authorities',
      ],
    },
    {
      id: 'students',
      icon: GraduationCap,
      title: language === 'fr' ? 'Visas d\'études' : 'Study visas',
      description:
        language === 'fr'
          ? 'Accompagnement complet pour permis d\'études : admission, preuves financières, lettres d\'explication, selon les exigences officielles.'
          : 'Complete support for study permits: admission, financial proof, explanation letters, according to official requirements.',
      whatWeDo: language === 'fr' ? 'Ce que nous faisons' : 'What we do',
      doList: [
        language === 'fr' ? 'Aide au choix du programme et institution' : 'Help choosing program and institution',
        language === 'fr' ? 'Préparation des preuves financières' : 'Preparation of financial proof',
        language === 'fr' ? 'Lettres d\'explication et motivation' : 'Explanation and motivation letters',
        language === 'fr' ? 'Vérification selon critères IRCC/officiels' : 'Verification according to IRCC/official criteria',
      ],
      whatWeDont: language === 'fr' ? 'Ce que nous ne faisons pas' : 'What we do not do',
      dontList: [
        language === 'fr'
          ? 'Nous ne garantissons pas l\'admission'
          : 'We do not guarantee admission',
        language === 'fr'
          ? 'Les décisions sont prises par les autorités'
          : 'Decisions are made by authorities',
      ],
    },
    {
      id: 'workers',
      icon: Briefcase,
      title: language === 'fr' ? 'Travailleurs qualifiés' : 'Skilled workers',
      description:
        language === 'fr'
          ? 'Orientation sur les critères des programmes de travailleurs qualifiés, sans remplacer un consultant autorisé.'
          : 'Guidance on skilled worker program criteria, without replacing an authorized consultant.',
      whatWeDo: language === 'fr' ? 'Ce que nous faisons' : 'What we do',
      doList: [
        language === 'fr' ? 'Explication des critères de base' : 'Explanation of basic criteria',
        language === 'fr' ? 'Évaluation préliminaire du profil' : 'Preliminary profile assessment',
        language === 'fr' ? 'Aide à la documentation' : 'Documentation assistance',
        language === 'fr' ? 'Référence vers consultants autorisés' : 'Referral to authorized consultants',
      ],
      whatWeDont: language === 'fr' ? 'Ce que nous ne faisons pas' : 'What we do not do',
      dontList: [
        language === 'fr'
          ? 'Nous ne remplaçons pas un consultant réglementé'
          : 'We do not replace a regulated consultant',
        language === 'fr'
          ? 'Nous ne garantissons pas l\'immigration'
          : 'We do not guarantee immigration',
      ],
    },
    {
      id: 'family',
      icon: Languages,
      title: language === 'fr' ? 'Traduction et légalisation' : 'Translation and legalization',
      description:
        language === 'fr'
          ? 'Organisation de traductions certifiées et guidance pour authentification et légalisation des documents.'
          : 'Organization of certified translations and guidance for document authentication and legalization.',
      whatWeDo: language === 'fr' ? 'Ce que nous faisons' : 'What we do',
      doList: [
        language === 'fr' ? 'Organisation de traductions certifiées' : 'Organization of certified translations',
        language === 'fr' ? 'Guidance pour légalisation' : 'Guidance for legalization',
        language === 'fr' ? 'Vérification de conformité' : 'Compliance verification',
        language === 'fr' ? 'Coordination avec traducteurs agréés' : 'Coordination with approved translators',
      ],
      whatWeDont: language === 'fr' ? 'Ce que nous ne faisons pas' : 'What we do not do',
      dontList: [
        language === 'fr'
          ? 'Nous ne sommes pas traducteurs assermentés'
          : 'We are not sworn translators',
        language === 'fr'
          ? 'Nous ne légalisons pas les documents'
          : 'We do not legalize documents',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'fr' ? 'Nos services' : 'Our services'}
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl leading-relaxed">
            {language === 'fr'
              ? 'Accompagnement professionnel pour vos démarches de visa et immigration. Nous maximisons la qualité de votre dossier selon les exigences officielles.'
              : 'Professional support for your visa and immigration procedures. We maximize the quality of your file according to official requirements.'}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mb-6">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      {language === 'fr' ? 'Démarrer ce service' : 'Start this service'}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="bg-gray-50 rounded-2xl p-8">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <CheckCircle className="w-6 h-6 text-secondary-600 mr-2" />
                          {service.whatWeDo}
                        </h3>
                        <ul className="space-y-3">
                          {service.doList.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="flex-shrink-0 w-1.5 h-1.5 bg-secondary-600 rounded-full mt-2 mr-3"></div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <XCircle className="w-6 h-6 text-red-500 mr-2" />
                          {service.whatWeDont}
                        </h3>
                        <ul className="space-y-3">
                          {service.dontList.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3"></div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {index < services.length - 1 && (
                  <div className="mt-16 border-t border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {language === 'fr' ? 'Prêt à commencer ?' : 'Ready to start?'}
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {language === 'fr'
              ? 'Contactez-nous pour une évaluation gratuite de votre projet.'
              : 'Contact us for a free evaluation of your project.'}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
          >
            {language === 'fr' ? 'Évaluer mon projet' : 'Evaluate my project'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
