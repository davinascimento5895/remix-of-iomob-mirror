import { useTranslation } from "@/i18n/LanguageContext";
import andre from "@/assets/andre.jpg";
import pedro from "@/assets/pedro.jpg";
import davi from "@/assets/davi.png";

const TeamSection = () => {
  const { t } = useTranslation();
  const team = [
    { name: "André Pepino", role: t("team.ceo"), photo: andre },
    { name: "Pedro Andriow", role: t("team.cto"), photo: pedro },
    { name: "Davi Nascimento", role: t("team.qa"), photo: davi },
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container">
        <p className="text-sm font-semibold text-primary text-center tracking-widest uppercase mb-2">{t("team.label")}</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6 text-foreground">{t("team.title")}</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">{t("team.desc")}</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-square">
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
              <p className="text-muted-foreground mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
