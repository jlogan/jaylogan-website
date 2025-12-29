import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Smile, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "JayLogan.com",
    description: "Personal portfolio website showcasing 25+ years of web development expertise",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/jlogan/jaylogan-website",
    demo: "https://jaylogan.com",
    screenshot: "/screenshots/jaylogan-portfolio-website.png",
    alt: "JayLogan.com portfolio website homepage showing hero section with animated badges"
  },
  {
    title: "PNS Car Rental WordPress Theme",
    description: "Custom WordPress theme for car rental business with booking system integration",
    tech: ["WordPress", "PHP", "JavaScript", "CSS"],
    github: "https://github.com/jlogan/pns-cars-wp-theme",
    demo: "https://pnscars.com",
    screenshot: "/screenshots/pns-cars-wordpress-theme.png",
    alt: "PNS Cars car rental WordPress theme homepage with earnings dashboard"
  },
  {
    title: "Jason Black for Senate",
    description: "Campaign website for political candidate with donation integration and event management",
    tech: ["React", "TypeScript", "CSS"],
    github: "https://github.com/jlogan/jason-black",
    demo: "https://votejasonblack.org",
    screenshot: "/screenshots/jason-black-senate-campaign.png",
    alt: "Jason Black for State Senate campaign website homepage"
  },
  {
    title: "Genesis Learning Academy",
    description: "Educational institution website with course management and enrollment features",
    tech: ["WordPress", "PHP", "Custom Plugins"],
    github: "https://github.com/jlogan/genesis-learning-academy",
    demo: "https://genesislearningacademyofkennesaw.com",
    screenshot: "/screenshots/genesis-learning-academy-kennesaw.png",
    alt: "Genesis Learning Academy of Kennesaw homepage with classroom hero section"
  },
  {
    title: "Creations By Elo",
    description: "Portfolio website for a private chef showcasing culinary creations and services",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jlogan/creations-by-elo",
    demo: "https://creationsbyelo.com",
    screenshot: "/screenshots/creations-by-elo-portfolio.png",
    alt: "Creations By Elo private chef website homepage with video player and catering services"
  },
  {
    title: "Resend.com WordPress Plugin",
    description: "WordPress plugin for Resend email integration, available on WordPress.org",
    tech: ["WordPress", "PHP", "REST API"],
    github: "https://github.com/jlogan/resend-email-wordpress",
    demo: "https://wordpress.org/plugins/resend-email-integration",
    screenshot: "/screenshots/resend-wordpress-plugin.png",
    alt: "Resend email WordPress plugin settings page in WordPress admin dashboard"
  },
  {
    title: "Vote WadePadgett.com",
    description: "Political campaign website with voter information and donation capabilities",
    tech: ["React", "TypeScript", "CSS"],
    github: "https://github.com/jlogan/wade-padgett",
    demo: "https://wadepadgett.com",
    screenshot: "/screenshots/wade-padgett-campaign.png",
    alt: "Judge J. Wade Padgett campaign website homepage with professional portrait and re-election information"
  },
  {
    title: "WordPress Rental Car Booking Plugin",
    description: "Custom WordPress plugin for rental car booking and agreement management",
    tech: ["WordPress", "PHP", "JavaScript"],
    github: "https://github.com/jlogan/rental-car-agreements-wp-plugin",
    demo: "https://pnscars.com",
    screenshot: "/screenshots/rental-car-booking-plugin.png",
    alt: "WordPress rental car booking plugin vehicles management page in WordPress admin"
  }
];

const Portfolio = () => {
  const [showJayLoganModal, setShowJayLoganModal] = useState(false);

  // Floating animation for background elements
  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: [0.4, 0, 0.2, 1] as const
    }
  };

  const handleDemoClick = (project: typeof projects[0]) => {
    if (project.title === "JayLogan.com") {
      setShowJayLoganModal(true);
    } else {
      window.open(project.demo, '_blank');
    }
  };

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden bg-gradient-warm">
      {/* Animated background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating background elements */}
      <motion.div 
        animate={floatAnimation}
        className="absolute top-40 left-10 w-32 h-32 bg-accent/5 rounded-lg blur-2xl"
      />
      <motion.div 
        animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 2 } }}
        className="absolute bottom-40 right-10 w-40 h-40 bg-primary/5 rounded-lg blur-2xl"
      />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Portfolio</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Development & <span className="gradient-text">Design</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Below you'll find my development work with links to GitHub repositories, and my UI/UX design portfolio on Dribbble.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Github className="w-4 h-4" />
              <span>GitHub links show my code</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Palette className="w-4 h-4" />
              <span>Dribbble shows my design work</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <motion.div 
                className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-xl relative"
                whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              >
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-300 rounded-xl" />
                
                {/* Project thumbnail with screenshot */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    {project.screenshot ? (
                      <img 
                        src={project.screenshot} 
                        alt={project.alt || `${project.title} website screenshot`}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                        <div className="relative z-10 text-3xl opacity-30">💼</div>
                      </div>
                    )}
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                  
                  {/* Overlay badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-accent border border-accent/30"
                  >
                    #{index + 1}
                  </motion.div>
                </div>

                {/* Project info */}
                <div className="p-6 flex-1 flex flex-col relative z-10">
                  <motion.h3 
                    className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span 
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.08 + techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="text-xs px-2 py-1 bg-muted rounded-md hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 mt-auto">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full group/btn"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button 
                        size="sm" 
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group/btn"
                        onClick={() => handleDemoClick(project)}
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                        Demo
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Design Portfolio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-premium">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-pink-500" />
              </div>
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              UI/UX Design Portfolio
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore my design work including user interfaces, wireframes, and design systems. 
              See how I approach user experience and visual design.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold group/btn"
                onClick={() => window.open('https://dribbble.com/jaylogan', '_blank')}
              >
                <Palette className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                View Design Work on Dribbble
                <ExternalLink className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Friendly Modal for JayLogan.com */}
      <Dialog open={showJayLoganModal} onOpenChange={setShowJayLoganModal}>
        <DialogContent className="sm:max-w-[500px] border-accent/30 bg-card/95 backdrop-blur-sm">
          <DialogHeader>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center"
            >
              <Smile className="w-10 h-10 text-accent" />
            </motion.div>
            <DialogTitle className="text-center text-2xl font-bold">
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                You're already on it! 😊
              </motion.span>
            </DialogTitle>
            <DialogDescription className="text-center pt-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3"
              >
                <p className="text-base text-foreground/80">
                  You're currently viewing the very site you're asking about! 
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center gap-2 pt-2"
                >
                  <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                  <span className="text-sm text-muted-foreground italic">
                    Pretty meta, right?
                  </span>
                  <Sparkles className="w-5 h-5 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-sm text-muted-foreground pt-2"
                >
                  Feel free to explore around and see what I've built. 
                  <br />
                  Thanks for checking it out! 🚀
                </motion.p>
              </motion.div>
            </DialogDescription>
          </DialogHeader>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center pt-4"
          >
            <Button
              onClick={() => setShowJayLoganModal(false)}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
            >
              Got it, thanks!
            </Button>
          </motion.div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
