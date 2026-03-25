import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';

const Skills = () => {
    const { t } = useTranslation();
    const skills = t('skills.items', { returnObjects: true });

    return (
        <section id="skills" className="py-20 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 font-sans">
                        {t('skills.title')}
                    </h2>
                    <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6 capitalize border-b border-slate-50 pb-3">
                                {category}
                            </h3>
                            <div className="space-y-4">
                                {Array.isArray(items) && items.map((skill, index) => (
                                    <div key={index} className="flex items-center text-slate-600">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                                        <span className="text-sm md:text-base font-medium">{skill}</span>
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

export default Skills;
