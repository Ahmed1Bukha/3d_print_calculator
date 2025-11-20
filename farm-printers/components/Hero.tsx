'use client';

import { ArrowLeft, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-red-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-red-200/30 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Main Content */}
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <Badge variant="outline" className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm shadow-lg border-orange-200">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">
              رائدون في الطباعة ثلاثية الأبعاد للمزارع
            </span>
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-gray-900">ابتكارات الطباعة</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 animate-gradient">
              ثلاثية الأبعاد
            </span>
            <span className="block text-gray-900 mt-2">للمزارع الحديثة</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحول أفكارك إلى واقع ملموس من خلال تقنيات الطباعة المتقدمة
            <br />
            بجودة عالية وأسعار تنافسية
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              asChild
              size="xl"
              className="group rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <a href="#products">
                اكتشف منتجاتنا
                <ArrowLeft className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="group rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Play size={20} className="text-orange-500" />
              شاهد الفيديو
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600">500+</div>
              <div className="text-sm md:text-base text-gray-600 mt-2">عميل سعيد</div>
            </div>
            <div className="text-center border-x border-gray-300">
              <div className="text-4xl md:text-5xl font-bold text-orange-600">1000+</div>
              <div className="text-sm md:text-base text-gray-600 mt-2">مشروع منجز</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600">24/7</div>
              <div className="text-sm md:text-base text-gray-600 mt-2">دعم فني</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
