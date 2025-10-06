import { Brain, Code, Database, GitBranch, Layers, Network, Sparkles, Zap, BookOpen, Cpu } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Brain,
      title: 'Deep Learning',
      description: 'PyTorch, TensorFlow, Transformers',
    },
    {
      icon: Network,
      title: 'Computer Vision',
      description: 'Object Detection, Segmentation, GANs',
    },
    {
      icon: Sparkles,
      title: 'NLP & LLMs',
      description: 'BERT, GPT, Fine-tuning, RAG',
    },
    {
      icon: Code,
      title: 'Python & ML Ops',
      description: 'Python, Docker, Kubernetes, CI/CD',
    },
    {
      icon: Database,
      title: 'Big Data',
      description: 'Spark, Hadoop, Data Pipelines',
    },
    {
      icon: Cpu,
      title: 'Model Optimization',
      description: 'Quantization, Pruning, ONNX',
    },
    {
      icon: Layers,
      title: 'Cloud & Scale',
      description: 'AWS, GCP, Azure, Distributed Training',
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Git, DVC, Model Registry',
    },
    {
      icon: Zap,
      title: 'API Development',
      description: 'FastAPI, Flask, REST, GraphQL',
    },
    {
      icon: BookOpen,
      title: 'Research',
      description: 'Paper Implementation, Experimentation',
    },
  ];

  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mb-12" />

        <div className="max-w-3xl mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Senior AI Engineer with 5 years of experience architecting and deploying production-grade 
            machine learning systems. Specialized in building scalable AI solutions that drive real business 
            impact, from research to deployment. Proven track record in computer vision, NLP, and MLOps, 
            with experience leading cross-functional teams to deliver innovative AI products.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My approach combines deep technical expertise with pragmatic engineering practices, ensuring 
            models not only achieve state-of-the-art performance but also scale reliably in production 
            environments serving millions of users.
          </p>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-foreground">Technical Skills</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <skill.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-sm font-semibold mb-2 text-foreground">
                {skill.title}
              </h4>
              <p className="text-xs text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
