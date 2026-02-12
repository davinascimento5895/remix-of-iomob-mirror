import { Smartphone, Code, Link, Palette, Brain, FolderKanban } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageContext";

const SolutionsSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const solutions = [
    { icon: Smartphone, title: t("sol1.title"), description: t("sol1.desc") },
    { icon: Code, title: t("sol2.title"), description: t("sol2.desc") },
    { icon: Link, title: t("sol3.title"), description: t("sol3.desc") },
    { icon: Palette, title: t("sol4.title"), description: t("sol4.desc") },
    { icon: Brain, title: t("sol5.title"), description: t("sol5.desc") },
    { icon: FolderKanban, title: t("sol6.title"), description: t("sol6.desc") },
  ];

  return (
    <section id="solucoes" className="py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-foreground">
          {t("solutions.title1")}<br />
          <span className="text-primary">{t("solutions.title2")}</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-2">
            {solutions.map((sol, i) => (
              <button key={sol.title} onClick={() => setActiveIndex(i)}
                className={`w-full text-left p-5 rounded-lg transition-all flex items-center gap-4 ${i === activeIndex ? "bg-primary text-primary-foreground shadow-lg" : "hover:bg-secondary text-foreground"}`}>
                <sol.icon className="w-6 h-6 flex-shrink-0" />
                <span className="font-semibold">{sol.title}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center">
            <div className="bg-secondary rounded-xl p-10">
              <div className="flex items-center gap-4 mb-6">
                {(() => { const Icon = solutions[activeIndex].icon; return <Icon className="w-12 h-12 text-primary" />; })()}
                <h3 className="text-2xl font-bold text-foreground">{solutions[activeIndex].title}</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">{solutions[activeIndex].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
