import { useState, useEffect } from 'react'
import Navbar from "./components/navigation/Navbar";
import HeroCarousel from "./components/index/HeroCarousel";
import './App.css'

export default function App() {
  const THEMES = {light: "retro", dark: "coffee"};

  const features = [
    {
      icon: "🧠",
      title: "Психологічні тести",
      description: "Глибокий аналіз особистості та поведінкових патернів з використанням науково обґрунтованих методик"
    },
    {
      icon: "📊", 
      title: "Діагностика",
      description: "Професійна оцінка психологічного стану з детальними звітами та рекомендаціями"
    },
    {
      icon: "📝",
      title: "Щоденник емоцій",
      description: "Відстеження настрою та емоційних змін з візуалізацією динаміки"
    },
    {
      icon: "🤖",
      title: "AI Асистент",
      description: "Персональні рекомендації на основі штучного інтелекту та вашого профілю"
    }
  ];
  
  const testimonials = [
    {
      name: "Марія Петренко",
      role: "Студентка психології",
      text: "ROZUMITY допомогла мені краще зрозуміти себе та свої емоції. Тепер я можу керувати своїм настроєм набагато ефективніше.",
      avatar: "👩‍🎓",
      rating: 5
    },
    {
      name: "Андрій Коваленко",
      role: "IT Менеджер",
      text: "Психологічні тести допомогли мені визначитися з кар'єрним шляхом та знайти баланс між роботою і життям.",
      avatar: "👨‍💼",
      rating: 5
    },
    {
      name: "Олена Сидорова",
      role: "Практикуючий психолог",
      text: "Рекомендую ROZUMITY своїм клієнтам як додатковий інструмент для самостійної роботи між сеансами.",
      avatar: "👩‍⚕️",
      rating: 5
    }
  ];


  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-yellow-400 ${i < rating ? 'opacity-100' : 'opacity-30'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative">
      < Navbar />
      < HeroCarousel />

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Можливості платформи
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексні інструменти для самопізнання та психологічного розвитку
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Platform */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Навіщо потрібна ROZUMITY?
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                    <span className="mr-3">✅</span>
                    Переваги платформи
                  </h3>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">🔬</span>
                      Науково обґрунтовані методики тестування
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">🤖</span>
                      Персональні рекомендації від AI
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">🔒</span>
                      Конфіденційність та безпека даних
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">🇺🇦</span>
                      Зручний інтерфейс українською мовою
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">📈</span>
                      Відстеження прогресу в часі
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200">
                  <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center">
                    <span className="mr-3">⚠️</span>
                    Важливі обмеження
                  </h3>
                  <ul className="space-y-3 text-amber-700">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">👨‍⚕️</span>
                      Не замінює професійну психологічну допомогу
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">💡</span>
                      Результати носять рекомендаційний характер
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">💯</span>
                      Потребує чесних відповідей для точності
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-2xl shadow-2xl text-white">
                <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6">Мета платформи</h3>
                  <p className="text-xl leading-relaxed mb-8 text-white/90">
                    Допомогти кожному краще зрозуміти себе, свої емоції, сильні та слабкі сторони. 
                    Через самопізнання до особистісного росту та психологічного благополуччя.
                  </p>
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold">10K+</div>
                      <div className="text-sm text-white/80">Користувачів</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">50+</div>
                      <div className="text-sm text-white/80">Тестів</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">99%</div>
                      <div className="text-sm text-white/80">Задоволених</div>
                    </div>
                  </div>
                  <button className="w-full bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Почати подорож самопізнання
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Відгуки користувачів
            </h2>
            <p className="text-xl text-gray-600">
              Що говорять про нас наші користувачі
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                ROZUMITY
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Психологічна платформа для самопізнання та особистісного розвитку. 
                Допомагаємо людям краще зрозуміти себе через науково обґрунтовані методики.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Послуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Психологічні тести</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Діагностика</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Щоденник емоцій</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Консультації</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Підтримка</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Про нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакти</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Допомога</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ROZUMITY. Всі права захищені.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}