import { Smartphone, Code, Link, Palette, Brain, FolderKanban } from "lucide-react";
import { useState } from "react";

const solutions = [
  {
    icon: Smartphone,
    title: "Aplicativos Móveis",
    description:
      "Desenvolvimento de Aplicativos Híbridos para dispositivos móveis, contando com a possibilidade de integrações e total personalização.",
  },
  {
    icon: Code,
    title: "Coding e Backend",
    description:
      "Soluções personalizadas e desenvolvimento que atende sua necessidade de forma única, focando no seu negócio.",
  },
  {
    icon: Link,
    title: "Integração & API's",
    description:
      "Integrações com webservices e APIs, proporcionando as funcionalidades de terceiros mais atuais e seguras.",
  },
  {
    icon: Palette,
    title: "UX / UI",
    description:
      "Os melhores profissionais e técnicas para a definição da interface mais intuitiva e criando a melhor experiência de uso para a sua solução.",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description:
      "É de nossa expertise o perfilamento de usuários, a análise de risco e o monitoramento remoto, utilizando tecnologias há muito validadas no mercado.",
  },
  {
    icon: FolderKanban,
    title: "Gestão de Projetos",
    description:
      "Somos ágeis e utilizamos metodologias inovadoras para desenvolvimento de soluções igualmente inovadoras. Maior rapidez, maior satisfação.",
  },
];

const SolutionsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="solucoes" className="py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-foreground">
          Atuação Global, Excelência Local.<br />
          <span className="text-primary">Conheça Nossas Soluções.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: list */}
          <div className="space-y-2">
            {solutions.map((sol, i) => (
              <button
                key={sol.title}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left p-5 rounded-lg transition-all flex items-center gap-4 ${
                  i === activeIndex
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "hover:bg-secondary text-foreground"
                }`}
              >
                <sol.icon className="w-6 h-6 flex-shrink-0" />
                <span className="font-semibold">{sol.title}</span>
              </button>
            ))}
          </div>

          {/* Right: detail */}
          <div className="flex items-center">
            <div className="bg-secondary rounded-xl p-10">
              <div className="flex items-center gap-4 mb-6">
                {(() => {
                  const Icon = solutions[activeIndex].icon;
                  return <Icon className="w-12 h-12 text-primary" />;
                })()}
                <h3 className="text-2xl font-bold text-foreground">
                  {solutions[activeIndex].title}
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {solutions[activeIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
