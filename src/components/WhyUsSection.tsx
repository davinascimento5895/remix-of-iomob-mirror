import { DollarSign, Award, BadgeCheck } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const WhyUsSection = () => {
  const { t } = useTranslation();
  const features = [
    { icon: DollarSign, title: t("whyus1.title"), description: t("whyus1.desc") },
    { icon: Award, title: t("whyus2.title"), description: t("whyus2.desc") },
    { icon: BadgeCheck, title: t("whyus3.title"), description: t("whyus3.desc") },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-foreground">{t("whyus.title1")}</h2>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-primary">{t("whyus.title2")}</h2>
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
