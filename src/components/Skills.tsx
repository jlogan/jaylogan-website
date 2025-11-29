import { motion } from "framer-motion";
import { Code2, Layers, Wrench, Sparkles, Brain, Rocket, Smartphone, Palette, Briefcase, UserCog } from "lucide-react";

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
    description: "Cross-platform mobile apps with Flutter and React Native",
    color: "accent"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design and prototyping using Figma",
    color: "primary"
  },
  {
    icon: Briefcase,
    title: "Product Designer & Owner",
    description: "Strategic product design and ownership from concept to market",
    color: "secondary"
  },
  {
    icon: UserCog,
    title: "Fractional CTO Services",
    description: "Strategic technical leadership on a flexible, part-time basis",
    color: "accent"
  }
];

const Skills = () => {
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
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-accent/50 transition-all duration-300 hover-lift shadow-md">
                <div className={`w-12 h-12 rounded-lg bg-${skill.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <skill.icon className={`w-6 h-6 text-${skill.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            </motion.div>
          ))}
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
            {[
              'AWS',
              'ChatGPT',
              'Claude',
              'CodeIgniter',
              'Cursor',
              'Digital Ocean',
              'Figma',
              'Flutter',
              'Git',
              'GitHub Copilot',
              'Laravel',
              'MongoDB',
              'Next.js',
              'Node.js',
              'PHP',
              'PostgreSQL',
              'React',
              'React Native',
              'Supabase',
              'Tailwind CSS',
              'TypeScript',
              'Vercel',
              'WordPress',
              'Xcode'
            ].map((tech) => (
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
