import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um aplicativo?",
    answer:
      "O prazo varia conforme a complexidade do projeto. Projetos simples podem ser entregues em 4 a 8 semanas, enquanto soluções mais robustas podem levar de 3 a 6 meses. Trabalhamos com sprints ágeis e entregas incrementais para que você acompanhe a evolução do projeto em tempo real.",
  },
  {
    question: "Qual tecnologia vocês utilizam?",
    answer:
      "Utilizamos as tecnologias mais modernas do mercado, incluindo Flutter e React Native para aplicativos móveis, React para aplicações web, e AWS para infraestrutura em nuvem. A escolha da stack depende das necessidades específicas de cada projeto.",
  },
  {
    question: "Vocês atendem clientes fora do Brasil?",
    answer:
      "Sim! A ioMob atua globalmente com presença nos Estados Unidos, Suécia e Brasil. Nosso time está preparado para atender clientes em qualquer fuso horário, com comunicação em português, inglês e espanhol.",
  },
  {
    question: "Como funciona o processo de orçamento?",
    answer:
      "Após um primeiro contato, agendamos uma reunião de descoberta para entender suas necessidades. Em seguida, elaboramos uma proposta detalhada com escopo, cronograma e investimento. A consultoria inicial é gratuita e sem compromisso.",
  },
  {
    question: "Qual o custo médio de um projeto?",
    answer:
      "O investimento depende da complexidade, funcionalidades e prazos do projeto. Trabalhamos com modelos flexíveis que se adaptam a diferentes orçamentos. Entre em contato para uma avaliação personalizada — a consulta é gratuita.",
  },
  {
    question: "Vocês oferecem suporte após o lançamento?",
    answer:
      "Sim, oferecemos planos de suporte e manutenção contínua após o lançamento. Isso inclui monitoramento, correção de bugs, atualizações de segurança e evolução de funcionalidades para garantir que sua solução continue performando.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">
            Tire Suas Dúvidas
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-lg px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
