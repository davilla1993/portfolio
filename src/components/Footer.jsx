import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-4 text-center md:text-left">
            <span className="text-3xl font-extrabold text-gradient block">
              {t('header.brand')}
            </span>
            <p className="text-slate-500 max-w-xs font-medium">
              Building modern digital experiences with expertise and passion.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: Github, href: 'https://github.com/davilla1993' },
              { icon: Linkedin, href: 'https://linkedin.com/in/follygbossou' },
              { icon: Twitter, href: 'https://twitter.com/' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-50 rounded-2xl text-slate-500 hover:text-blue-600 hover:scale-110 transition-all duration-300 border border-slate-100 shadow-sm"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
            © {currentYear} {t('header.brand_fullname')}. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-slate-400 text-sm font-bold">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> in Lomé
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
