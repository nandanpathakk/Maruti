"use client";

import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav id="mainNav" className={isScrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <a href="#home" className="nav-logo">
            <span className="brand">MARUTI</span>
            <span className="sub">Filters & Gaskets</span>
          </a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#quality">Quality</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="/Maruti_Catalogue.pdf" download className="nav-cta">Download Catalogue</a>
          <button className="nav-hamburger" onClick={() => setMobileMenuOpen(true)} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </nav>

      <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`} id="mobileNav">
        <button className="mobile-nav-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close">✕</button>
        <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a>
        <a href="#quality" onClick={() => setMobileMenuOpen(false)}>Quality</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
      </div>
    </>
  );
}
