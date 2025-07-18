const About = () => {

  return (
    <div className="bg-gradient-to-br">
              <h2 className="font-primary-1 text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Навіщо потрібно ROZUMITY?
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-secondary to-success p-8 rounded-2xl border border-green-200">
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
  )
}

export default About