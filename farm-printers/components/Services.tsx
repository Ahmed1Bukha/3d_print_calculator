'use client';

import { Package, Truck, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Services() {
  const services = [
    {
      icon: Pencil,
      title: 'تصميم خاص',
      description: 'نقدم خدمات التصميم المخصص حسب احتياجاتك الفريدة مع فريق من المصممين المحترفين',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Package,
      title: 'طباعة القوالب',
      description: 'طباعة القوالب بدقة عالية باستخدام أحدث التقنيات وأفضل المواد',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Truck,
      title: 'شحن خلال ٣ أيام',
      description: 'خدمة توصيل سريعة وآمنة لجميع أنحاء المملكة خلال 3 أيام عمل',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-red-900 to-red-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            الخدمات
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            نوفر لك مجموعة متكاملة من الخدمات لتحقيق رؤيتك
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
            >
              {/* Icon */}
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={40} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-orange-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-200 text-center leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Button
            asChild
            size="xl"
            variant="outline"
            className="bg-white text-red-900 hover:bg-gray-100 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <a href="#contact">
              احصل على استشارة مجانية
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
