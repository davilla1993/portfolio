import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const { t } = useTranslation();
    const experience = t('experience.items', { returnObjects: true });

    return (
        <section id="experience" className="section-padding relative overflow-hidden bg-white dark:bg-slate-950/20">
            {/* Background Decoration */}
            <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 animate-float"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                        {t('experience.title')}
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-10">
                    {Array.isArray(experience) && experience.map((item, index) => (
                        <div key={index} className="glass-card p-8 md:p-12 group hover:-translate-y-1 transition-all duration-500">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors uppercase tracking-tight">{item.role}</h3>
                                    <div className="flex items-center text-blue-600 dark:text-blue-400 mt-2">
                                        <Briefcase className="w-5 h-5 mr-3" />
                                        <span className="font-bold text-lg">{item.company}</span>
                                    </div>
                                </div>
                                <div className="flex items-center px-5 py-2 glass-card border-none rounded-xl text-slate-500 dark:text-slate-400 self-start md:self-center font-bold text-sm">
                                    <Calendar className="w-4 h-4 mr-3" />
                                    <span>{item.period}</span>
                                </div>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg max-w-4xl">{item.description}</p>
                            <div className="space-y-4">
                                {item.projects && item.projects.map((project, projIndex) => (
                                    <div key={projIndex} className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">{project.name}</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{project.details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
