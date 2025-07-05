const Testimonials = () => {
  const testimonials = [
    {
      name: "Марія Петренко",
      role: "Студентка психології",
      text: "ROZUMITY допомогла мені краще зрозуміти себе та свої емоції. Тепер я можу керувати своїм настроєм набагато ефективніше.",
      avatar: "👩‍🎓",
      rating: 5,
    },
    {
      name: "Андрій Коваленко",
      role: "IT Менеджер",
      text: "Психологічні тести допомогли мені визначитися з кар'єрним шляхом та знайти баланс між роботою і життям.",
      avatar: "👨‍💼",
      rating: 5,
    },
    {
      name: "Олена Сидорова",
      role: "Практикуючий психолог",
      text: "Рекомендую ROZUMITY своїм клієнтам як додатковий інструмент для самостійної роботи між сеансами.",
      avatar: "👩‍⚕️",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-yellow-400 ${
          i < rating ? "opacity-100" : "opacity-30"
        }`}
      >
        ⭐
      </span>
    ));
  };

  return (
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
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      {testimonial.name}
                    </h3>
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
  )
}

export default Testimonials