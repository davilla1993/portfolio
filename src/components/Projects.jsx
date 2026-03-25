import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, ExternalLink } from 'lucide-react';

import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/project6.png';
import project7 from '../assets/images/project7.png';

const Projects = () => {
    const { t } = useTranslation();
    const projects = t('projects.items', { returnObjects: true });
    const projectImages = [project1, project2, project3, project4, project5, project6, project7];

    return (
        <section id="projects" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        {t('projects.title')}
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {Array.isArray(projects) && projects.map((project, index) => (
                        <div key={index} className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={projectImages[index]}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                    <div className="flex gap-4">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white hover:text-slate-900 transition-all font-bold">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white hover:text-slate-900 transition-all font-bold">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 md:p-10 space-y-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{project.title}</h3>
                                <p className="text-slate-600 text-base md:text-lg leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-3 py-1 bg-white border border-slate-200 text-slate-500 rounded-full text-xs font-bold uppercase tracking-wider">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a
                        href="https://github.com/davilla1993"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary px-8 py-4 inline-flex items-center gap-3 text-lg font-bold"
                    >
                        <Github className="w-6 h-6" />
                        {t('projects.viewMore')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
