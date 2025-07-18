import HeroCarousel from "./HeroCarousel";
import Features from "./Features";
import Testimonials from "./Testimonials";
import About from "./About";
import Purpose from "./Purpose";
import TitlePrimaryDefault from "../../titles/TitlePrimaryDefault";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative">
      <HeroCarousel />
      <Features />
      {/* About Platform */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TitlePrimaryDefault title="Навіщо потрібно РОЗУМІТИ?"/>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <About />
            <Purpose />
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
}

export default HomePage;