import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";
import urbsLogo from "@/assets/clients/urbs.png";
import rotaryLogo from "@/assets/clients/rotary.svg";
import pcLogo from "@/assets/clients/pequeno-cotolengo.png";

const clients = [
  { name: "URBS", logo: urbsLogo },
  { name: "Rotary", logo: rotaryLogo },
  { name: "Pequeno Cotolengo", logo: pcLogo },
];

const ClientLogos = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">{t("clients.label")}</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{t("clients.title")}</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-3 gap-6 max-w-xl mx-auto justify-items-center">
          {clients.map((client) => (
            <div key={client.name} className="aspect-square rounded-xl bg-background border border-border flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:shadow-md cursor-default" title={client.name}>
              <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain" loading="lazy" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
