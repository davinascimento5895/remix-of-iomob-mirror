import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/i18n/LanguageContext";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>ioMob - {t("about.title")}</title>
        <meta name="description" content={t("about.heading")} />
      </Helmet>
      <TopBar />
      <Navbar />
      <AboutSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
