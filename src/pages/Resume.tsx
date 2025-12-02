import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, ArrowLeft } from "lucide-react";
import jayPhoto from "@/assets/jay-logan-resume.jpeg";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Resume = () => {
  useEffect(() => {
    // Add noindex meta tag
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-accent selection:text-accent-foreground print:bg-white print:text-black">
      <div className="container mx-auto max-w-5xl py-8 px-4 sm:px-6 lg:px-8 print:py-0 print:max-w-none">
        {/* Navigation Bar - Hidden in Print */}
        <div className="print:hidden flex justify-between items-center mb-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>
          <Button onClick={handleDownload} className="gap-2">
            <Download size={16} />
            Print Resume
          </Button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12 print:space-y-0"
        >
          {/* Header Section */}
          <header className="flex flex-col md:flex-row gap-8 items-center md:items-start border-b border-border/40 pb-12 print:border-none print:pb-4 print:flex-row print:gap-6 print:mb-0 print:items-center">
            <div className="w-48 h-48 shrink-0 rounded-2xl overflow-hidden border-4 border-accent/20 shadow-xl print:w-24 print:h-24 print:rounded-full print:border-none print:shadow-none">
              <img src={jayPhoto} alt="Jay Logan" className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1 text-center md:text-left print:text-left">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-primary print:text-black print:text-3xl print:mb-1">
                Jay Logan
              </h1>
              <p className="text-xl text-muted-foreground mb-6 print:text-gray-600 print:mb-3 print:text-base">
                Full-Stack Engineer & Technical Leader
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-muted-foreground print:text-gray-700 print:gap-x-6 print:gap-y-1 print:text-xs">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="print:w-3 print:h-3" />
                  Kennesaw, GA <span className="print:hidden">- 30 Minutes From Atlanta</span>
                </div>
                <div className="flex items-center gap-2 text-accent print:text-black font-medium">
                  (Open to On-site & Remote)
                </div>
                <div className="flex items-center gap-2 print:flex hidden">
                  <Globe size={16} className="print:w-3 print:h-3" />
                  https://jaylogan.com
                </div>
                <div className="flex items-center gap-2 print:flex hidden">
                  <Phone size={16} className="print:w-3 print:h-3" />
                  404-593-7102
                </div>
                <div className="flex items-center gap-2 print:flex hidden">
                  <Mail size={16} className="print:w-3 print:h-3" />
                  jay@jaylogan.com
                </div>
              </div>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="print:mt-2">
            <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2 text-primary print:text-black print:mb-1 print:text-lg print:uppercase print:tracking-wide">
              <Briefcase className="text-accent print:hidden" /> Professional Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg print:text-gray-800 print:text-sm print:leading-relaxed print:mt-0 print:text-justify">
              Full-stack engineer and technical leader with 20+ years of experience architecting, building, and maintaining scalable web applications. Deep expertise in JavaScript/TypeScript, React, Node, and WordPress engineering. Known for transforming outdated systems into modern, automated development pipelines and shipping high-impact digital products. Strong collaborator who excels in fast-moving environments, aligns engineering with user needs, and delivers highly reliable, maintainable code.
            </p>
          </section>

          {/* Core Skills */}
          <section className="print:mt-3">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2 text-primary print:text-black print:mb-2 print:text-lg print:uppercase print:tracking-wide">
              <Globe className="text-accent print:hidden" /> Core Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-x-8 print:gap-y-2 print:text-xs print:mt-0">
              {[
                { category: "Languages & Frameworks", items: "JavaScript, TypeScript, Node.js, React, PHP, HTML, CSS" },
                { category: "Architecture & DevOps", items: "CI/CD, GitHub Actions, AWS ECS/ECR, Docker, Modular & Component-Driven Architecture" },
                { category: "CMS & Backend", items: "Custom WordPress themes/plugins, API development, MySQL" },
                { category: "Front-End Engineering", items: "Maintainable UI components, responsive UX, Gutenberg Blocks" },
                { category: "Tooling & Workflow", items: "Git workflows, Agile, Jira, Jest, Material UI" },
                { category: "Other Strengths", items: "Team leadership, problem solving, systems modernization, client communication" }
              ].map((skill, index) => (
                <div key={index} className="bg-card/50 p-4 rounded-lg border border-border/50 print:border-none print:bg-transparent print:p-0 print:mb-0">
                  <h3 className="font-bold text-accent mb-2 print:text-black print:mb-0 print:text-xs">{skill.category}</h3>
                  <p className="text-muted-foreground print:text-gray-800 print:text-xs print:mt-0">{skill.items}</p>
                </div>
              ))}
            </div>
          </section>

          <Separator className="print:hidden" />

          {/* Professional Experience */}
          <section className="space-y-8 print:space-y-0 print:mt-3">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2 text-primary print:text-black print:mb-2 print:text-lg print:uppercase print:tracking-wide">
              <Briefcase className="text-accent print:hidden" /> Professional Experience
            </h2>

            {[
              {
                role: "Web Developer – State of Georgia",
                company: "Administrative Office of the Courts",
                location: "Atlanta, GA",
                period: "2025",
                achievements: [
                  "Maintained and improved 15+ WordPress sites, building custom themes, plugins, and dynamic Gutenberg blocks to support internal teams and judicial stakeholders.",
                  "Designed and launched the agency’s first CI/CD pipeline for WordPress sites using AWS ECR/ECS and GitHub, reducing deployment time and eliminating manual release errors.",
                  "Modernized legacy sites by implementing component-driven UI patterns, stronger security practices, and performance optimizations across the entire multisite network."
                ]
              },
              {
                role: "Director of Web Development",
                company: "Stuff You Can Use",
                location: "Remote",
                period: "2021 – 2025",
                achievements: [
                  "Led development for 10+ digital products, including full-stack apps used by thousands of educators, ensuring scalable architecture and performant user experience.",
                  "Coordinated a team of up to 30 developers, improving sprint velocity through refined Git workflows and collaborative coding practices.",
                  "Delivered data-driven features and dashboards by designing APIs, analytics workflows, and component-based UIs across the product ecosystem."
                ]
              },
              {
                role: "Web Development Manager",
                company: "Moon Tide Agency",
                location: "Atlanta, GA",
                period: "2020 – 2022",
                achievements: [
                  "Built custom WordPress themes using modern JavaScript and ACF-powered component systems.",
                  "Developed high-converting landing pages and marketing flows using Unbounce and HubSpot.",
                  "Collaborated with designers and PMs to build scalable frontend architecture for client websites."
                ]
              },
              {
                role: "Graphic Designer",
                company: "Notion Digital",
                location: "Atlanta, GA",
                period: "2020 – 2021",
                achievements: [
                  "Produced digital graphics, ads, and social media assets that aligned with brand strategy.",
                  "Partnered with marketing teams to improve visual consistency across digital campaigns.",
                  "Delivered high-quality creative work under tight deadlines using Adobe Creative Suite."
                ]
              },
              {
                role: "Director of Technology",
                company: "Air Care Companies",
                location: "Atlanta, GA",
                period: "2016 – 2020",
                achievements: [
                  "Engineered custom CRM, CMS, and eCommerce systems to automate business processes.",
                  "Led development of internal web and mobile apps that streamlined field operations.",
                  "Managed vendor relationships and mentored a full-stack development team."
                ]
              },
              {
                role: "Web Developer",
                company: "Ashworth College",
                location: "Norcross, GA",
                period: "2014 – 2016",
                achievements: [
                  "Developed and maintained a custom LMS supporting multiple schools and departments.",
                  "Built scalable PHP/MySQL applications to automate administrative workflows.",
                  "Created tools improving performance and efficiency for staff and faculty users."
                ]
              }
            ].map((job, index) => (
              <div key={index} className="break-inside-avoid print:mb-3">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 print:flex-row print:justify-between print:mb-0.5">
                  <div>
                    <h3 className="text-xl font-bold text-foreground print:text-black print:text-sm">{job.role}</h3>
                    <div className="text-accent font-medium print:text-gray-700 print:text-xs print:italic">{job.company}</div>
                  </div>
                  <div className="text-muted-foreground text-sm print:text-gray-600 print:text-xs">
                    {job.period} | {job.location}
                  </div>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-1 text-muted-foreground print:text-gray-800 print:text-xs print:space-y-0.5 print:ml-4 print:leading-relaxed">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Older Experience Summary */}
            <div className="break-inside-avoid pt-4 print:pt-2">
              <h3 className="text-lg font-semibold text-foreground mb-3 print:text-black print:mb-1 print:text-sm">Earlier Experience</h3>
              <div className="space-y-4 print:space-y-0.5">
                {[
                  { role: "Web Developer", company: "Christophe's To Go", year: "2014" },
                  { role: "Web Developer", company: "Do My Own Pest Control", year: "2014" },
                  { role: "Director of Web Development", company: "OwnerWiz Realty", year: "2010 – 2013" },
                  { role: "Web Developer", company: "Clear Choice USA", year: "2008 – 2010" },
                  { role: "Sr. FinishLynx Operator / Web Developer", company: "Perfect Timing Group", year: "2005 – 2008" }
                ].map((job, i) => (
                  <div key={i} className="flex justify-between text-sm text-muted-foreground print:text-gray-700 print:text-xs">
                    <span><strong className="text-foreground print:text-black">{job.role}</strong> – {job.company}</span>
                    <span>{job.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Separator className="print:hidden" />

          {/* Education */}
          <section className="break-inside-avoid print:mt-3">
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2 text-primary print:text-black print:mb-1 print:text-lg print:uppercase print:tracking-wide">
              <GraduationCap className="text-accent print:hidden" /> Education
            </h2>
            <div className="print:mt-0">
              <h3 className="text-xl font-bold text-foreground print:text-black print:text-sm print:mb-0">University of South Carolina</h3>
              <div className="text-accent print:text-gray-700 print:text-xs print:mt-0">Columbia, SC</div>
              <div className="text-muted-foreground print:text-gray-700 print:text-xs print:mt-0">Bachelor of Science, Business – 2005</div>
            </div>
          </section>

        </motion.div>
      </div>
      
      {/* Print Styles Injection */}
      <style>{`
        @media print {
          @page {
            margin: 10mm 12mm;
          }
          body {
            background-color: white;
            color: black;
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          }
          .print-hidden {
            display: none !important;
          }
          
          /* Typography Improvements */
          p, li {
            line-height: 1.5 !important; /* Increased for readability */
          }
          
          /* Layout Resets */
          h1, h3, h4, h5, h6 {
            page-break-after: avoid;
            margin-top: 0 !important;
            margin-bottom: 0.25rem !important;
            line-height: 1.2 !important;
          }
          
          h2 {
            page-break-after: avoid;
            margin-top: 1.5rem !important; /* Added spacing above section headings */
            margin-bottom: 0.5rem !important;
            line-height: 1.2 !important;
          }
          
          section {
            page-break-inside: auto; /* Allow natural breaking */
          }
          
          .break-inside-avoid {
            page-break-inside: avoid;
            margin-top: 1.5rem !important; /* Spacing between job entries */
          }
          
          /* Spacing Resets */
          * {
            /* Be careful with universal selector, but we want to override defaults */
          }
          
          /* Ensure background colors (like badges/cards) are printed if user settings allow, but here we mostly want clean white */
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
      `}</style>
    </div>
  );
};

export default Resume;
