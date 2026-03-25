import React from 'react';
import { useTranslation } from 'react-i18next';
import { User, Code, Globe } from 'lucide-react';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-20 overflow-hidden relative bg-slate-50/50">
            {/* Background Decoration */}
            <div className="absolute top-[10%] right-[-5%] w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-[10%] left-[-5%] w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        {t('about.title')}
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: User, title: 'Profile', text: t('about.profile') },
                        { icon: Code, title: 'Development', text: t('about.development') },
                        { icon: Globe, title: 'Languages', text: t('about.languages') }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                                <item.icon className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
