import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CodeTech | شركة برمجيات وهندسة منتجات رقمية" },
      {
        name: "description",
        content:
          "نصمم ونطور المواقع وتطبيقات الويب والموبايل والأنظمة السحابية المخصصة للشركات الطموحة في مصر والمنطقة العربية.",
      },
      { property: "og:title", content: "CodeTech | نبني منتجات رقمية تصمد أمام العمل الحقيقي" },
      {
        property: "og:description",
        content:
          "حلول برمجية متقدمة من المواقع إلى المنصات عالية الأداء، مبنية بأحدث التقنيات الهندسية.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      {/* Sticky Header with Mobile Sheet & Theme Toggle */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="top" className="flex flex-col">
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <ProjectsSection />
        <ProcessSection />
        <TechStackSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Accessible Footer with working links */}
      <Footer />
    </div>
  );
}
