import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-slate-50/50 relative overflow-hidden">
      <div className="absolute top-[10%] left-[-5%] w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{t('contact.subtitle')}</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                {t('contact.description')}
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'carlogbossou93@gmail.com', href: 'mailto:carlogbossou93@gmail.com' },
                { icon: Phone, label: 'Phone', value: t('contact.phone'), href: `tel:${t('contact.phone').replace(/\s/g, '')}` },
                { icon: MapPin, label: 'Location', value: t('contact.location'), href: '#' }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-slate-900 font-bold text-lg">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                <input
                  type="text"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.form.message')}</label>
                <textarea
                  rows="5"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-5 text-lg font-bold flex justify-center items-center gap-3">
                {t('contact.form.send')}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
