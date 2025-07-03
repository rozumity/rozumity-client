import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const THEMES = {
  light: "retro",
  dark: "coffee",
};

function App() {

  const [count, setCount] = useState(0);
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
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4 text-center relative">
      {/* Кнопка перемикання теми */}
      <button
        onClick={toggleTheme}
        className="btn btn-outline btn-sm absolute top-4 right-4"
        aria-label="Toggle theme"
      >
        {theme === THEMES.light ? "Темна тема" : "Світла тема"}
      </button>

      {/* Заголовок */}
      <h1 className="text-5xl font-bold mb-6">Розуміти</h1>
      <h2 className="text-xl mb-10 max-w-xl">психологічна платформа, яка тебе розуміє</h2>

      {/* Опис */}
      <p className="mb-8 max-w-lg text-lg">
        На платформі ти можеш проходити психологічне тестування, щоб краще розуміти себе.
        <br />
        Ведення особистого щоденника та інші корисні функції з’являться незабаром.
      </p>

      {/* Кнопка ознайомлення з тестами */}
      <button className="btn btn-primary btn-lg">Ознайомитися з тестами</button>
    </div>
  );
}

export default App
