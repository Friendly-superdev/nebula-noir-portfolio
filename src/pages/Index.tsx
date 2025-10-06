import StarBackground from '@/components/StarBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <StarBackground />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default Index;
