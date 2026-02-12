import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useTranslation } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Smartphone, Users, MapPin, CreditCard, Shield, Clock, Star, ExternalLink } from "lucide-react";
import meuestarMockup from "@/assets/cases/meuestar-mockup.png";

const Cases = () => {
  const { t } = useTranslation();

  const stats = [
  { icon: Users, value: "+300k", label: t("meuestar.stat1") },
  { icon: Smartphone, value: "+28k", label: t("meuestar.stat2") },
  { icon: MapPin, value: "Curitiba", label: t("meuestar.stat3") },
  { icon: Clock, value: "2020", label: t("meuestar.stat4") }];


  const features = [
  { icon: CreditCard, title: t("meuestar.feat1.title"), desc: t("meuestar.feat1.desc") },
  { icon: Shield, title: t("meuestar.feat2.title"), desc: t("meuestar.feat2.desc") },
  { icon: Smartphone, title: t("meuestar.feat3.title"), desc: t("meuestar.feat3.desc") },
  { icon: Star, title: t("meuestar.feat4.title"), desc: t("meuestar.feat4.desc") }];


  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[hsl(var(--primary)/0.05)] to-background">
        <div className="container">
          <p className="text-primary font-semibold mb-2 tracking-wide uppercase text-sm">{t("cases.label")}</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("cases.title")}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">{t("cases.subtitle")}</p>
        </div>
      </section>

      {/* MeuEstaR Feature Case */}
      <section className="py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                {t("meuestar.badge")}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Meu EstaR Digital Curitiba
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t("meuestar.desc1")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t("meuestar.desc2")}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat) =>
                <div key={stat.label} className="bg-secondary rounded-lg p-4">
                    <stat.icon className="w-5 h-5 text-primary mb-2" />
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                )}
              </div>

              <a
                href="https://meuestar.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">

                {t("meuestar.visit")} <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="flex justify-center">
              <motion.img

                alt="Meu EstaR Digital App"
                className="max-w-sm w-full rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }} src="/lovable-uploads/31470e22-a3de-4889-ba5f-afa096eb4c58.png" />

            </div>
          </motion.div>
        </div>
      </section>

      {/* Features / What we built */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">{t("meuestar.features.title")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) =>
            <motion.div key={feat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-background rounded-xl p-6 shadow-sm">
                <feat.icon className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bold text-foreground mb-2">{feat.title}</h4>
                <p className="text-sm text-muted-foreground">{feat.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Tech & Impact */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8">{t("meuestar.impact.title")}</h3>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>{t("meuestar.impact.p1")}</p>
            <p>{t("meuestar.impact.p2")}</p>
            <p>{t("meuestar.impact.p3")}</p>
          </div>
        </div>
      </section>

      {/* Media coverage */}
      <section className="py-16 bg-secondary/30">
        <div className="container text-center">
          <h3 className="text-xl font-bold text-foreground mb-8">{t("meuestar.media.title")}</h3>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {[
              { name: "CNT Notícias", url: "https://www.youtube.com/watch?v=Akk6-OFcIV4" },
              { name: "Globo RPC", url: "https://www.youtube.com/watch?v=KjnLfRpzJFM" },
              { name: "Band TV", url: "https://www.youtube.com/watch?v=PEmYbHG_8SE" },
              { name: "Transamerica Light", url: "https://www.youtube.com/watch?v=De_SOjsE3LU" },
            ].map((media) =>
              <a key={media.name} href={media.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors">
                {media.name} <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>);

};

export default Cases;