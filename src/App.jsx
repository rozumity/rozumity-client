import { useState, useEffect } from 'react'
import './App.css'

const THEMES = {
  light: "retro",
  dark: "coffee",
};

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || THEMES.light);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEMES.light ? THEMES.dark : THEMES.light));
  };

  const heroSlides = [
    {
      gradient: "from-amber-900 via-orange-800 to-yellow-700",
      title: "Розуміти себе - це мистецтво",
      subtitle: "Відкрийте свій внутрішній світ через психологічне тестування",
      cta: "Розпочати подорож"
    },
    {
      gradient: "from-stone-800 via-amber-700 to-orange-600", 
      title: "Щоденник емоцій",
      subtitle: "Відстежуйте свій настрій та емоційний стан кожен день",
      cta: "Вести щоденник"
    },
    {
      gradient: "from-yellow-800 via-amber-600 to-orange-500",
      title: "AI Асистент допоможе",
      subtitle: "Персональні рекомендації на основі ваших результатів",
      cta: "Спробувати AI"
    }
  ];

  const features = [
    { icon: "�", title: "Психологічні тести", desc: "Глибокий аналіз особистості" },
    { icon: "📊", title: "Діагностика", desc: "Професійна оцінка стану" },
    { icon: "📝", title: "Щоденник", desc: "Відстеження емоцій" },
    { icon: "🤖", title: "AI Assist", desc: "Персональні рекомендації" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);



  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Navbar */}
      <div className="navbar bg-gradient-to-r from-amber-100/90 to-orange-100/90 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b-2 border-amber-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-amber-50 rounded-box mt-3 w-52 p-2 shadow-2xl border-2 border-amber-200">
              <li>
                <details>
                  <summary className="text-amber-800 font-bold">Опитування</summary>
                  <ul className="p-2 bg-gradient-to-r from-amber-200 to-orange-200">
                    <li><a className="hover:bg-amber-300">Тестування</a></li>
                    <li><a className="hover:bg-amber-300">Анкетування</a></li>
                  </ul>
                </details>
              </li>
              <li><a className="hover:bg-orange-200">Щоденник</a></li>
              <li><a className="hover:bg-yellow-200">Діагностика</a></li>
              <li><a className="hover:bg-amber-200">AI Assist</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-black bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-600 bg-clip-text text-transparent">
            ROZUMITY
          </a>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <details>
                <summary className="btn btn-ghost font-bold text-amber-800 hover:bg-gradient-to-r hover:from-amber-200 hover:to-orange-200">
                  Опитування
                </summary>
                <ul className="p-2 bg-amber-50 border-2 border-amber-200 shadow-2xl rounded-box w-40">
                  <li><a className="hover:bg-amber-200">Тестування</a></li>
                  <li><a className="hover:bg-amber-200">Анкетування</a></li>
                </ul>
              </details>
            </li>
            <li><a className="btn btn-ghost hover:bg-gradient-to-r hover:from-orange-200 hover:to-yellow-200">Щоденник</a></li>
            <li><a className="btn btn-ghost hover:bg-gradient-to-r hover:from-yellow-200 hover:to-amber-200">Діагностика</a></li>
            <li><a className="btn btn-ghost hover:bg-gradient-to-r hover:from-amber-200 hover:to-orange-300">AI Assist</a></li>
          </ul>
        </div>
        
        <div className="navbar-end">
          <button onClick={toggleTheme} className="btn btn-outline btn-sm mr-2 border-2 border-amber-600 text-amber-800 hover:bg-amber-600 hover:text-white">
            {theme === THEMES.light ? "🌙" : "☀️"}
          </button>
          <a className="btn bg-gradient-to-r from-amber-600 to-orange-600 text-white border-none hover:from-amber-700 hover:to-orange-700 shadow-lg">Увійти</a>
        </div>
      </div>

      {/* Hero Carousel */}
      <div className="hero min-h-screen relative overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div className={`hero min-h-screen bg-gradient-to-br ${slide.gradient}`}>
              <div className="hero-overlay bg-black/20"></div>
              <div className="hero-content text-center text-white relative z-10">
                <div className="max-w-4xl">
                  <h1 className="text-7xl font-black mb-6 drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <p className="text-2xl mb-8 max-w-2xl mx-auto drop-shadow-lg opacity-90">
                    {slide.subtitle}
                  </p>
                  <button className="btn btn-lg bg-white/20 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-amber-800 shadow-2xl transform hover:scale-110 transition-all">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white shadow-lg scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-600 bg-clip-text text-transparent">
            Можливості платформи
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card bg-gradient-to-br from-white via-amber-50 to-orange-50 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 border-2 border-amber-200">
                <div className="card-body text-center">
                  <div className="text-7xl mb-6">{feature.icon}</div>
                  <h3 className="card-title justify-center text-amber-800 text-xl font-bold">{feature.title}</h3>
                  <p className="text-amber-700">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Platform */}
      <div className="py-20 bg-gradient-to-l from-orange-200 via-amber-200 to-yellow-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-orange-800 to-amber-700 bg-clip-text text-transparent">
                Навіщо ROZUMITY?
              </h2>
              <div className="space-y-6">
                <div className="card bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-300 shadow-xl">
                  <div className="card-body">
                    <h3 className="card-title text-green-800 text-xl">✅ Переваги</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• Науково обґрунтовані методики</li>
                      <li>• AI рекомендації</li>
                      <li>• Конфіденційність даних</li>
                      <li>• Український інтерфейс</li>
                    </ul>
                  </div>
                </div>
                <div className="card bg-gradient-to-br from-red-100 to-orange-100 border-2 border-red-300 shadow-xl">
                  <div className="card-body">
                    <h3 className="card-title text-red-800 text-xl">⚠️ Обмеження</h3>
                    <ul className="space-y-2 text-red-700">
                      <li>• Не замінює лікаря</li>
                      <li>• Рекомендаційний характер</li>
                      <li>• Потребує чесності</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-300 shadow-3xl border-2 border-amber-400">
              <div className="card-body">
                <h3 className="card-title text-3xl mb-6 text-amber-900">Мета платформи</h3>
                <p className="text-xl leading-relaxed text-amber-800">
                  Допомогти кращому самопізнанню через сучасні психологічні методики та штучний інтелект.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn bg-amber-600 text-white hover:bg-amber-700 border-none shadow-lg">Почати</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gradient-to-r from-accent/5 via-info/5 to-success/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-accent to-info bg-clip-text text-transparent">
            Відгуки користувачів
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card bg-base-100 shadow-xl border border-accent/20">
                <div className="card-body">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm opacity-70">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-gradient-to-r from-amber-800 via-orange-800 to-yellow-700 text-white">
        <nav className="grid grid-flow-col gap-6">
          <a className="link link-hover text-amber-100 hover:text-white">Про нас</a>
          <a className="link link-hover text-amber-100 hover:text-white">Контакти</a>
          <a className="link link-hover text-amber-100 hover:text-white">Конфіденційність</a>
        </nav>
        <aside>
          <p className="font-black text-2xl text-white">ROZUMITY</p>
          <p className="text-amber-200">© 2024 - Психологічна платформа</p>
        </aside>
      </footer>
    </div>
  );
}

export default App
