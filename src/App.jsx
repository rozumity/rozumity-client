import { useState, useEffect } from 'react'
import './App.css'

const THEMES = {
  light: "retro",
  dark: "coffee",
};

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || THEMES.light;
  });
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEMES.light ? THEMES.dark : THEMES.light));
  };

  const features = [
    {
      icon: "🧠",
      title: "Психологічні тести",
      description: "Глибокий аналіз особистості та поведінкових патернів"
    },
    {
      icon: "📊", 
      title: "Діагностика",
      description: "Професійна оцінка психологічного стану"
    },
    {
      icon: "📝",
      title: "Щоденник емоцій",
      description: "Відстеження настрою та емоційних змін"
    },
    {
      icon: "🤖",
      title: "AI Асистент",
      description: "Персональні рекомендації на основі ШІ"
    }
  ];

  const testimonials = [
    {
      name: "Марія Петренко",
      role: "Студентка",
      text: "ROZUMITY допомогла мені краще зрозуміти себе та свої емоції",
      avatar: "👩‍🎓"
    },
    {
      name: "Андрій Коваленко",
      role: "Менеджер",
      text: "Тести допомогли мені визначитися з кар'єрним шляхом",
      avatar: "👨‍💼"
    },
    {
      name: "Олена Сидорова",
      role: "Психолог",
      text: "Рекомендую своїм клієнтам для самостійної роботи",
      avatar: "👩‍⚕️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Navbar */}
      <div className="navbar bg-base-100/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-primary/20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-xl border border-primary/20">
              <li>
                <details>
                  <summary className="text-primary font-semibold">Опитування</summary>
                  <ul className="p-2 bg-gradient-to-r from-primary/10 to-secondary/10">
                    <li><a className="hover:bg-primary/20">Тестування</a></li>
                    <li><a className="hover:bg-primary/20">Анкетування</a></li>
                  </ul>
                </details>
              </li>
              <li><a className="hover:bg-secondary/20">Щоденник</a></li>
              <li><a className="hover:bg-accent/20">Діагностика</a></li>
              <li><a className="hover:bg-info/20">AI Assist</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ROZUMITY
          </a>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <details>
                <summary className="btn btn-ghost text-primary font-semibold hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20">
                  Опитування
                </summary>
                <ul className="p-2 bg-base-100 border border-primary/20 shadow-xl rounded-box w-40">
                  <li><a className="hover:bg-primary/10">Тестування</a></li>
                  <li><a className="hover:bg-primary/10">Анкетування</a></li>
                </ul>
              </details>
            </li>
            <li><a className="btn btn-ghost hover:bg-gradient-to-r hover:from-secondary/20 hover:to-accent/20">Щоденник</a></li>
            <li><a className="btn btn-ghost hover:bg-gradient-to-r hover:from-accent/20 hover:to-info/20">Діагностика</a></li>
            <li><a className="btn btn-ghost hover:bg-gradient-to-r hover:from-info/20 hover:to-success/20">AI Assist</a></li>
          </ul>
        </div>
        
        <div className="navbar-end">
          <button
            onClick={toggleTheme}
            className="btn btn-outline btn-sm mr-2"
            aria-label="Toggle theme"
          >
            {theme === THEMES.light ? "🌙" : "☀️"}
          </button>
          <a className="btn btn-primary bg-gradient-to-r from-primary to-secondary border-none">Увійти</a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Розуміти себе - це мистецтво
            </h1>
            <p className="text-xl mb-8 text-base-content/80 max-w-2xl mx-auto">
              ROZUMITY - це інноваційна психологічна платформа, що поєднує сучасні методи діагностики, 
              персональний підхід та штучний інтелект для вашого особистісного розвитку
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn btn-primary btn-lg bg-gradient-to-r from-primary to-secondary border-none shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                Розпочати тестування
              </button>
              <button className="btn btn-outline btn-lg hover:bg-gradient-to-r hover:from-accent/20 hover:to-info/20">
                Дізнатися більше
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Dock Carousel */}
      <div className="py-20 bg-gradient-to-r from-base-200/50 to-base-300/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Можливості платформи
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-primary/10">
                <div className="card-body text-center">
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="card-title justify-center text-primary">{feature.title}</h3>
                  <p className="text-base-content/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Platform */}
      <div className="py-20 bg-gradient-to-l from-secondary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Навіщо потрібна ROZUMITY?
              </h2>
              <div className="space-y-6">
                <div className="card bg-success/10 border border-success/20">
                  <div className="card-body">
                    <h3 className="card-title text-success">✅ Переваги</h3>
                    <ul className="space-y-2">
                      <li>• Науково обґрунтовані методики тестування</li>
                      <li>• Персональні рекомендації від AI</li>
                      <li>• Конфіденційність та безпека даних</li>
                      <li>• Зручний інтерфейс українською мовою</li>
                      <li>• Відстеження прогресу в часі</li>
                    </ul>
                  </div>
                </div>
                <div className="card bg-warning/10 border border-warning/20">
                  <div className="card-body">
                    <h3 className="card-title text-warning">⚠️ Обмеження</h3>
                    <ul className="space-y-2">
                      <li>• Не замінює професійну психологічну допомогу</li>
                      <li>• Результати носять рекомендаційний характер</li>
                      <li>• Потребує чесних відповідей для точності</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="card bg-gradient-to-br from-primary/20 to-secondary/20 shadow-2xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl mb-4">Мета платформи</h3>
                  <p className="text-lg leading-relaxed">
                    Допомогти кожному краще зрозуміти себе, свої емоції, сильні та слабкі сторони. 
                    Через самопізнання до особистісного росту та психологічного благополуччя.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Почати подорож</button>
                  </div>
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
      <footer className="footer footer-center p-10 bg-gradient-to-r from-primary/10 to-secondary/10 text-base-content border-t border-primary/20">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover hover:text-primary">Про нас</a>
          <a className="link link-hover hover:text-secondary">Контакти</a>
          <a className="link link-hover hover:text-accent">Політика конфіденційності</a>
          <a className="link link-hover hover:text-info">Умови використання</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="hover:text-primary transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a className="hover:text-secondary transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a className="hover:text-accent transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ROZUMITY - Психологічна платформа
          </p>
          <p>© 2024 - Всі права захищені</p>
        </aside>
      </footer>
    </div>
  );
}

export default App
