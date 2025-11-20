'use client';

import { ExternalLink } from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: 1,
      title: 'طابعة ثلاثية الأبعاد - موديل ذهبي',
      description: 'طابعة عالية الدقة مصممة خصيصاً للاستخدامات الزراعية المتقدمة',
      image: '/images/product1.jpg',
      price: '5,999 ريال',
      features: ['دقة عالية', 'سرعة إنتاج', 'متانة فائقة'],
    },
    {
      id: 2,
      title: 'طابعة ثلاثية الأبعاد - موديل فضي',
      description: 'حلول طباعة احترافية للمشاريع الزراعية الصغيرة والمتوسطة',
      image: '/images/product2.jpg',
      price: '4,499 ريال',
      features: ['تصميم مدمج', 'سهلة الاستخدام', 'موفرة للطاقة'],
    },
    {
      id: 3,
      title: 'مجموعة قوالب زراعية',
      description: 'مجموعة متكاملة من القوالب المصممة لتطبيقات المزارع',
      image: '/images/product3.jpg',
      price: '1,299 ريال',
      features: ['متعددة الاستخدام', 'مقاومة للعوامل', 'قابلة للتخصيص'],
    },
    {
      id: 4,
      title: 'طابعة صناعية كبيرة',
      description: 'للمشاريع الزراعية الكبيرة والإنتاج الضخم',
      image: '/images/product4.jpg',
      price: '12,999 ريال',
      features: ['حجم طباعة كبير', 'إنتاجية عالية', 'تقنية متقدمة'],
    },
  ];

  return (
    <section id="products" className="section-padding bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            المنتجات
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اكتشف مجموعتنا المتميزة من الطابعات والقوالب المصممة خصيصاً للمزارع الحديثة
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image Container */}
              <div className="relative h-80 bg-gradient-to-br from-orange-100 to-amber-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                </div>
                <div className="relative h-full flex items-center justify-center p-8">
                  {/* Placeholder for product image */}
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    🖨️
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  جديد
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="text-3xl font-bold text-orange-600">
                    {product.price}
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-bold hover:shadow-lg transition-all transform hover:scale-105">
                    المزيد
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
