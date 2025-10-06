import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior AI Engineer',
      company: 'TechVision AI',
      period: '2022 - Present',
      description: 'Leading the development of computer vision systems for autonomous vehicles, managing a team of 5 ML engineers. Architected and deployed real-time object detection models achieving 95% accuracy at 30 FPS.',
      achievements: [
        'Reduced model inference time by 40% through optimization and quantization',
        'Built MLOps pipeline processing 10M+ images daily',
        'Led research initiative resulting in 2 published papers'
      ]
    },
    {
      title: 'AI Engineer',
      company: 'DataStream Solutions',
      period: '2021 - 2022',
      description: 'Developed NLP solutions for customer service automation, implementing transformer-based models for intent classification and sentiment analysis.',
      achievements: [
        'Deployed chatbot system reducing response time by 60%',
        'Fine-tuned BERT models achieving 92% F1 score',
        'Established model monitoring and A/B testing framework'
      ]
    },
    {
      title: 'Machine Learning Engineer',
      company: 'InnovateLabs',
      period: '2020 - 2021',
      description: 'Built recommendation systems and predictive models for e-commerce platform serving 2M+ users. Implemented collaborative filtering and deep learning approaches.',
      achievements: [
        'Increased recommendation CTR by 35%',
        'Developed real-time feature engineering pipeline',
        'Migrated ML infrastructure to Kubernetes'
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-card/30" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mb-12" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 border-l-2 border-primary/30 hover:border-primary/60 transition-colors duration-300"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />
              
              <div className="mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-3">
                  <Briefcase className="h-4 w-4" />
                  <span className="font-semibold text-primary">{exp.company}</span>
                  <span className="text-sm">•</span>
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li 
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
