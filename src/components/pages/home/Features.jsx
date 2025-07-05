const Features = () => {
  const features = [
    {
      icon: "🧠",
      title: "Психологічні тести",
      description:
        "Глибокий аналіз особистості та поведінкових патернів з використанням науково обґрунтованих методик",
    },
    {
      icon: "📊",
      title: "Діагностика",
      description:
        "Професійна оцінка психологічного стану з детальними звітами та рекомендаціями",
    },
    {
      icon: "📝",
      title: "Щоденник емоцій",
      description:
        "Відстеження настрою та емоційних змін з візуалізацією динаміки",
    },
    {
      icon: "🤖",
      title: "AI Асистент",
      description:
        "Персональні рекомендації на основі штучного інтелекту та вашого профілю",
    },
  ];
  return (
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
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
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
  )
}

export default Features