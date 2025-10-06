import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ai.engineer@example.com',
      href: 'mailto:ai.engineer@example.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ai-engineer',
      href: 'https://linkedin.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/ai-engineer',
      href: 'https://github.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null
    }
  ];

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, collaborations, or opportunities. 
              Feel free to reach out!
            </p>

            <form className="space-y-6">
              <div>
                <Input 
                  placeholder="Your Name"
                  className="bg-card/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="Your Email"
                  className="bg-card/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <Input 
                  placeholder="Subject"
                  className="bg-card/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message"
                  rows={6}
                  className="bg-card/50 border-border focus:border-primary resize-none"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-foreground">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="p-3 rounded-lg bg-primary/10">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors duration-300"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">
                Looking for collaboration?
              </h4>
              <p className="text-sm text-muted-foreground">
                I'm particularly interested in AI research, cutting-edge ML projects, 
                and opportunities to solve challenging real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
