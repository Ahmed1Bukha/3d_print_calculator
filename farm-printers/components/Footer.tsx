'use client';

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'من نحن', href: '#about' },
      { label: 'المنتجات', href: '#products' },
      { label: 'الخدمات', href: '#services' },
      { label: 'تواصل معنا', href: '#contact' },
    ],
    services: [
      { label: 'تصميم مخصص', href: '#services' },
      { label: 'طباعة ثلاثية الأبعاد', href: '#services' },
      { label: 'استشارات فنية', href: '#services' },
      { label: 'صيانة ودعم', href: '#services' },
    ],
    legal: [
      { label: 'سياسة الخصوصية', href: '#' },
      { label: 'شروط الاستخدام', href: '#' },
      { label: 'سياسة الاسترجاع', href: '#' },
      { label: 'الأسئلة الشائعة', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              فارم دي بالس
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              رواد في تقديم حلول الطباعة ثلاثية الأبعاد المتخصصة للقطاع الزراعي
            </p>
            <div className="space-y-2">
              <a href="tel:+966501234567" className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors">
                <Phone size={18} />
                <span>+966 50 123 4567</span>
              </a>
              <a href="mailto:info@farmdplus.com" className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors">
                <Mail size={18} />
                <span>info@farmdplus.com</span>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">الشركة</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">خدماتنا</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">معلومات قانونية</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-2">اشترك في نشرتنا الإخبارية</h4>
            <p className="text-gray-400 mb-4">احصل على آخر الأخبار والعروض الخاصة</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-bold hover:shadow-lg transition-all transform hover:scale-105">
                اشترك
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-center md:text-right">
              © {currentYear} فارم دي بالس. جميع الحقوق محفوظة.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
