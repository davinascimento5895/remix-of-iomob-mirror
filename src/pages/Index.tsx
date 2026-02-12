import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueCards from "@/components/ValueCards";
import SolutionsSection from "@/components/SolutionsSection";
import TechMarquee from "@/components/TechMarquee";
import WhyUsSection from "@/components/WhyUsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
