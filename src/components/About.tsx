import { Brain, Code, Sparkles } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
  const skills = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Deep expertise in neural networks, computer vision, and NLP',
    },
    {
      icon: Code,
      title: 'AI Engineering',
      description: 'Production-ready AI systems with scalable architectures',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge AI research and applications',
    },
  ];

  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 cosmic-glow hover:cosmic-glow-intense"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <skill.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {skill.title}
              </h3>
              <p className="text-muted-foreground">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/50 border-primary/20">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As a Senior AI Engineer with 5 years of experience, I specialize in developing 
              intelligent systems that solve complex real-world problems. My expertise spans 
              across deep learning, natural language processing, computer vision, and MLOps.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about staying at the forefront of AI innovation, constantly exploring 
              new architectures and methodologies to build more efficient and powerful AI solutions. 
              My work has contributed to production systems serving millions of users.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
