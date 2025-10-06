import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center animate-slide-up">
        {/* Avatar */}
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="absolute inset-0 rounded-full cosmic-glow-intense animate-glow" />
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=ai-engineer"
              alt="AI Engineer Avatar"
              className="w-32 h-32 rounded-full border-4 border-primary/50 relative z-10 bg-card"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent animate-float">
          Senior AI Engineer
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Crafting Intelligent Solutions
        </p>

        <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
          5 years of experience building cutting-edge AI systems, machine learning models, and intelligent applications
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="cosmic-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/50 hover:bg-primary/10 hover:border-primary"
          >
            View Projects
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-primary/10 hover:text-primary transition-all"
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-primary/10 hover:text-primary transition-all"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-primary/10 hover:text-primary transition-all"
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
