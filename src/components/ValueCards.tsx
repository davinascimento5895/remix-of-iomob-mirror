import { Handshake, SlidersHorizontal, UserCheck } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const ValueCards = () => {
  const { t } = useTranslation();
  const cards = [
    { icon: Handshake, title: t("value1.title"), description: t("value1.desc") },
    { icon: SlidersHorizontal, title: t("value2.title"), description: t("value2.desc") },
    { icon: UserCheck, title: t("value3.title"), description: t("value3.desc") },
  ];

  return (
    <section className="container -mt-16 relative z-20">
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.title} className="bg-primary text-primary-foreground rounded-lg p-8 hover:shadow-xl transition-shadow">
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
