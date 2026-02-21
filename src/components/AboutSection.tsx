import { useTranslation } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const imageBoxes = [
  { key: "about.img1", img: "https://engitech.s3.amazonaws.com/images/image-box1.jpg" },
  { key: "about.img2", img: "https://engitech.s3.amazonaws.com/images/image-box2.jpg" },
  { key: "about.img3", img: "https://engitech.s3.amazonaws.com/images/image-box3.jpg" },
  { key: "about.img4", img: "https://engitech.s3.amazonaws.com/images/image-box4.jpg" },
];

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre-nos" className="bg-background">
      {/* Hero Header */}
      <div className="py-20 bg-gradient-to-br from-[hsl(var(--primary)/0.05)] to-background">
        <div className="container">
          <p className="text-primary font-semibold mb-2 tracking-wide uppercase text-sm">{t("about.title")}</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("about.heading")}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">{t("about.label")}</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
              <div className="p-6 bg-secondary/50 rounded-xl border border-border/50 mt-8">
                <p className="italic font-medium text-foreground text-xl leading-snug">"{t("about.p4")}"</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            {imageBoxes.map((box, index) => (
              <div 
                key={box.key} 
                className={`relative overflow-hidden rounded-2xl shadow-sm group ${index % 2 === 1 ? 'mt-8 lg:mt-12' : ''} aspect-[4/5]`}
              >
                <img 
                  src={box.img} 
                  alt={t(box.key)} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <span className="text-white text-xl font-bold tracking-wide">{t(box.key)}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
