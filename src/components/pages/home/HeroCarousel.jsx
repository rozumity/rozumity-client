import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../buttons/ButtonPrimary';


const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      gradient: "from-violet-900 via-purple-800 to-indigo-900",
      title: "Розум і ти",
      subtitle: "Відкрийте свій внутрішній світ через психологічне тестування та самопізнання",
      cta: "Розпочати тестування",
      link: "/testing"
    },
    {
      gradient: "from-emerald-900 via-teal-800 to-cyan-900",
      title: "Щоденник емоцій",
      subtitle: "Відстежуйте свій настрій та емоційний стан кожен день для кращого самоконтролю",
      cta: "До щоденнику",
      link: "/diary"
    },
    {
      gradient: "from-orange-900 via-amber-800 to-yellow-900",
      title: "AI Асистент допоможе",
      subtitle: "Персональні рекомендації на основі ваших результатів та штучного інтелекту",
      cta: "Спробувати АІ",
      link: "/ai"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100 pointer-events-auto'
              : 'opacity-0 scale-100 pointer-events-none'
          }`}
        >
          <div className={`min-h-screen bg-gradient-to-br ${slide.gradient} flex items-center justify-center relative`}>
            <div key={slide.title} className="relative z-10 text-center px-4 max-w-6xl mx-auto animate-fade-in">
              <h1 className="font-primary-1 text-6xl md:text-8xl font-black mb-8 text-shadow-lg text-orange-100/95 italic">
                {slide.title}
              </h1>
              <p className="font-primary-2 text-xl md:text-2xl mb-6 max-w-3xl mx-auto drop-shadow-md leading-relaxed text-neutral-content/60 text-shadow-sm italic">
                {slide.subtitle}
              </p>
              <Link to={slide.link}>
                <ButtonPrimary text={slide.cta} size="xl" rounded="lg" textSize="3xl"/>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white shadow-xl scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;