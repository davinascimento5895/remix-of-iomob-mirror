import { DollarSign, Award, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Melhor Custo-Benefício",
    description:
      "Maior eficiência, agilidade e excelente custo-benefício em soluções desenvolvidas a partir de Frameworks Híbridos, viabilizando total compatibilidade com o universo Apple e Android, focando no seu negócio.",
  },
  {
    icon: Award,
    title: "Especialistas em Projetos",
    description:
      "Contamos com profissionais com um profundo conhecimento em gerenciamento de projetos, trazendo a segurança e controle, do começo ao fim, de todas as etapas do seu projeto, reduzindo custos e tempo de produção.",
  },
  {
    icon: BadgeCheck,
    title: "Profissionais Certificados",
    description:
      "Conte com profissionais certificados em projetos e no desenvolvimento de tecnologias à partir das principais tendências e soluções de mercado. A IoMob sempre focando na excelência e qualificação de nosso time.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-foreground">
          Conte com a ioMob,
        </h2>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-primary">
          e Nossos Profissionais.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
