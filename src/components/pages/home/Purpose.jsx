const Purpose = () => {
  return (
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
  )
}

export default Purpose