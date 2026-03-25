import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

// Import images
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/project6.png';
import project7 from '../assets/images/project7.png';

const projectImages = {
    project1, project2, project3, project4, project5, project6, project7
};

const Projects = () => {
    const { t } = useTranslation();
    const projects = t('projects.items', { returnObjects: true });

    return (
        <section id="projects" className="section-padding relative bg-blue-50/50 dark:bg-blue-950/20">
            <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                        {t('projects.title')}
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {Array.isArray(projects) && projects.map((project, index) => (
                        <div key={index} className="glass-card flex flex-col group overflow-hidden">
                            <div className="h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-6">
                                    <span className="text-white font-medium flex items-center gap-2">
                                        {t('projects.view_project')} <ExternalLink className="w-4 h-4" />
                                    </span>
                                </div>
                                <img
                                    src={projectImages[project.image] || projectImages.project1}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="mt-auto">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all duration-300"
                                    >
                                        {t('projects.view_project')}
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/davilla1993"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        {t('projects.more_projects', 'Plus de projets')}
                        <Github className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
