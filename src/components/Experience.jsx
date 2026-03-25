import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const { t } = useTranslation();
    const experience = t('experience.items', { returnObjects: true });

    return (
        <section id="experience" className="py-20 relative overflow-hidden bg-white">
            {/* Background Decoration */}
            <div className="absolute top-[30%] left-[-5%] w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        {t('experience.title')}
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-8">
                    {Array.isArray(experience) && experience.map((item, index) => (
                        <div key={index} className="bg-slate-50 p-6 md:p-10 rounded-3xl border border-slate-100 hover:shadow-md transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">{item.role}</h3>
                                    <div className="flex items-center text-blue-600 mt-2 font-bold">
                                        <Briefcase className="w-5 h-5 mr-2" />
                                        <span>{item.company}</span>
                                    </div>
                                </div>
                                <div className="flex items-center px-4 py-1.5 bg-white shadow-sm rounded-xl text-slate-500 self-start md:self-center font-bold text-sm border border-slate-100">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    <span>{item.period}</span>
                                </div>
                            </div>
                            <p className="text-slate-600 mb-6 leading-relaxed text-base md:text-lg max-w-4xl">{item.description}</p>
                            
                            <div className="space-y-3">
                                {item.projects && item.projects.map((project, projIndex) => (
                                    <div key={projIndex} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                        <h4 className="font-bold text-slate-900 text-sm md:text-base mb-1">{project.name}</h4>
                                        <p className="text-xs md:text-sm text-slate-600">{project.details}</p>
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
