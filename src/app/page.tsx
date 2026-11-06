import React from "react";
import HeroSection from "@/components/home/HeroSection";
import CompanyHighlightsSection from "@/components/home/CompanyHighlightsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import GlobalNetworkTopologySection from "@/components/home/GlobalNetworkTopologySection";
import ServicesOverviewSection from "@/components/home/ServicesOverviewSection";
import CostCalculatorSection from "@/components/home/CostCalculatorSection";
import CustomerJourneySection from "@/components/home/CustomerJourneySection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TechnologyPartnersSection from "@/components/home/TechnologyPartnersSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ConsultationCtaBanner from "@/components/home/ConsultationCtaBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Company Highlights & Animated Metrics */}
      <CompanyHighlightsSection />

      {/* 3. Why Choose VAYU IT Solutions */}
      <WhyChooseUsSection />

      {/* 4. Global Infrastructure & Network Topology Interactive Map */}
      <GlobalNetworkTopologySection />

      {/* 5. Core Services Practices Overview */}
      <ServicesOverviewSection />

      {/* 6. Interactive IT Cost Optimization & ROI Estimator */}
      <CostCalculatorSection />

      {/* 7. Customer Journey Timeline */}
      <CustomerJourneySection />

      {/* 8. Industries Served */}
      <IndustriesSection />

      {/* 9. Technology Partners & Alliances */}
      <TechnologyPartnersSection />

      {/* 10. Client Testimonials */}
      <TestimonialsSection />

      {/* 11. Consultation CTA Banner */}
      <ConsultationCtaBanner />
    </div>
  );
}
