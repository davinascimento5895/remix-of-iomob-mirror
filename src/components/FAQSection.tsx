import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "@/i18n/LanguageContext";

const FAQSection = () => {
  const { t } = useTranslation();
  const faqs = [
    { question: t("faq1.q"), answer: t("faq1.a") },
    { question: t("faq2.q"), answer: t("faq2.a") },
    { question: t("faq3.q"), answer: t("faq3.a") },
    { question: t("faq4.q"), answer: t("faq4.a") },
    { question: t("faq5.q"), answer: t("faq5.a") },
    { question: t("faq6.q"), answer: t("faq6.a") },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">{t("faq.label")}</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{t("faq.title")}</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6 data-[state=open]:shadow-sm">
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
