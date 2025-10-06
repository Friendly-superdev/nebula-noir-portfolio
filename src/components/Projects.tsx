import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Neural Vision System',
      description: 'Advanced computer vision model for real-time object detection and tracking with 98% accuracy',
      technologies: ['PyTorch', 'OpenCV', 'CUDA', 'Docker'],
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=400&fit=crop',
    },
    {
      title: 'NLP Sentiment Analyzer',
      description: 'Transformer-based sentiment analysis system processing millions of texts daily',
      technologies: ['BERT', 'TensorFlow', 'FastAPI', 'Redis'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    },
    {
      title: 'Predictive Analytics Engine',
      description: 'Machine learning pipeline for forecasting and anomaly detection in time-series data',
      technologies: ['Scikit-learn', 'XGBoost', 'MLflow', 'Airflow'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    },
    {
      title: 'Conversational AI Assistant',
      description: 'GPT-powered chatbot with context-aware responses and multi-turn conversations',
      technologies: ['OpenAI', 'LangChain', 'Vector DB', 'React'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    },
    {
      title: 'AutoML Platform',
      description: 'Automated machine learning platform for rapid model development and deployment',
      technologies: ['AutoKeras', 'Kubernetes', 'PostgreSQL', 'React'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    },
    {
      title: 'Recommendation System',
      description: 'Collaborative filtering system serving personalized content to 5M+ users',
      technologies: ['PyTorch', 'Redis', 'Elasticsearch', 'AWS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    },
  ];

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A selection of AI projects showcasing expertise in machine learning, deep learning, and production systems
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 cosmic-glow hover:cosmic-glow-intense group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary"
                      className="bg-secondary/50 text-foreground border border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="hover:bg-primary/10 hover:text-primary"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="hover:bg-primary/10 hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
