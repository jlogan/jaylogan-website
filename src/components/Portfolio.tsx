import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with custom WordPress integration, payment processing, and inventory management",
    tech: ["WordPress", "WooCommerce", "React", "PHP"],
    github: "#",
    demo: "#"
  },
  {
    title: "SaaS Dashboard",
    description: "Modern analytics dashboard built with React and Next.js, featuring real-time data visualization and user management",
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#"
  },
  {
    title: "Mobile App API",
    description: "RESTful API backend for mobile application with authentication, data sync, and push notifications",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis"],
    github: "#",
    demo: "#"
  },
  {
    title: "Content Management System",
    description: "Custom CMS with advanced content workflow, multi-language support, and media management",
    tech: ["WordPress", "Custom Plugins", "React", "MySQL"],
    github: "#",
    demo: "#"
  },
  {
    title: "Real-Time Chat Platform",
    description: "WebSocket-based chat application with rooms, direct messaging, and file sharing capabilities",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "#",
    demo: "#"
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content generation tool with custom prompts, templates, and export options",
    tech: ["React", "OpenAI API", "Next.js", "Supabase"],
    github: "#",
    demo: "#"
  }
];

const Portfolio = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-warm">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work showcasing full-stack capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col hover:border-accent/50 transition-all duration-300 hover-lift shadow-md">
                {/* Project thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl opacity-50">💼</div>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs px-2 py-1 bg-muted rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
