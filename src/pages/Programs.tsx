import { Link } from 'react-router-dom';
import {
    Plane,
    Briefcase,
    ArrowRight,
    AlertCircle,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Programs() {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {language === 'fr' ? 'Programmes' : 'Programs'}
                    </h1>
                    <p className="text-xl text-primary-100 max-w-3xl leading-relaxed">
                        {language === 'fr'
                            ? 'Parfait ! Vous êtes arrivé à ce stade, cela signifie que vous souhaitez bénéficier de notre accompagnement. Veuillez choisir le programme qui vous intéresse.'
                            : 'Perfect! You\'ve reached this stage, which means you\'d like to benefit from our support. Please choose the program that interests you.'}
                    </p>
                </div>
            </section>

            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <div className="bg-accent-50 rounded-xl p-6 sticky top-36">
                        <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-4">
                            <Plane className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            {language === 'fr' ? 'Frais d\'ouverture de dossier au Canada' : 'Canada file opening fees'}
                        </h3>
                        <Link
                            to="https://shop.optimumfly.com/product/frais-douverture-de-dossier-au-canada/"
                            className="w-full inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                            {language === 'fr' ? 'Commencer' : 'Start'}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>

                <div>
                    <div className="bg-secondary-50 rounded-xl p-6 sticky top-36">
                        <div className="w-12 h-12 bg-secondary-600 rounded-lg flex items-center justify-center mb-4">
                            <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            {language === 'fr' ? 'Frais d\'ouverture de dossier au Kenya' : 'Kenya file opening fees'}
                        </h3>
                        <Link
                            to="https://shop.optimumfly.com/product/frais-douverture-de-dossier-au-kenya/"
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
        </div>
    );
}
