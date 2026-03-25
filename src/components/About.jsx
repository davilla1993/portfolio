import React from 'react';
import { useTranslation } from 'react-i18next';
import { User, Code, Globe } from 'lucide-react';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="section-padding overflow-hidden relative bg-blue-50/30 dark:bg-blue-900/10">
            {/* Background Decoration */}
            <div className="absolute top-[20%] right-[-5%] w-80 h-80 bg-blue-400/20 rounded-full blur-3xl -z-10 animate-float"></div>
            <div className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] bg-indigo-400/20 rounded-full blur-[120px] -z-10 animate-float" style={{ animationDelay: '3s' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                        {t('about.title')}
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: User, title: 'Profile', text: t('about.profile') },
                        { icon: Code, title: 'Development', text: t('about.development') },
                        { icon: Globe, title: 'Languages', text: t('about.languages') }
                    ].map((item, index) => (
                        <div key={index} className="glass-card p-10 group hover:-translate-y-2 transition-all duration-500">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
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
