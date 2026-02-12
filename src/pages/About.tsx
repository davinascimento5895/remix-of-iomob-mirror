import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <AboutSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
