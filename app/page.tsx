"use client";

import { BackgroundRippleEffect } from "@/components/global/background-ripple-effect";
import { TextHoverEffect } from "@/components/global/text-hover-effect";
import { CtaSection } from "@/components/sections/cta-section";
import FAQsSection from "@/components/sections/faqs-section";
import { FeaturesSection } from "@/components/sections/featues-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorks } from "@/components/sections/how-it-works-section";
import StatsSection from "@/components/sections/stats-section";
import TestimonialsSection from "@/components/sections/testimonials-section";

const page = () => {
  return (
    <div>
      <BackgroundRippleEffect />
      <HeroSection />
      <section className="py-12 md:py-24 lg:py-32">
        <FeaturesSection />
      </section>
      <section className=" py-12 md:py-24 bg-muted/50">
        <StatsSection />
      </section>
      <section className=" py-12 md:py-24 ">
        <HowItWorks />
      </section>
      <section className=" py-12 md:py-24">
        <TestimonialsSection />
      </section>
      <section className=" py-12 md:py-24">
        <FAQsSection />
      </section>
      <section className=" w-full">
        <CtaSection />
      </section>
      <section>
        <TextHoverEffect text="REXA AI" />
      </section>
    </div>
  );
};

export default page;
