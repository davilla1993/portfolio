import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  const navItems = [
    { name: t('header.home'), href: '#home' },
    { name: t('header.about'), href: '#about' },
    { name: t('header.experience'), href: '#experience' },
    { name: t('header.skills'), href: '#skills' },
    { name: t('header.projects'), href: '#projects' },
    { name: t('header.contact'), href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <span className="text-2xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">{t('header.brand')}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-slate-600 hover:text-blue-600 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50"
              >
                {item.name}
              </a>
            ))}

            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-slate-200">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 rounded-xl hover:bg-slate-100 text-slate-700 font-medium transition-all duration-300"
              >
                <Globe className="w-4 h-4 text-blue-500" />
                <span className="text-sm">{i18n.language.toUpperCase()}</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl text-slate-700 hover:bg-slate-100 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-100 shadow-xl">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-6 py-4 rounded-2xl text-lg font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-sm border border-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="w-full text-left flex items-center space-x-4 px-6 py-4 rounded-2xl text-lg font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-sm border border-slate-50"
            >
              <Globe className="w-6 h-6 text-blue-500" />
              <span>{i18n.language === 'en' ? 'Switch to French' : 'Passer en Anglais'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
