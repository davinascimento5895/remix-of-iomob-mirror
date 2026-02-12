import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Agende uma consultoria gratuita com nossos especialistas e descubra como a tecnologia pode impulsionar seus resultados.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
          >
            FALE COM UM ESPECIALISTA
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
