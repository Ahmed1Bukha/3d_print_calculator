'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      value: '+966 50 123 4567',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'info@farmdplus.com',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: MapPin,
      title: 'العنوان',
      value: 'الرياض، المملكة العربية السعودية',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            تواصل معنا
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتك ومساعدتك في تحقيق أهدافك
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                معلومات التواصل
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                سواء كان لديك استفسار عن منتجاتنا أو خدماتنا، فريقنا جاهز دائماً لمساعدتك.
                لا تتردد في التواصل معنا عبر أي من القنوات التالية.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group flex items-center gap-4 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">{info.title}</div>
                    <div className="text-lg font-bold text-gray-900">{info.value}</div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-xl h-64 flex items-center justify-center text-6xl">
              🗺️
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              أرسل لنا رسالة
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  الاسم الكامل
                </label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="أدخل اسمك"
                  required
                  className="h-11"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  البريد الإلكتروني
                </label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="h-11"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  رقم الهاتف
                </label>
                <Input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+966 50 123 4567"
                  required
                  className="h-11"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  رسالتك
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  placeholder="اكتب رسالتك هنا..."
                  required
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg transform hover:scale-105"
              >
                إرسال الرسالة
                <Send size={20} />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
