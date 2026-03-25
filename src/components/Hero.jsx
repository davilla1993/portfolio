import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Github, Linkedin, Twitter, Download } from 'lucide-react';
import profileImage from '../assets/images/profile.png';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-gradient-to-b from-blue-50/50 to-white transition-colors duration-500">
        <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1 text-center md:text-left space-y-10">
            <div className="space-y-6">
              <h2 className="text-base md:text-xl font-bold tracking-widest uppercase text-blue-600">
                {t('hero.greeting')}
              </h2>
              <div className="space-y-3">
                <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-tight">
                  {t('header.brand_fullname')}
                </h1>
                <span className="text-2xl md:text-5xl font-bold text-gradient block">
                  {t('hero.role')}
                </span>
              </div>
              <p className="text-base md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href="#projects" className="btn-primary w-full sm:w-auto px-8 py-4 text-lg">
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={t('hero.cv_link')} download className="btn-secondary w-full sm:w-auto px-8 py-4 text-lg flex justify-center items-center gap-2">
                <Download className="w-5 h-5" />
                {t('hero.download_cv')}
              </a>
            </div>

            <div className="flex items-center gap-6 justify-center md:justify-start">
              <a href="https://github.com/davilla1993" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow-sm rounded-2xl text-slate-600 hover:text-blue-600 hover:scale-110 transition-all duration-300 border border-slate-100">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/follygbossou" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow-sm rounded-2xl text-slate-600 hover:text-blue-600 hover:scale-110 transition-all duration-300 border border-slate-100">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow-sm rounded-2xl text-slate-600 hover:text-blue-600 hover:scale-110 transition-all duration-300 border border-slate-100">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex-1 relative order-first md:order-last">
            <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] mx-auto group">
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-5 blur-3xl transition-opacity duration-500"></div>
              <div className="relative w-full h-full bg-white p-2 rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full scale-105 group-hover:scale-110 transition-transform duration-700 object-top"
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
