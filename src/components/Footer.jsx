import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="relative bg-slate-50 dark:bg-slate-950 py-16 transition-colors duration-300 border-t border-slate-200 dark:border-slate-900 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-float"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="text-center md:text-left space-y-3">
                        <span className="text-2xl font-bold text-gradient">{t('footer.brand')}</span>
                        <p className="text-slate-500 dark:text-slate-400 max-w-xs">{t('footer.description')}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/davilla1993" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-2xl text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com/in/follygbossou" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-2xl text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-2xl text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="text-slate-400 dark:text-slate-500 text-sm font-medium">
                        {t('footer.copyright')}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
