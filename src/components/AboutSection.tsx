import { useTranslation } from "@/i18n/LanguageContext";

const imageBoxes = [
  { key: "about.img1", img: "https://engitech.s3.amazonaws.com/images/image-box1.jpg" },
  { key: "about.img2", img: "https://engitech.s3.amazonaws.com/images/image-box2.jpg" },
  { key: "about.img3", img: "https://engitech.s3.amazonaws.com/images/image-box3.jpg" },
  { key: "about.img4", img: "https://engitech.s3.amazonaws.com/images/image-box4.jpg" },
];

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre-nos" className="py-24 bg-background">
      <div className="container">
        <div className="bg-foreground text-primary-foreground py-16 px-8 rounded-xl mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold">{t("about.title")}</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">{t("about.label")}</p>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">{t("about.heading")}</h3>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
              <p className="italic font-semibold text-foreground">{t("about.p4")}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {imageBoxes.map((box) => (
              <div key={box.key} className="relative overflow-hidden rounded-xl aspect-square group">
                <img src={box.img} alt={t(box.key)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                  <span className="text-primary-foreground text-xl font-bold">{t(box.key)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
