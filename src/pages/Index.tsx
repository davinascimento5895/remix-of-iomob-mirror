import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueCards from "@/components/ValueCards";
import SolutionsSection from "@/components/SolutionsSection";
import TechMarquee from "@/components/TechMarquee";
import WhyUsSection from "@/components/WhyUsSection";
import StatsCounter from "@/components/StatsCounter";

import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import ClientLogos from "@/components/ClientLogos";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <HeroSection />
      <ValueCards />
      <SolutionsSection />
      <TechMarquee />
      <WhyUsSection />
      <StatsCounter />
      
      <ProcessSection />
      <TeamSection />
      <ClientLogos />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
