import { BookOpen, Users, Trophy, CheckCircle, Star, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const stats = [
    { icon: <BookOpen className="w-8 h-8" />, value: '+100', label: 'درس تعليمي' },
    { icon: <Users className="w-8 h-8" />, value: '+5000', label: 'طالب مسجل' },
    { icon: <Trophy className="w-8 h-8" />, value: '+12', label: 'معلم متميز' },
  ];

  const features = [
    {
      icon: <Star className="w-12 h-12 text-orange-500" />,
      title: 'تعليم متميز',
      description: 'نقدم أفضل المناهج التعليمية بأحدث الطرق وأكثرها فعالية'
    },
    {
      icon: <Star className="w-12 h-12 text-orange-500" />,
      title: 'معلمون محترفون',
      description: 'نخبة من أفضل المعلمين ذوي الخبرة في التدريس'
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-500" />,
      title: 'محتوى متكامل',
      description: 'شرح شامل للمناهج مع تدريبات وامتحانات دورية'
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-500" />,
      title: 'دعم مستمر',
      description: 'فريق دعم فني متكامل لمساعدتك في أي وقت'
    }
  ];

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-sky-600 via-sky-700 to-orange-500 text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
          <div className="absolute inset-0 hero-pattern opacity-10"></div>
        </div>

        <div className="relative container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="https://h.top4top.io/p_33100dpvb1.png" 
                alt="Logo" 
                className="w-24 h-24"
              />
            </div>
            <div className="relative">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                <span className="block text-white opacity-90 text-lg md:text-xl mb-2">مرحباً بك في</span>
                <span className="text-white text-4xl md:text-5xl">آفاق أكاديمي</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
                منصة تعليمية متكاملة للمرحلة الثانوية تقدم أفضل المناهج التعليمية بأحدث الطرق وأكثرها فعالية.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <Link 
                to="/grades"
                className="group bg-white text-sky-600 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="flex items-center">
                  ابدأ رحلة التعلم
                  <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <a 
                href="#why-us"
                className="group border-2 border-white text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center">
                  تعرف على المزيد
                  <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20 border border-white/20"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-orange-400/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-200 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
              <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="moving-waves">
              <use href="#wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
              <use href="#wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use href="#wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use href="#wave" x="48" y="7" fill="#ffffff" />
            </g>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div id="why-us" className="py-24 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-lg bg-sky-100 text-sky-600 text-lg font-medium mb-4">
              لماذا آفاق أكاديمي؟
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">تجربة تعليمية فريدة</h2>
            <p className="text-lg text-gray-600">
              نقدم تجربة تعليمية متكاملة لطلاب المرحلة الثانوية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">رؤيتنا</h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  نسعى لأن نكون المنصة التعليمية الرائدة في الوطن العربي، نقدم تعليماً عالي الجودة يساعد الطلاب على التفوق والنجاح.
                </p>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">رسالتنا</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  توفير بيئة تعليمية متكاملة تجمع بين التكنولوجيا الحديثة وأفضل أساليب التدريس، لمساعدة طلابنا على تحقيق أهدافهم التعليمية.
                </p>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                  alt="طلاب يدرسون"
                  className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}