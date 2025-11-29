import { motion } from "framer-motion";
import { Code2, Layers, Wrench, Brain, Rocket, Smartphone } from "lucide-react";
import { useState } from "react";

const skills = [
  {
    icon: Code2,
    title: "Custom WordPress Development",
    description: "Building powerful plugins and themes tailored to your needs",
    color: "primary"
  },
  {
    icon: Layers,
    title: "React Application Development",
    description: "Modern, performant web applications with React & Next.js",
    color: "secondary"
  },
  {
    icon: Wrench,
    title: "Technical Project Management",
    description: "From roadmap to deployment, keeping projects on track",
    color: "accent"
  },
  {
    icon: Rocket,
    title: "System Architecture",
    description: "Scalable, maintainable architecture for long-term success",
    color: "primary"
  },
  {
    icon: Brain,
    title: "Full-Stack Delivery",
    description: "End-to-end development from database to user interface",
    color: "secondary"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications with Flutter for iOS and Android",
    color: "accent"
  }
];

const Skills = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack expertise across modern web technologies and proven methodologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const isFlipped = flippedCards.has(index);
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-[250px]"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  className="relative w-full h-full cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  onHoverStart={() => toggleFlip(index)}
                  onHoverEnd={() => toggleFlip(index)}
                  onClick={() => toggleFlip(index)}
                >
                  {/* Front of card */}
                  <div 
                    className="absolute inset-0 bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 shadow-md"
                    style={{ 
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden"
                    }}
                  >
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <div className={`w-16 h-16 rounded-lg bg-${skill.color}/10 flex items-center justify-center mb-4 transition-transform`}>
                        <skill.icon className={`w-8 h-8 text-${skill.color}`} />
                      </div>
                      <h3 className="text-xl font-bold">{skill.title}</h3>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div 
                    className="absolute inset-0 bg-card border border-accent/50 rounded-xl p-6 shadow-md"
                    style={{ 
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  >
                    <div className="flex items-center justify-center h-full px-2">
                      <p className="text-muted-foreground text-center">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'WordPress', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'AWS', 'Git'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-muted/70 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
