'use client';

import { Award, Users, Target, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'الجودة',
      description: 'نلتزم بأعلى معايير الجودة في كل منتج نقدمه',
    },
    {
      icon: Users,
      title: 'العملاء',
      description: 'رضا عملائنا هو أولويتنا القصوى',
    },
    {
      icon: Target,
      title: 'الدقة',
      description: 'نضمن دقة متناهية في التصميم والتنفيذ',
    },
    {
      icon: Zap,
      title: 'السرعة',
      description: 'نوفر خدمات سريعة دون التضحية بالجودة',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-red-950 to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            من نحن
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-6"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-orange-400">
              رواد في تقنية الطباعة ثلاثية الأبعاد
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              نحن شركة متخصصة في تقديم حلول الطباعة ثلاثية الأبعاد المبتكرة للقطاع الزراعي.
              منذ تأسيسنا، ونحن نسعى لتقديم أفضل الخدمات والمنتجات التي تلبي احتياجات عملائنا.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              فريقنا من الخبراء والمهندسين المحترفين يعمل بجد لضمان تقديم حلول مبتكرة
              وعالية الجودة تساهم في تطوير القطاع الزراعي وزيادة الإنتاجية.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">10+</div>
                <div className="text-sm text-gray-400">سنوات خبرة</div>
              </div>
              <div className="border-l border-gray-700"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">50+</div>
                <div className="text-sm text-gray-400">موظف محترف</div>
              </div>
              <div className="border-l border-gray-700"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">98%</div>
                <div className="text-sm text-gray-400">رضا العملاء</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="aspect-square flex items-center justify-center text-9xl">
                🏭
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <value.icon size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-orange-400">{value.title}</h4>
              <p className="text-gray-300 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
