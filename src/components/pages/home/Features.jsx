import TitlePrimaryDefault from '../../titles/TitlePrimaryDefault';
import CaldholderDefault from '../../cards/cardholders/CaldholderDefault';

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
      <div className="py-24 bg-gradient-to-b from-base-100 to-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TitlePrimaryDefault title="Можливості платформи" desc="Комплексні інструменти для самопізнання та психологічного розвитку" />
          <CaldholderDefault features={ features }/>
        </div>
      </div>
  )
}

export default Features