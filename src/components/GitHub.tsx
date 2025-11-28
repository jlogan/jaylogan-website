import { motion } from "framer-motion";
import { Github, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

const repos = [
  {
    name: "react-ecommerce-template",
    description: "Modern e-commerce template built with React and Tailwind CSS",
    stars: 234,
    forks: 45,
    language: "TypeScript"
  },
  {
    name: "wordpress-api-toolkit",
    description: "Comprehensive toolkit for working with WordPress REST API",
    stars: 189,
    forks: 32,
    language: "JavaScript"
  },
  {
    name: "nextjs-saas-starter",
    description: "Production-ready SaaS starter with authentication and payments",
    stars: 312,
    forks: 67,
    language: "TypeScript"
  },
  {
    name: "node-microservices-boilerplate",
    description: "Scalable microservices architecture with Node.js and Docker",
    stars: 156,
    forks: 28,
    language: "JavaScript"
  }
];

const GitHub = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
            <Github className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Open Source <span className="gradient-text">Contributions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            I publish most of my recent work on GitHub. Explore the code, clone projects, 
            and see how I build.
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="border-accent/50 hover:bg-accent/10 hover:border-accent"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Repositories
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-accent/50 transition-all duration-300 cursor-pointer hover-lift shadow-md">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                    {repo.name}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-muted rounded-md">
                    {repo.language}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4">{repo.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {repo.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {repo.forks}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full shadow-md">
            <span className="text-muted-foreground">Total contributions:</span>
            <span className="text-2xl font-bold text-accent">1,247+</span>
            <span className="text-muted-foreground">in the last year</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;
