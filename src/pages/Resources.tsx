import { Link } from 'react-router-dom';
import {
  Book,
  FileText,
  HelpCircle,
  ExternalLink,
  GraduationCap,
  Plane,
  Briefcase,
  AlertCircle,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Resources() {
  const { language, t } = useLanguage();

  const whatsappBaseLink = `https://wa.me/${t('contact.phone_number')}?text=`;

  const guides = [
    {
      icon: GraduationCap,
      title: language === 'fr' ? 'Guide: Étudier au Canada' : 'Guide: Study in Canada',
      description:
        language === 'fr'
          ? 'Tout ce qu\'il faut savoir sur le permis d\'études canadien, du choix du programme aux démarches après l\'arrivée.'
          : 'Everything you need to know about the Canadian study permit, from choosing a program to procedures after arrival.',
      link: language === 'fr'
        ? whatsappBaseLink + 'Bonjour, je suis intéressé(e) par votre guide "Étudier au Canada". Pouvez-vous m\'en dire plus ou me mettre en contact avec un conseiller ?'
        : whatsappBaseLink + 'Hello, I am interested in your "Studying in Canada" guide. Could you tell me more about it or put me in touch with an advisor?',
    },
    {
      icon: Plane,
      title: language === 'fr' ? 'Guide: Visa visiteur Canada' : 'Guide: Canada visitor visa',
      description:
        language === 'fr'
          ? 'Explication complète du processus de demande de visa visiteur, documents requis et erreurs à éviter.'
          : 'Complete explanation of the visitor visa application process, required documents and errors to avoid.',
      link: language === 'fr'
        ? whatsappBaseLink + 'Bonjour, je suis intéressé(e) par votre guide "Visa visiteur Canada". Pouvez-vous m\'en dire plus ou me mettre en contact avec un conseiller ?'
        : whatsappBaseLink + 'Hello, I am interested in your "Canada visitor visa" guide. Could you tell me more about it or put me in touch with an advisor?',
    },
    {
      icon: Briefcase,
      title:
        language === 'fr'
          ? 'Guide: Travailleurs qualifiés'
          : 'Guide: Skilled workers',
      description:
        language === 'fr'
          ? 'Synthèse des programmes de travailleurs qualifiés : points, langues, expérience et procédures.'
          : 'Summary of skilled worker programs: points, languages, experience and procedures.',
      link: language === 'fr'
        ? whatsappBaseLink + 'Bonjour, je suis intéressé(e) par votre guide "Travailleurs qualifiés". Pouvez-vous m\'en dire plus ou me mettre en contact avec un conseiller ?'
        : whatsappBaseLink + 'Hello, I am interested in your "Skilled workers" guide. Could you tell me more about it or put me in touch with an advisor?',
    },
  ];

  const faqs = [
    {
      question:
        language === 'fr'
          ? 'Pouvez-vous garantir l\'approbation de mon visa ?'
          : 'Can you guarantee my visa approval?',
      answer:
        language === 'fr'
          ? 'Non. Les décisions d\'approbation ou de refus appartiennent exclusivement aux autorités gouvernementales (IRCC, ambassades, etc.). Notre rôle est de maximiser la qualité de votre dossier en vous aidant à respecter toutes les exigences officielles et à présenter votre situation de manière claire et complète.'
          : 'No. Approval or refusal decisions belong exclusively to government authorities (IRCC, embassies, etc.). Our role is to maximize the quality of your file by helping you meet all official requirements and present your situation clearly and completely.',
    },
    {
      question:
        language === 'fr'
          ? 'Combien de temps prend le processus ?'
          : 'How long does the process take?',
      answer:
        language === 'fr'
          ? 'Les délais varient selon le type de visa et le pays. Par exemple, un permis d\'études pour le Canada peut prendre plusieurs semaines à plusieurs mois selon la période de l\'année et le bureau de traitement. Nous vous fournissons des estimations basées sur les délais officiels publiés, mais nous ne contrôlons pas ces délais.'
          : 'Processing times vary by visa type and country. For example, a study permit for Canada can take several weeks to several months depending on the time of year and processing office. We provide estimates based on published official timelines, but we do not control these timelines.',
    },
    {
      question:
        language === 'fr'
          ? 'Êtes-vous un consultant en immigration réglementé ?'
          : 'Are you a regulated immigration consultant?',
      answer:
        language === 'fr'
          ? 'Nous offrons un service d\'accompagnement administratif et de préparation de dossiers. Pour les cas complexes nécessitant une représentation légale, nous pouvons vous référer à des consultants en immigration réglementés (CRCIC) ou à des avocats spécialisés.'
          : 'We offer administrative support and file preparation services. For complex cases requiring legal representation, we can refer you to regulated immigration consultants (RCIC) or specialized lawyers.',
    },
    {
      question:
        language === 'fr'
          ? 'Où trouvez-vous vos informations ?'
          : 'Where do you get your information?',
      answer:
        language === 'fr'
          ? 'Toutes nos informations proviennent de sources officielles publiques : sites web gouvernementaux (Canada.ca, ambassades, etc.), guides officiels et bulletins d\'information. Nous mettons régulièrement à jour nos connaissances pour refléter les changements de réglementation.'
          : 'All our information comes from official public sources: government websites (Canada.ca, embassies, etc.), official guides and newsletters. We regularly update our knowledge to reflect regulatory changes.',
    },
    {
      question:
        language === 'fr'
          ? 'Que se passe-t-il si ma demande est refusée ?'
          : 'What happens if my application is refused?',
      answer:
        language === 'fr'
          ? 'En cas de refus, nous analysons avec vous les raisons indiquées par les autorités et évaluons les options : nouvelle demande avec dossier renforcé, demande de réexamen si applicable, ou orientation vers d\'autres programmes. Nous vous accompagnons pour comprendre les motifs et améliorer votre profil.'
          : 'In case of refusal, we analyze with you the reasons given by the authorities and evaluate options: new application with strengthened file, request for reconsideration if applicable, or orientation to other programs. We support you to understand the reasons and improve your profile.',
    },
    {
      question:
        language === 'fr'
          ? 'Dois-je venir à votre bureau ou tout peut se faire en ligne ?'
          : 'Do I need to come to your office or can everything be done online?',
      answer:
        language === 'fr'
          ? 'Les deux options sont possibles. Nous avons des bureaux physiques à Douala et Yaoundé pour ceux qui préfèrent un rendez-vous en personne. Nous offrons également des consultations vidéo et un tableau de bord en ligne pour gérer votre dossier à distance. Vous choisissez ce qui vous convient le mieux.'
          : 'Both options are possible. We have physical offices in Douala and Yaoundé for those who prefer an in-person appointment. We also offer video consultations and an online dashboard to manage your file remotely. You choose what suits you best.',
    },
  ];

  const officialLinks = [
    {
      title: 'IRCC - Immigration Canada',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship.html',
      description:
        language === 'fr'
          ? 'Site officiel d\'Immigration, Réfugiés et Citoyenneté Canada'
          : 'Official Immigration, Refugees and Citizenship Canada site',
    },
    {
      title: language === 'fr' ? 'Permis d\'études Canada' : 'Canada study permit',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html',
      description:
        language === 'fr'
          ? 'Information officielle sur les permis d\'études'
          : 'Official information on study permits',
    },
    {
      title: language === 'fr' ? 'Visa visiteur Canada' : 'Canada visitor visa',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html',
      description:
        language === 'fr'
          ? 'Guide officiel pour visiter le Canada'
          : 'Official guide to visiting Canada',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'fr' ? 'Ressources' : 'Resources'}
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl leading-relaxed">
            {language === 'fr'
              ? 'Guides, informations et réponses aux questions fréquentes pour vous accompagner dans votre projet.'
              : 'Guides, information and answers to frequently asked questions to support you in your project.'}
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <Book className="w-8 h-8 text-primary-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              {language === 'fr' ? 'Guides pratiques' : 'Practical guides'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-8 group"
              >
                <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <guide.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{guide.description}</p>
                <a
                  href={guide.link}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                >
                  {language === 'fr' ? 'consultez un conseiller.' : 'Learn more with an advisor'}
                  <FileText className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <HelpCircle className="w-8 h-8 text-primary-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              {language === 'fr' ? 'Questions fréquentes' : 'Frequently asked questions'}
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <ExternalLink className="w-8 h-8 text-primary-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              {language === 'fr' ? 'Liens officiels' : 'Official links'}
            </h2>
          </div>

          <div className="space-y-4">
            {officialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
              </a>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {language === 'fr'
                    ? 'Toujours vérifier les sources officielles'
                    : 'Always verify official sources'}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {language === 'fr'
                    ? 'Les informations sur ce site sont fournies à titre indicatif et peuvent changer. Veuillez toujours consulter les sites web gouvernementaux officiels pour les informations les plus récentes et les plus précises.'
                    : 'Information on this site is provided for guidance and may change. Please always consult official government websites for the most recent and accurate information.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'fr'
              ? 'Vous ne trouvez pas la réponse à votre question ?'
              : 'Can\'t find the answer to your question?'}
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            {language === 'fr'
              ? 'Notre équipe est là pour vous aider. Contactez-nous pour toute question spécifique.'
              : 'Our team is here to help. Contact us for any specific questions.'}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
          >
            {language === 'fr' ? 'Nous contacter' : 'Contact us'}
          </Link>
        </div>
      </section>
    </div>
  );
}
