import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Github, Linkedin, Twitter, Download } from 'lucide-react';
import profileImage from '../assets/images/profile.png';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-slate-950 dark:to-slate-950 transition-colors duration-500">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-blue-600/20 dark:bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-sky-400/20 dark:bg-violet-600/10 rounded-full blur-[100px] animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1 text-center md:text-left space-y-10">
            <div className="space-y-6">
              <h2 className="text-lg md:text-xl font-semibold tracking-wide uppercase text-blue-600 dark:text-blue-400">
                {t('hero.greeting')}
              </h2>
              <div className="space-y-2">
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {t('header.brand_fullname')}
                </h1>
                <span className="text-3xl md:text-5xl font-bold text-gradient block">
                  {t('hero.role')}
                </span>
              </div>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start flex-wrap">
              <a href="#projects" className="btn-primary w-full sm:w-auto">
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={t('hero.cv_link')} download className="btn-secondary w-full sm:w-auto flex justify-center items-center gap-2">
                <Download className="w-5 h-5" />
                {t('hero.download_cv')}
              </a>
            </div>

            <div className="flex items-center gap-8 justify-center md:justify-start">
              <a href="https://github.com/davilla1993" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-2xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/follygbossou" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-2xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-2xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] mx-auto group">
              {/* Outer rings */}
              <div className="absolute inset-[-20px] border border-blue-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-[-40px] border border-indigo-500/5 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>

              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500"></div>

              <div className="relative w-full h-full glass-card p-3 rounded-full overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full shadow-2xl scale-105 group-hover:scale-110 transition-transform duration-700 object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
