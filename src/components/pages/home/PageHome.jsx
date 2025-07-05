import HeroCarousel from "./HeroCarousel";
import Features from "./Features";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative">
      <HeroCarousel />
      <Features />
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
                    Допомогти кожному краще зрозуміти себе, свої емоції, сильні
                    та слабкі сторони. Через самопізнання до особистісного росту
                    та психологічного благополуччя.
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
      <Testimonials />
    </div>
  );
}

export default HomePage;