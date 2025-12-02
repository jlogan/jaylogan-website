import { motion } from "framer-motion";
import { 
  Linkedin, 
  Mail, 
  Phone, 
  Instagram, 
  Twitter, 
  Facebook, 
  Ghost, 
  Video, 
  AtSign, 
  MessageCircle,
  Music
} from "lucide-react";
import jayContactPhoto from "@/assets/jay-logan-contact.jpeg";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call / SMS / WhatsApp",
      value: "404-593-7102",
      href: "tel:4045937102",
      color: "hover:text-green-500",
      bg: "hover:bg-green-500/10"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "jay@jaylogan.com",
      href: "mailto:jay@jaylogan.com",
      color: "hover:text-blue-500",
      bg: "hover:bg-blue-500/10"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      value: "@jaylogandotcom",
      href: "https://instagram.com/jaylogandotcom",
      color: "hover:text-pink-500",
      bg: "hover:bg-pink-500/10"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "X (Twitter)",
      value: "@jaylogandotcom",
      href: "https://x.com/jaylogandotcom",
      color: "hover:text-sky-500",
      bg: "hover:bg-sky-500/10"
    },
    {
      icon: <Video className="w-5 h-5" />, // Placeholder for TikTok
      label: "TikTok",
      value: "@jaylogandotcom",
      href: "https://tiktok.com/@jaylogandotcom",
      color: "hover:text-purple-500",
      bg: "hover:bg-purple-500/10"
    },
    {
      icon: <AtSign className="w-5 h-5" />,
      label: "Threads",
      value: "@jaylogandotcom",
      href: "https://threads.net/@jaylogandotcom",
      color: "hover:text-orange-500",
      bg: "hover:bg-orange-500/10"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "/in/jayloganonline",
      href: "https://www.linkedin.com/in/jayloganonline",
      color: "hover:text-blue-600",
      bg: "hover:bg-blue-600/10"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      value: "/jaylogan",
      href: "https://www.facebook.com/jaylogan",
      color: "hover:text-blue-700",
      bg: "hover:bg-blue-700/10"
    },
    {
      icon: <Ghost className="w-5 h-5" />,
      label: "Snapchat",
      value: "Add Me",
      href: "https://snapchat.com/t/u0oJZYkO",
      color: "hover:text-yellow-500",
      bg: "hover:bg-yellow-500/10"
    },
    {
      icon: <Music className="w-5 h-5" />,
      label: "Spotify",
      value: "Jay Logan",
      href: "https://open.spotify.com/user/s4wvb5sruozgns3uwcpuovuad",
      color: "hover:text-green-600",
      bg: "hover:bg-green-600/10"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contact forms are <span className="italic text-accent font-semibold">soooo</span> 2006. 
            <br/>
            They're impersonal, prone to bots, and honestly? Just boring.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            I prefer organic connections. Reach out to me however you like!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-accent/20 shadow-2xl rotate-0 hover:rotate-3 transition-transform duration-500">
                <img 
                  src={jayContactPhoto} 
                  alt="Jay Logan" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay with playful badge */}
                <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-md px-4 py-2 rounded-lg border border-accent/30 shadow-lg">
                  <p className="text-sm font-bold text-accent">🚫 No Bots Allowed</p>
                  <p className="text-xs text-muted-foreground">100% Real Human Response</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md ${method.bg}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-background shadow-sm border border-border group-hover:scale-110 transition-transform ${method.color}`}>
                  {method.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {method.label}
                  </p>
                  <p className="text-sm font-bold truncate text-foreground">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
