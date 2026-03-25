import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';

const Skills = () => {
    const { t } = useTranslation();
    const skills = t('skills.items', { returnObjects: true });

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('skills.title')}
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 capitalize border-b border-gray-200 dark:border-gray-700 pb-2">
                                {category}
                            </h3>
                            <div className="space-y-3">
                                {Array.isArray(items) && items.map((skill, index) => (
                                    <div key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                                        <span>{skill}</span>
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
