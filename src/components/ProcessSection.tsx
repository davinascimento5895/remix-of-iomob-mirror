import { motion } from "framer-motion";
import { Search, CalendarCheck, Code2, Rocket } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const ProcessSection = () => {
  const { t } = useTranslation();
  const steps = [
    { icon: Search, title: t("process1.title"), description: t("process1.desc") },
    { icon: CalendarCheck, title: t("process2.title"), description: t("process2.desc") },
    { icon: Code2, title: t("process3.title"), description: t("process3.desc") },
    { icon: Rocket, title: t("process4.title"), description: t("process4.desc") },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">{t("process.label")}</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{t("process.title")}</h2>
        </motion.div>
        <div className="relative grid md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-primary/30" />
          {steps.map((step, i) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 w-24 h-24 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center mb-6 shadow-sm">
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
