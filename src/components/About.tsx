import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Jay</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With over <span className="text-primary font-semibold">25 years of experience</span> in 
              web technology, I've built my career on turning complex problems into elegant digital solutions. 
              From the early days of web development to today's cutting-edge frameworks, I've continuously 
              evolved my skills to stay at the forefront of technology.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My journey has taken me through <span className="text-secondary font-semibold">agencies, 
              startups, and independent projects</span>, where I've worn many hats—developer, architect, 
              project manager, and technical leader. This diverse experience gives me a unique perspective 
              on building products that not only work technically but also succeed in the real world.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm passionate about <span className="text-accent font-semibold">bridging the gap between 
              technical complexity and user needs</span>. Whether it's a custom WordPress solution, 
              a modern React application, or a full-stack platform, I focus on delivering solutions that 
              are scalable, maintainable, and aligned with business goals.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond the code, I'm someone who values clear communication, collaborative problem-solving, 
              and building products that people actually want to use. I'm always exploring new technologies 
              and approaches—currently excited about AI-assisted development and modern full-stack frameworks—
              while staying grounded in proven fundamentals.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-6 justify-center">
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <p className="text-sm text-muted-foreground">Problem Solver</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💡</div>
              <p className="text-sm text-muted-foreground">Innovator</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <p className="text-sm text-muted-foreground">Team Player</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <p className="text-sm text-muted-foreground">Fast Learner</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
