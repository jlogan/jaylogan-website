import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import jayPhoto from "@/assets/jay-logan.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <span className="text-accent text-sm font-semibold tracking-wider uppercase border border-accent/30 px-4 py-2 rounded-full bg-accent/5">
                Available for Projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-display leading-tight"
            >
              Web Technologist &{" "}
              <span className="gradient-text">Digital Problem Solver</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-muted-foreground font-body"
            >
              25+ years building web & mobile applications end-to-end. From concept to launch, 
              I transform ideas into powerful digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button size="lg" className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-primary/50 hover:bg-primary/10 hover:border-primary"
                onClick={() => window.open('https://github.com/jlogan', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                Explore GitHub
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-8 pt-8 border-t border-border/50"
            >
              <div>
                <div className="text-3xl font-bold text-accent">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-3xl opacity-20" />
              
              {/* Photo container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-accent/30 bg-card shadow-premium hover-lift">
                <img 
                  src={jayPhoto} 
                  alt="Jay Logan" 
                  className="w-full h-full object-cover"
                />
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/20" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold shadow-premium"
              >
                🚀 Full-Stack Ready
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
