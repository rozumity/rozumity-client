import { useState } from 'react';
import ThemeController from "./ThemeController";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-l from-accent to-info bg-clip-text text-transparent text-shadow-sm">
                ROZUMITY
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="btn border-0 font-bold font-large bg-gradient-to-l from-info to-accent bg-clip-text text-transparent flex items-center text-shadow-sm shadow-sm">
                  <span>Опитування</span>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">Тестування</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">Анкетування</a>
                  </div>
                </div>
              </div>
              <a href="#" className="btn border-0 font-bold bg-gradient-to-r from-info to-accent bg-clip-text text-transparent shadow-sm text-shadow-sm shadow-transparent">Щоденник</a>
              <a href="#" className="btn border-0 font-bold bg-gradient-to-l from-info to-accent bg-clip-text text-transparent shadow-sm text-shadow-sm shadow-transparent">Діагностика</a>
              <a href="#" className="btn border-0 font-bold bg-gradient-to-r from-info to-accent bg-clip-text text-transparent shadow-sm text-shadow-sm shadow-transparent">AI Допомога</a>
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-700 hover:text-purple-600 font-large transition-colors">
                <ThemeController />
              </button>
              <button className="btn border-info border-t-0 font-bold bg-gradient-to-b from-info to-accent text-white rounded-full font-large shadow-lg text-shadow-lg">
                УВІЙТИ
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-info hover:text-accent transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
        <div className="md:hidden shadow-lg">
            <div className="px-4 py-4 space-y-2 text-right">
            {/* Dropdown for "Опитування" */}
            <details className="group">
                <summary className="cursor-pointer font-bold text-lg py-2 px-4 text-info">
                    Опитування
                </summary>
                <div className="pl-4 pt-2 space-y-1">
                <a href="#" className="block px-4 py-2 text-info font-bold hover:bg-purple-100 hover:text-purple-600 rounded-lg transition-colors">
                    Тестування
                </a>
                <a href="#" className="block px-4 py-2 text-info font-bold hover:bg-purple-100 hover:text-purple-600 rounded-lg transition-colors">
                    Анкетування
                </a>
                </div>
            </details>

            <a href="#" className="block px-4 py-2 font-bold text-lg text-info rounded-lg hover:bg-purple-50 transition-colors">
                Щоденник
            </a>
            <a href="#" className="block px-4 py-2 font-bold text-lg text-info rounded-lg hover:bg-purple-50 transition-colors">
                Діагностика
            </a>
            <a href="#" className="block px-4 py-2 font-bold text-lg text-info rounded-lg hover:bg-purple-50 transition-colors">
                AI Допомога
            </a>

            <div className="space-y-3">
                <ThemeController />
                <button className="w-full px-6 py-2 font-bold bg-gradient-to-b from-info to-accent text-white rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg">
                УВІЙТИ
                </button>
            </div>
            </div>
        </div>
        )}
      </nav>
  );
};

export default Navbar;