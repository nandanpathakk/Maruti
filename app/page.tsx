"use client";

import { useEffect } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { GoalsStrip } from "@/components/sections/GoalsStrip";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  useEffect(() => {
    // Robust Intersection Observer that handles elements rendering late
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        } 
      });
    }, { threshold: 0.05, rootMargin: '50px' });
    
    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        observer.observe(el);
      });
    };

    // Initial check
    observeAll();
    
    // Fallback interval in case of progressive hydration or delayed rendering
    const intervalId = setInterval(observeAll, 300);

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <GoalsStrip />
      <ProductsSection />
      <QualitySection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
