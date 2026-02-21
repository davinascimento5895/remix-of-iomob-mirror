import { lazy, Suspense } from "react";

// Above-the-fold — loaded immediately for instant first paint
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueCards from "@/components/ValueCards";
import SolutionsSection from "@/components/SolutionsSection";
import TechMarquee from "@/components/TechMarquee";
import WhyUsSection from "@/components/WhyUsSection";
import StatsCounter from "@/components/StatsCounter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Below-the-fold — lazy loaded as user scrolls down
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const TeamSection = lazy(() => import("@/components/TeamSection"));
const ClientLogos = lazy(() => import("@/components/ClientLogos"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
const CTABanner = lazy(() => import("@/components/CTABanner"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-16">
    <div className="w-6 h-6 border-3 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

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

      <Suspense fallback={<SectionLoader />}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TeamSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ClientLogos />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <BlogSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CTABanner />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
