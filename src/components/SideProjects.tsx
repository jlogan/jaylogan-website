import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  name: string;
  link: string;
  summary: string;
  problem: string;
  solution: string;
  technologies?: string[];
}

const projects: Project[] = [
  {
    name: "pymu",
    link: "https://pymu.app",
    summary: "A mobile app for pooling money, tracking contributions, and distributing payouts transparently.",
    problem: "Planning group trips and managing shared expenses was frustrating and unreliable. Collecting money from family or friends required constant reminders, manual tracking, and trust that everyone paid their share. Paying out winners for fantasy football leagues had the same issue: tracking contributions and sending payouts manually.",
    solution: "pymu.app allows groups to pool money in one place, track who has contributed, and automatically distribute funds when the pool is complete. It removes the friction and awkwardness from shared finances while keeping everything transparent.",
    technologies: ["React Native", "Stripe", "Node.js", "AWS"]
  },
  {
    name: "Check To Check",
    link: "https://checktocheck.app",
    summary: "A personal finance management tool for tracking payments, bills, and payroll allocation.",
    problem: "After managing personal finances using a Google Sheet for over 15 years, there was a need for a cleaner way to track payments and monitor bills. Spreadsheets worked, but as a database-focused developer, a more structured approach was needed.",
    solution: "Check To Check was built to provide a collaborative finance management tool. It allows working directly with an accountant who can log in and help allocate payroll to the necessary bills and accounts, making personal finance management more organized and transparent.",
    technologies: ["React", "Supabase"]
  },
  {
    name: "Brogrammers Agency",
    link: "https://brogrammers.agency",
    summary: "A small digital agency created to scale freelance work and train new developers and project managers.",
    problem: "Freelance demand grew beyond what one person could realistically manage. At the same time, there was a need to train a family member in real-world digital skills without sacrificing client quality or professionalism.",
    solution: "brogrammers.agency was created as a structured agency environment where work could be systematized, clients could be served consistently, and new team members could be trained using real projects, tools, and processes."
  },
  {
    name: "Essistants Agency",
    link: "https://essistants.agency",
    summary: "A virtual assistant training and placement service built to support growing digital agencies.",
    problem: "As brogrammers.agency scaled, administrative work became a bottleneck. Hiring reliable, trained assistants was difficult, and onboarding took significant time away from billable work.",
    solution: "essistants.agency started with a single assistant and evolved into a structured training and placement service. Today, agencies pay for dedicated, trained resources who integrate directly into their existing workflows and tools."
  },
  {
    name: "The Luxury Escape",
    link: "https://theluxuryescapemanila.com",
    summary: "A small portfolio of short-term rentals that double as workspaces for distributed teams.",
    problem: "Frequent travel to the Philippines for recruiting and training created a need for reliable housing and backup workspaces. Local weather and infrastructure issues also meant team members occasionally needed safe, stable places to work.",
    solution: "A set of condos was acquired to support team travel and provide temporary workspaces. When not in use for training or operations, the units are listed as short-term rentals. The website exists to showcase and manage these properties."
  },
  {
    name: "JoloCRM",
    link: "https://gojolo.io",
    summary: "A custom-built, multi-tenant CRM and operations platform designed around real agency workflows.",
    problem: "Running multiple agencies required juggling too many SaaS tools for CRM, project management, invoicing, sales pipelines, customer support, and internal communication. Costs and complexity kept increasing, and none of the tools matched how work was actually being done.",
    solution: "JoloCRM was built as a centralized platform tailored to a specific management style. It handles projects, CRM, invoicing, sales, support, email, and appointments in one system. It is used internally and when brought on as a technical director for other agencies.",
    technologies: ["Laravel", "Vue", "PostgreSQL", "Email and calendar integrations"]
  },
  {
    name: "Links For Bio",
    link: "https://linksforb.io",
    summary: "A lightweight, free link-in-bio tool with centralized management and click tracking.",
    problem: "Clients needed simple \"link in bio\" pages for social media, but managing updates and tracking performance across tools was inefficient. Existing solutions were either overkill or difficult to manage at scale.",
    solution: "linksforb.io provides a simple way to create and manage link pages from one interface while tracking clicks and performance. It allows quick updates without touching multiple platforms.",
    technologies: ["Next.js", "Tailwind CSS", "Analytics integrations"]
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="min-w-[320px] md:min-w-[380px] snap-start"
    >
      <Card className="h-full bg-card/50 border-border/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
        <CardHeader className="pb-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.name}
            </h3>
          </a>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.summary}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div>
              <h4 className="text-xs font-medium text-primary/80 uppercase tracking-wide mb-1">Problem</h4>
              <p className={`text-sm text-muted-foreground leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
                {project.problem}
              </p>
            </div>
            
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xs font-medium text-primary/80 uppercase tracking-wide mb-1">Solution</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>
            )}
          </div>

          {project.technologies && isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="pt-2"
            >
              <h4 className="text-xs font-medium text-primary/80 uppercase tracking-wide mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="text-xs bg-secondary/50 text-secondary-foreground/80 border-none"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          )}

          <div className="flex items-center justify-between pt-2 border-t border-border/20">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-muted-foreground hover:text-foreground px-0"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </Button>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary/80 hover:text-primary transition-colors"
            >
              View Project
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SideProjects = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Side Projects with a Purpose
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm an entrepreneur by necessity, not by title.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Each project below started as a problem I personally needed to solve, whether that was pooling money for a family trip, managing agency workflows, or scaling help without burning out. Over time, many of those solutions grew into products and businesses that others now use too.
          </p>
        </motion.div>

        {/* Desktop: Carousel with Arrows */}
        <div className="hidden md:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.name} className="pl-4 basis-1/3">
                  <ProjectCard project={project} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2" />
            <CarouselNext className="right-0 translate-x-1/2" />
          </Carousel>
        </div>

        {/* Mobile: Stacked Cards */}
        <div className="md:hidden space-y-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideProjects;
