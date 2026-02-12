import { Handshake, SlidersHorizontal, UserCheck } from "lucide-react";

const cards = [
  {
    icon: Handshake,
    title: "Parceiros, Não Fornecedores",
    description:
      "Nos consideramos seus reais parceiros no desenvolvimento de todos os projetos. Verdade e Transparência são nossos mais importantes valores",
  },
  {
    icon: SlidersHorizontal,
    title: "Qualidade e Escalabilidade",
    description:
      "Conte com soluções desenvolvidas pensando em crescimento e escalabilidade, focando em tecnologias de ponta para oferecer produtos personalizados e inovadores",
  },
  {
    icon: UserCheck,
    title: "Foco no Cliente",
    description:
      "Desenvolvimento de Soluções pensando 100% no seu negócio e nas necessidades reais que ele apresenta, gerando maior valor e possibilidade de crescimento sustentável através da tecnologia e gestão de projetos",
  },
];

const ValueCards = () => {
  return (
    <section className="container -mt-16 relative z-20">
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-primary text-primary-foreground rounded-lg p-8 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold leading-tight max-w-[70%]">{card.title}</h3>
              <card.icon className="w-10 h-10 opacity-80 flex-shrink-0" />
            </div>
            <p className="text-sm leading-relaxed opacity-90">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueCards;
