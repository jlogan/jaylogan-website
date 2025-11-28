import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-accent opacity-10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Have a project in mind? Let's discuss how I can help bring it to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-card border-border resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:jay@jaylogan.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm">jay@jaylogan.com</p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">LinkedIn</p>
                    <p className="text-sm">Connect with me</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6">
              <h4 className="font-semibold mb-2 text-accent">Response Time</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to messages within 24-48 hours during business days.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
