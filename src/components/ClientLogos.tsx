import { motion } from "framer-motion";

const clients = [
  { name: "URBS", initials: "URBS" },
  { name: "Rotary", initials: "RC" },
  { name: "Pequeno Cotolengo", initials: "PC" },
  { name: "Olist", initials: "OL" },
  { name: "Grupo Boticário", initials: "GB" },
  { name: "Hospital São Vicente", initials: "HSV" },
];

const ClientLogos = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">
            Parceiros
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Empresas que Confiam na ioMob
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto"
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="aspect-square rounded-xl bg-background border border-border flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:shadow-md cursor-default"
              title={client.name}
            >
              <span className="text-lg font-bold text-foreground tracking-wide">
                {client.initials}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
