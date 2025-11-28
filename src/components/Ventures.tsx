import { motion } from "framer-motion";

const ventures = [
  { name: "Brogrammers Agency", logo: "🚀" },
  { name: "Tech Startup Alpha", logo: "⚡" },
  { name: "Digital Solutions Co", logo: "💎" },
  { name: "Innovation Labs", logo: "🎯" },
  { name: "Cloud Services Inc", logo: "☁️" },
  { name: "Mobile First Studio", logo: "📱" }
];

const Ventures = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold mb-2">
            Brands & Projects I've Built or Helped Build
          </h3>
          <p className="text-muted-foreground">
            Entrepreneurial ventures and collaborative projects
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-6 aspect-square flex flex-col items-center justify-center hover:border-primary/30 transition-all duration-300">
                <div className="text-4xl mb-2">{venture.logo}</div>
                <p className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {venture.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;
