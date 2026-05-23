"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home">
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="line"></span>
          <span className="label">Indian Manufacturer &middot; Global Exporter</span>
        </div>
        <h1 className="hero-h1">Precision Polymer<br />Filtration <em>Engineered</em><br />for Your Plant</h1>
        <p className="hero-tagline">SS 304 Candle Filters &middot; Spin Pack Filters &middot; Gaskets &middot; Wire Mesh</p>
        <p className="hero-desc">
          Custom-built polymer candle filters, spin pack components, and sealing solutions for CP, POY, FDY, DTY, and PSF spinning lines. Zero bypass. Zero contamination. Built to your exact specifications.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-.85a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.18v1.74z"/></svg>
            Request a Quote
          </a>
          <a href="/Maruti_Catalogue.pdf" download className="btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Catalogue
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-num">100<span>%</span></div>
            <div className="stat-label">Custom Built</div>
          </div>
          <div>
            <div className="stat-num">SS<span> 304</span></div>
            <div className="stat-label">Grade Material</div>
          </div>
          <div>
            <div className="stat-num">Zero</div>
            <div className="stat-label">Defect Protocol</div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-right-bg"></div>
        <div className="hero-img-grid">
          <div className="hero-img-card large">
            <Image src="/images/7.png" alt="Maruti SS 304 Polymer Candle Filter" width={800} height={400} loading="eager" />
          </div>
          <div className="hero-img-card">
            <Image src="/images/6.png" alt="Pleated Melt Candle Filter" width={400} height={400} loading="eager" />
          </div>
          <div className="hero-img-card">
            <Image src="/images/8.png" alt="Metal Sealing Gaskets" width={400} height={400} loading="eager" />
          </div>
        </div>
        <span className="hero-gold-tag">Gujarat, India &middot; Exporting Globally</span>
      </div>
    </section>
  );
}
