import { Link } from 'react-router-dom';
import {
  CheckCircle,
  FileCheck,
  Globe2,
  Languages,
  GraduationCap,
  Briefcase,
  Plane,
  Users,
  ArrowRight,
  Shield,
  Clock,
  TrendingUp,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Home() {
  const { t } = useLanguage();

  const trustElements = [
    { icon: CheckCircle, text: t('trustElements.clearSteps') },
    { icon: FileCheck, text: t('trustElements.verifiedDocs') },
    { icon: Globe2, text: t('trustElements.updatedInfo') },
    { icon: Languages, text: t('trustElements.bilingual') },
  ];

  const whoWeHelp = [
    {
      icon: GraduationCap,
      title: t('whoWeHelp.students.title'),
      description: t('whoWeHelp.students.description'),
      link: '/services#students',
      color: 'bg-primary-50 text-primary-600',
    },
    {
      icon: Briefcase,
      title: t('whoWeHelp.workers.title'),
      description: t('whoWeHelp.workers.description'),
      link: '/services#workers',
      color: 'bg-secondary-50 text-secondary-600',
    },
    {
      icon: Plane,
      title: t('whoWeHelp.visitors.title'),
      description: t('whoWeHelp.visitors.description'),
      link: '/services#visitors',
      color: 'bg-accent-50 text-accent-600',
    },
    {
      icon: Users,
      title: t('whoWeHelp.family.title'),
      description: t('whoWeHelp.family.description'),
      link: '/services#family',
      color: 'bg-primary-50 text-primary-600',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: t('process.step1.title'),
      description: t('process.step1.description'),
    },
    {
      number: '02',
      title: t('process.step2.title'),
      description: t('process.step2.description'),
    },
    {
      number: '03',
      title: t('process.step3.title'),
      description: t('process.step3.description'),
    },
    {
      number: '04',
      title: t('process.step4.title'),
      description: t('process.step4.description'),
    },
    {
      number: '05',
      title: t('process.step5.title'),
      description: t('process.step5.description'),
    },
    {
      number: '06',
      title: t('process.step6.title'),
      description: t('process.step6.description'),
    },
  ];

  const services = [
    {
      title: t('services.passport.title'),
      description: t('services.passport.description'),
      icon: FileCheck,
    },
    {
      title: t('services.visitorVisa.title'),
      description: t('services.visitorVisa.description'),
      icon: Plane,
    },
    {
      title: t('services.studyVisa.title'),
      description: t('services.studyVisa.description'),
      icon: GraduationCap,
    },
    {
      title: t('services.skilledWorker.title'),
      description: t('services.skilledWorker.description'),
      icon: Briefcase,
    },
    {
      title: t('services.translation.title'),
      description: t('services.translation.description'),
      icon: Languages,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium text-white/90">
                {t('trustElements.updatedInfo')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t('hero.title')}
            </h1>

            <p className="text-lg md:text-xl text-primary-100 leading-relaxed mb-8 max-w-2xl">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {t('hero.ctaPrimary')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href={t('hero.ctaSecondaryLink')} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustElements.map((element, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <element.icon className="w-6 h-6 text-secondary-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">{element.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('whoWeHelp.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeHelp.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                <span className="inline-flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700">
                  {t('whoWeHelp.seeDetails')}
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('process.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {t('process.cta')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {services.slice(3).map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg"
            >
              {t('whoWeHelp.seeDetails')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="flex justify-center mb-4">
                <Clock className="w-12 h-12 text-accent-400" />
              </div>
              <h3 className="text-3xl font-bold mb-2">5+</h3>
              <p className="text-primary-200">{t('experience')}</p>
            </div>
            <div className="p-8">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-accent-400" />
              </div>
              <h3 className="text-3xl font-bold mb-2">1000+</h3>
              <p className="text-primary-200">{t('clients')}</p>
            </div>
            <div className="p-8">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-accent-400" />
              </div>
              <h3 className="text-3xl font-bold mb-2">+95%</h3>
              <p className="text-primary-200">{t('satisfaction')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
